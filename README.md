# Node_MySQL_tutorial
First install dependencies:  
`npm install`

Then install mysql2 with the following command:  
`npm install --save mysql2`

Use this command in the terminal to start all the docker containers:  
`docker-compose up --build`

Then start running the demo files with Node for example:  
`node demo_db_connection.js`

This project has Sequelize functionality. Run the Sequelize.js file to insert users into the User table of the database:  
`node sequelize.js`