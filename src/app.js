const express = require('express')
const path = require('path')
require('../models/db')
const studentRouter = require('../controller/stduent-controller')
var bodyParser = require('body-parser')


const app = express()


app.use(bodyParser.json())

app.set('view engine', 'hbs')
const staticPath = path.join(__dirname, '../public')
app.use(express.static(staticPath))

const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
app.set('views' , viewsPath)

app.use(bodyParser.urlencoded({ extended: true }))


app.use('/',studentRouter)





app.listen(4000, ()=>{
    console.log('serveris running on the port 4000')
})