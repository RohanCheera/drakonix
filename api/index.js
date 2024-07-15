// install dependencies
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes');
const cors=require('cors');



const app = express();
const PORT = 8800;

// Enable CORS for all routes
app.use(cors({
  origin:["https://drakonix-fnd.vercel.app/"],
  methods:["GET","POST"],
  credentials:true
}));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://drakonix-fnd.vercel.app/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


// Connect to MongoDB
// MongoDB connection
mongoose.connect("mongodb+srv://cheerarohan:drakonix2905@cluster0.jbzbwbi.mongodb.net/drakonix?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
  // Start server after successful MongoDB connection
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
  process.exit(1);
});



// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api/form', formRoutes);


