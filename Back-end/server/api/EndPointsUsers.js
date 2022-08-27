const UsersController = require('../controller/Users')
const express = require('express')
const router = express.Router()

//router.metodo_CRUD('uri',)
router.post('/',UsersController.createUser)
router.get('/', UsersController.getUsers)
router.put('/fix/:id',UsersController.updateUserId)
router.put('/:id',UsersController.updateUser)
router.get('/:id',UsersController.getUserById)
router.delete('/:id',UsersController.deleteUser)
router.get('/auth/login',UsersController.logUser)

module.exports = router
