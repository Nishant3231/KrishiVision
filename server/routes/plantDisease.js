
const router = require('express').Router;
const { predictDisease } = require('../controllers/plantDisease');
router.post('/predictDisease' , predictDisease);