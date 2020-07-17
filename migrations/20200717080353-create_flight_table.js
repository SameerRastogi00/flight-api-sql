'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return  queryInterface.createTable("flight",{
      id:{
        type:Sequelize.DataTypes.INTEGER(10),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    location:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
    from:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false
    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE

    },{  freezeTableName: true
    })
 
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('flight')
   
  }
};
