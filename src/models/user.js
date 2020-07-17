const Sequelize =require("sequelize")
const sequelize = require("../dbs/connection")

module.exports =sequelize.define("user",{

    id:{
        type:Sequelize.INTEGER(10),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING(25),
        allowNull:false
    },
    mobile:{
        type:Sequelize.STRING(10),
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    travel:{
        type:Sequelize.STRING(50),
        allowNull:false
    }
    
},{  freezeTableName: true
}
)