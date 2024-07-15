const FormModel = require('../models/Form');

exports.submitForm = async (req, res) => {
  try {
    // Assuming the form data is sent in the body
    const formData = req.body;
    
    // Create a new document in the database using Mongoose
    const newFormData = new FormModel(formData);
    await newFormData.save();
    
    // Send success response
    res.json({ message: 'Message sent and saved successfully' });
  } catch (error) {
    // If an error occurs, send an error response
    console.error('Error submitting form:', error);
    res.status(500).json({ error: 'An error occurred while saving the form data' });
  }
};
