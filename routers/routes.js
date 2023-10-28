const express = require('express');
const { controller } = require('../controllers/controller');
const { midlewar } = require('../midlewars/midlewar');

const router = express.Router();

router.get('/', controller.getData);

router.post('/post', midlewar, controller.postData);

module.exports = { router };