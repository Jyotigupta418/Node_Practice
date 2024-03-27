// var fs = require("fs");
// var os = require("os");

// const user = os.userInfo();

// console.log(user.username);

// fs.appendFile("test.txt", user.username+ '\n', function (err) {
//     if (err) throw err;
//     console.log("Saved!");
// })

// const b = require('./imp-exp.js')
// console.log(b)

// const _ = require('lodash')
// const add = _.clone(3, 5)
// console.log(add)

const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config()

const bodyParser = require('body-parser')
app.use(bodyParser.json());
// after .env file conig() we need to use PORT var for Port No at app.listen
const PORT = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.send('Welcome to my API !')
})

app.get('/test', (req,res)=>{
    var data ={
        name: 'Jyoti',
        age: 23,
        city: 'Birgunj',
        country: 'Nepal',
        religion: 'Hindu'
    }
    res.send(data) 
})    //it of gives data but we dont have access to take these data so we use postman


const personRouter = require('./routes/personRoutes')
app.use('/person', personRouter)

const menuRouter = require('./routes/menuRoutes')
app.use('/menu', menuRouter)



// app.listen(3000, ()=>{console.log('server is running on port 3000')})

//after .env file configuration we need to use Port var to below line 
app.listen(PORT, ()=>{console.log('server is running on port 3000')})

