const ObjectId = require('mongoose').Types.ObjectId;

const Student = require('../models/student')

// Create student
exports.Create = (req,res) => {
      const student = new Student({
            name:req.body.name,
            phone:req.body.phone
      });
      student.save(student)
             .then(data => {
                  res.send({ message: 'created successfully' })
             })
             .catch(err => {
                  console.log(err);
             })
}

exports.findAll = (req,res) => {
      Student.find()
             .then(data => {
                  res.send(data)
             })
             .catch(err => {
                  console.log(err);
             })
}

exports.findOne = (req,res) => {
      if (!ObjectId.isValid(req.params.id))
            return res.status(400).send("no record with id" + req.params.id)

      const id = req.params.id;

      Student.findById(id)
             .then(data => {
                  res.send(data)
             })
             .catch(err => {
                  console.log(err);
             })
}

exports.update = (req,res) => {
      if(!ObjectId.isValid(req.params.id))
            return res.status(400).send("no record with id" + req.params.id)

      const id = req.params.id
      
      Student.findByIdAndUpdate(id,req.body)
             .then(data => {
                  res.send({ message: 'Updated successfully' })
             })
             .catch(err => {
                  console.log(err);
             })
}

exports.delete = (req,res) => {
      if(!ObjectId.isValid(req.params.id))
            return res.status(400).send("no record with id" + req.params.id)

      const id = req.params.id

      Student.findByIdAndRemove(id)
             .then(data => {
                  res.send({ message: 'deleted successfully' })
             })
             .catch(err => {
                  console.log(err);
             })
}

