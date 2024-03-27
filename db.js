const mongoose = require('mongoose');
require('dotenv').config();

//localhost url
// const mongooseURL= 'mongodb://localhost:27017/myfirstdatabase';

// Local: replace mongooseUrl with mongooseUrl imported from .env file
// const mongooseURL= process.env.MONGOOSE_URL_Local;

//mongodb atlas url i.e. cluster url/ online cloud url
// const mongooseURL= 'mongodb+srv://jyoti:password982126@cluster0.e8rir.mongodb.net/';

// Cloud: replace mongooseUrl with mongooseUrl imported from .env file
const mongooseURL= process.env.MONGOOSE_URL_Cloud;

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