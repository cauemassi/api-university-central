const express = require ('express');

const router = express.Router();

const apiController = require('../controllers/university_controller');


router.get('/universities', apiController.index);

router.post('/university', apiController.create);

router.get('/university/:id', apiController.show);

router.delete('/university/:id', apiController.delete);

router.put('/university/:id', apiController.update);


module.exports = router;