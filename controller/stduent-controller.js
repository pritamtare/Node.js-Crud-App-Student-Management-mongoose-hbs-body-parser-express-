const express = require('express')
const router = express.Router()
const Student = require('../models/student-model')

router.get('', (req, res)=>{
    res.render('index',{
        title:"Add New Student"
    })
})

router.post('/', async (req, res)=>{
    if(req.body._id == ''){
        insertRecord(req, res)
    }else{
        updateRecored(req, res)
    }
    
})

function insertRecord(req, res){
    const student = new Student()

    student.name = req.body.name,
    student.email = req.body.email,
    student.branch = req.body.branch,
    student.city = req.body.city,
    student.gender = req.body.gender
    student.year = req.body.year

    student.save((e)=>{
        if(e){
            console.log(e)
        }
        res.redirect('/list')
    })
}

function updateRecored(req, res){
    Student.findByIdAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, student)=>{
        if(!err){
            res.redirect('/list')
        }else{
            console.log(err)
        }
    })
}

router.get('/list', (req, res)=>{
    Student.find((err, documents)=>{
        if(!err){
            res.render('list',{
                 list : documents,
                 title: "List Of All Students"
                 })
        }else{
            console.log('-------'+ err + '--------  ')
        }
    })
})



router.get('/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const student = await Student.findById(_id)
        console.log(student)
        if(!student){
          console.log("not found student")
        }
        res.render('index',{
            student,
            title: 'Update Student'
        })
      
    } catch (e) {
       console.log(e)
    }
})


router.get('/delete/:id', async (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err) =>{
        if(!err){
            res.redirect('/list')
        }
        else{
            console.log(err)
        }
    })
})


module.exports = router