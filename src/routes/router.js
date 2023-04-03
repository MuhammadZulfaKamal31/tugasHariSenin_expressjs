const express = require('express');
const Controller = require('../controllers/getHome');
const Controller2 = require('../controllers/getAbout');
const Controller3 = require('../controllers/getProducts');


const router = express.Router();

router.get('/', Controller.getHome);
router.get('/about', Controller2.getAbout);
router.get('/getProduct', Controller3.getProducts);



module.exports = router;
