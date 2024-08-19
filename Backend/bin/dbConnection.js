require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database:process.env.DB_NAME,
  dialect:process.env.DB_DIALECT,
});



sequelize.authenticate().then(()=>{
    console.log("Database Connected Successfully")
}).catch(()=>{
    console.log("Connection Failed")
})


module.exports=sequelize;