'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Sub_Category_Language', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sub_category_text: {
        type: Sequelize.STRING(50),
      },
      sub_category_description: {
        type: Sequelize.STRING(500),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
	  language_id: {
		  type: Sequelize.INTEGER,
		  onDelete: 'CASCADE',
		  references: {
			  model: 'Language',
			  key: 'id',
			  as: 'language_id',
		  }
	  }
    });
  },
  down: (queryInterface /*, Sequelize */) => {
    queryInterface.dropTable('Sub_Category_Language');
  }
};