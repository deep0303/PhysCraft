// config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://physcraft:physcraft@cluster0.jxr9c.mongodb.net/physcraft?retryWrites=true&w=majority";
    
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('Connected to MongoDB Atlas successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;