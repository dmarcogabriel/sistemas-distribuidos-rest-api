const StudentModel = require('./student.model')

module.exports = {
  find(_, res) {
    try {
      const students = StudentModel.find()
      res.status(200).json({ students })
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar estudantes', error: error.message })
    }
  },
  findById(req, res) {
    try {
      console.log(req.params)
      const student = StudentModel.findById(req.params.id)
      res.status(200).json({ student })
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar estudante pelo ID', error: error.message })
    }
  },
  create(req, res) {
    try {
      StudentModel.save(req.body)
      res.status(200).json({ message: 'Estudante criado com sucesso'})
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar estudante', error: error.message })
    }
  },
  update(req, res) {
    try {
      StudentModel.update(req.params.id, req.body)
      res.status(200).json({ message: 'Estudante atualizado com sucesso' })
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar estudante', error: error.message })
    }
  },
  delete(req, res) {
    try {
      StudentModel.delete(req.params.id)
      res.status(200).json({ message: 'Estudante deletado com sucesso' })
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar estudante', error: error.message })
    }
  },
}