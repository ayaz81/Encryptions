// src/db/connection.js

const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Ani:rlTftBwNhtIRUtKe@cluster0.2sfbj.mongodb.net/SiteDB', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB;