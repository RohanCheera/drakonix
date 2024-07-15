const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  // Define your form fields here
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  // Add more fields as needed
});

const FormModel = mongoose.model('Form', formSchema);

module.exports = FormModel;
