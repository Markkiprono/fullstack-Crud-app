require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(`shutting down the server because of ${err.message}`);
    console.log(
      `shutting down the server because of unhandled promise rejection`
    );
    process.exit(1);
  }
};
module.exports = connectDB;
