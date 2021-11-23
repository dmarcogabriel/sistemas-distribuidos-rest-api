const StudentController = require('./student.controller')
const { Router } = require('express')

const router = Router()

router.get('/students', StudentController.find)
router.get('/students/:id', StudentController.findById)
router.post('/students', StudentController.create)
router.put('/students/:id', StudentController.update)
router.delete('/students/:id', StudentController.delete)

module.exports = router