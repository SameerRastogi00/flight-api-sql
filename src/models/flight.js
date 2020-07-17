const Sequelize =require("sequelize")
const sequelize = require("../dbs/connection")

module.exports =sequelize.define("flight",{

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
    from:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
},{  freezeTableName: true
}
)