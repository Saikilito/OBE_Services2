const express = require('express');
const api = express.Router();
const UserCtrl = require('../controllers/users');
const auth = require('../middlewares/auth')

api.get('/', async (req, res) => {
    res.send({ message: "Welcome to my API RES JSON" })
});

api.post('/signup', auth, UserCtrl.signUp );

api.post('/signin', UserCtrl.signIn );

api.post('/upload', auth, UserCtrl.saveImage );

api.get('/access', auth, UserCtrl.getAccess );

api.get('/users', auth, UserCtrl.getUsers );

api.get('/users/:id', auth, UserCtrl.getUser );

api.put('/access', auth, UserCtrl.updateAccess );

api.put('/users/:id', auth, UserCtrl.updateUser );

api.delete('/users/:id', auth , UserCtrl.deleteUser );

api.get('/private', auth , (req,res)=>{
    res.status(200).send({message:"Success Access"})
})

module.exports = api;


//Verificar passwors

/*
function signIn(req, res){
 
 User.findOne({email: req.body.email}, (err, user) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición ${err}`});

        if (!user) return res.status(404).send({ message: 'Usuario no registrado' });
        
        const password_verification =  bcrypt.compareSync(req.body.password, user.password);        
        
        if(password_verification){
         req.user = user;
         res.status(200).send({message: 'Te has logueado correctamente', token: service.createToken(user, req.originalUrl)});
        }else{
         res.status(500).send({message: 'Email o Contraseña incorrectos'});  
        }
    });
}
*/

