'use strict';
module.exports = (sequelize, DataTypes) => {
    const Language = sequelize.define('Language', {
            language_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            iso_6391: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            is_active: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            }
        },
        {
            freezeTableName: true,
        }
	);

    Language.associate = (models) => {
        // associations can be defined here
        Language.hasMany(models.Sub_Category_Language, {
            foreignKey: 'language_id',
            as: 'subCategoryLanguages',
        });
    };

    return Language;
};