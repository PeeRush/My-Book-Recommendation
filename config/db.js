const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    // Mongoose set strictQuery
    mongoose.set('strictQuery', true);

    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");
  } catch (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;

