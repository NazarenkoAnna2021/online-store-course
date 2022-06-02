const Router = require('express');
const router = new Router();
const deviseController = require('../controllers/deviseController');


router.post('/create', deviseController.create);
router.get('/get', deviseController.getAll);
router.get('/:id', deviseController.getOne);

module.exports = router;