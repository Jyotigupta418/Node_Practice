const mongoose = require('mongoose');
const mongooseURL= 'mongodb://localhost:27017/myfirstdatabase';

mongoose.connect(mongooseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('error', () => {
    console.error('Error while connecting to MongoDB');
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
})

module.exports = db