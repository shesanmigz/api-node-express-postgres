const languagesController = require('../controllers').language;
const subCategoryLanguageController = require('../controllers').sub_category_language;

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome to the Languages API!'
	}));
	
	app.post('/api/languages', languagesController.create);
	
	app.get('/api/languages', languagesController.list);
	
	app.post('/api/:language_id/subCategoryLanguages', subCategoryLanguageController.create);
	
	app.get('/api/subCategoryLanguages', subCategoryLanguageController.list);
}