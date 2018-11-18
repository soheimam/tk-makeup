const models = require('./models')
const express = require('express')
const ejs = require('ejs')
const pg = require('pg')


const app = express()

app.set('view engine', 'ejs')
app.use(express.static('assets'))


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/booking', (req,res)=>{
    // query db re: what time available
    //render booking drop down with time slot avail.

    res.render('bookings')
})

app.post('/booking', (req,res)=>{
    //saving allocated time and date for appointment and confirming 
    //with user
    res.render('/confirmation')
})

//// API
app.get('/api/availability', (req,res)=>{
    res.json({date: "11-11-2019", available: [ 1,2,3,4,5], unavailable: [ 2 ]})
})


// sync() will create all table if they doesn't exist in database
models.sequelize.sync().then(function () {
    app.listen(3000,()=>{
        console.log('I am listening')  
      })
  });

