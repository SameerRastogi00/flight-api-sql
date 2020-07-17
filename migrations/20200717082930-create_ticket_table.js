'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return  queryInterface.createTable("ticket",{
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
    
    ,
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE

    },{  freezeTableName: true
    })
 
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ticket')
   
  }
};
