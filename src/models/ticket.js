const Sequelize =require("sequelize")
const sequelize = require("../dbs/connection")

module.exports =sequelize.define("ticket",{

    id:{
        type:Sequelize.INTEGER(10),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    location:{
        type:Sequelize.STRING,
        allowNull:false
    },
    to:{
        type:Sequelize.STRING(10),
        allowNull:false
    },
    date:{
        type:Sequelize.DATE,
        allowNull:false,
    },
    userId:{
        type:Sequelize.INTEGER(10),
        allowNull:false
    }
    
},{  freezeTableName: true
}
)