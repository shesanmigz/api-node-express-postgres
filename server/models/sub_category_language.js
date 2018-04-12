'use strict';
module.exports = (sequelize, DataTypes) => {
    const Sub_Category_Language = sequelize.define('Sub_Category_Language', {
            sub_category_text: DataTypes.STRING,
            sub_category_description: DataTypes.STRING
        },
        {
            freezeTableName: true
        }
    );

    Sub_Category_Language.associate = (models) => {
        Sub_Category_Language.belongsTo(models.Language, {
            foreignKey: 'language_id',
            onDelete: 'CASCADE'
        });
    };
  
    return Sub_Category_Language;
};