const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email :{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    branch: {
        type: String,
        required: true,
        trim: true
    },
    city :{
        type: String,
        required: true,
        trim: true
    },
    gender: {
        // required : true
    },
    year : {
        // required : true
    }
})

const Student = mongoose.model('Student' , studentSchema)

module.exports = Student