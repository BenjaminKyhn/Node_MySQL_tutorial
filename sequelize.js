const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    username: 'root',
    password: 'password',
    port: 8001,
    database: 'db',
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Sucessful");
    })
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });