const mongoose = require('mongoose')

// create schema
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum: ['manager', 'chef', 'waiter'],
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    salary: {
       type: Number,
       required: true
    }
})

// create model
const Person = mongoose.model('Person', personSchema);

module.exports = Person