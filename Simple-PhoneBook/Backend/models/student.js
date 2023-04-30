const mongoose = require('mongoose')

// Definign schema
const schema = new mongoose.Schema({
      name:{type:String,required:true},
      phone:{type:Number,required:true}
})

// Compiling schema
const Student = mongoose.model('stu',schema)

module.exports = Student;