const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/stud-db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, (err)=>{
    if(err){
        return new Error('Unable to connect to database')
    }
    console.log('successfully connected...')
})

require('../models/student-model')