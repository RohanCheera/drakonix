const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// Route for form submission
router.post('/submit', formController.submitForm);

module.exports = router;
