const express = require('express');
const router = express.Router();

const { allUsers, newUser, deleteUser } = require('../controllers/user.controllers');

// => Rota GET que lista todos usuarios 
// -- (/api/v1/users)
router.get('/api/v1/users', (req, res) => {
    allUsers(req, res)
        .catch(err => {
            res.json({ sucess: false, error: err });
        });
});

// => Rota POST que registra novos usuários
// -- (/api/v1/users/register)
router.post('/api/v1/users/register', (req, res) => {
    newUser(req, res)
        .catch(err => {
            res.json({ sucess: false, error: err });
        });
});

// => Rota DELETE que deleta um usuário a partir de um 'username' como param
// -- (/api/v1/users/delete/:username)
router.delete('/api/v1/users/delete/:username', (req, res) => {
    deleteUser(req, res)
        .catch(err => {
            console.log(err);
            res.json({ sucess: false, error: err });
        });
});


// => Rota PUT que altera um usuário a partir de um param 
// -- (/api/v1/users/alter/:username )
router.put('/api/v1/users/alter/:username', (req, res) => {
    
});

module.exports = router;