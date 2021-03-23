const express = require ('express');

const router = express.Router();

const universitiesController = require('../controllers/university_controller');


router.get('/universities', universitiesController.index);

router.post('/university', universitiesController.create);

router.get('/university/:id', universitiesController.show);

router.delete('/university/:id', universitiesController.delete);

router.put('/university/:id', universitiesController.update);


module.exports = router;