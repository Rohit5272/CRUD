module.exports = app => {
      const Student = require('../controllers/student.controller')

      const router = require('express').Router();

      // Creating doc
      router.post('/',Student.Create);

      // Retrieve all doc
      router.get('/',Student.findAll);

      //Get single doc
      router.get('/:id',Student.findOne);

      // Update doc
      router.put('/:id',Student.update);

      // Delete doc
      router.delete('/:id',Student.delete)

      app.use('/api',router)
}