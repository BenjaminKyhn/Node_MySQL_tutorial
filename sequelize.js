const { Sequelize, Model, DataTypes } = require('sequelize');

// Create a Sequelize object with options
const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    username: 'root',
    password: 'password',
    port: 8001,
    database: 'db',
});

// Test the connection
sequelize
    .authenticate()
    .then(() => {
        console.log("Sucessful");
    })
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });

// Create a User class
class User extends Model {}
User.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

// Create a user and add it to the users table (inserted into database immediately)
(async () => {
    await sequelize.sync();
    const jane = await User.create({
        username: 'johndoe',
        birthday: new Date(1988, 6, 20)
    });
    console.log(jane.toJSON());
})();