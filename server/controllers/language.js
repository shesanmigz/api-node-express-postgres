const Language = require('../models').Language;

module.exports = {
    create(req, res) {
        return Language
            .create({
                language_name: req.body.language_name,
                iso_6391: req.body.iso_6391,
                is_active: req.body.is_active
            })
            .then(language => res.status(200).send(language))
            .catch(error => res.status(400).send(error)); // a simple error handling will do for now
    },
    
    list(req, res) {
        return Language
            .all()
            .then(languages => res.status(200).send(languages))
            .catch(error => res.status(400).send(error));
    }
};