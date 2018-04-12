const Sub_Category_Language = require('../models').Sub_Category_Language;
const Language = require('../models').Language;

module.exports = {
    create(req, res) {
        return Sub_Category_Language
            .create({
                sub_category_text: req.body.sub_category_text,
                sub_category_description: req.body.sub_category_description,
                language_id: req.params.language_id,
            })
            .then(sub_category_language => res.status(201).send(sub_category_language))
            .catch(error => res.status(400).send(error)); // a simple error handling will do for now
    },
    
    list(req, res) {
        return Language
            .findAll({
                include: [{
                    model: Sub_Category_Language,
                    as: 'subCategoryLanguages',
                }]
            })
            .then(languages => res.status(200).send(languages))
            .catch(error => res.status(400).send(error));
    }
};