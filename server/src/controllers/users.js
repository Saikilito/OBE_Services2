const User = require('../models/User');
const Access = require('../models/Access');
const bcrypt = require('bcrypt-nodejs');
const services = require('../services');
const path = require('path');

function getUsers(req, res) {
    User.find({}, (err, users) => {
        if (err) return res.status(500).send({ message: 'Error on the requets: ' + err })
        if (!users) return res.status(404).send({ mesaage: 'Users not found' })
        else return res.status(200).send({ users })
    })
}

function getAccess(req, res) {
    Access.findOne({}, (err, access) => {
        if (err) return res.status(500).send({ message: 'Error on the requets: ' + err })
        if (!access) return res.status(404).send({ mesaage: 'Access not found' })
        else return res.status(200).send({ access })
    })
}

function saveImage(req, res) {

    console.log(req.files, "files")
    console.log(req.body, "Body")

    let nameImage = req.files.file.name
    let extension = nameImage.split('.').pop()
    req.files.file.name = `${req.body.userCi}.${extension}`
    console.log(req.files.file.name)

    let imageFile = req.files.file

    // ${__dirname}/../public/${imageFile.name}

    imageFile.mv(path.join(__dirname,`../public/${imageFile.name}`), err => {
        if (err) return res.status(500).send({ error: "error en la image", message: err })
        return res.status(200).send({ message: 'File upload' })
    })
}

function signUp(req, res) {

    let user 

    if (req.body.type === 'student') {
            user = new User({
            type: req.body.type,
            name: req.body.name,
            lastname: req.body.lastname,
            nationality: req.body.nationality,
            ci: req.body.ci,
            sex: req.body.sex,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,10),
            faculty: req.body.faculty,
            school: req.body.school,
            scholarship: req.body.scholarship,
            scholarshipStatus: req.body.scholarshipStatus,
            medal: {
                status: req.body.medal.status
            }
        })

    }
    else {
            user = new User({
            type: req.body.type,
            name: req.body.name,
            lastname: req.body.lastname,
            nationality: req.body.nationality,
            ci: req.body.ci,
            sex: req.body.sex,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,10),
            department:req.body.department,
            position:req.body.position
        })

    }


    user.save((err) => {
        if (err) res.status(500).send({ message: `Error on to save usuer: ${err}` })
        else res.status(200).send({ message: 'User to save success', token: services.createToken(user) })
    });
}

function signIn(req, res) {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send({ message: err })
        if (!user) return res.status(404).send({ success: false, message: "User not found" })
        else {
            if(req.body.password !== user.password)
                return res.status(400).send({success: false , message: "Incorrect Password"})
            else
            {
                req.user = user
                res.status(200).send({
                    user,
                    token: services.createToken(user)
                })
            }
        }
    })
}


/*
*
*Dentro del singin al tratar de verificar si existe un usuario con el if(!user)
*Se deebe usar findOne, (usando solo find retorna un array)
*de esta manera "user" sera un objeto y puedra ocurrir el caso en el que es null 
*
*/

function getUser(req, res) {
    User.findById(req.params.id, (err, user) => {
        if (err) return res.status(500).send({ message: 'Error on the request: ' + err })
        if (!user) return res.status(404).send({ mesaage: 'User not found' })
        else {
            return res.status(200).send({ user })
        }
    });
}

function updateUser(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        console.log(req.body)
        if (err) return res.status(500).send({ message: 'Error on the update: ' + err })
        if (!user) return res.status(404).send({ mesaage: 'User not found' })
        else res.status(200).send({ message: 'User update', user })
    });
}

function updateAccess(req, res) {
    Access.findByIdAndUpdate("5be590b05cb9160dad356def", req.body, (err, access) => {
        console.log(req.body)
        if (err) return res.status(500).send({ message: 'Error on the update: ' + err })
        if (!access) return res.status(404).send({ mesaage: 'Access not found' })
        else res.status(200).send({ message: 'Access update', access })
    });
}

function deleteUser(req, res) {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) return res.status(500).send({ message: 'Error on the requets: ' + err })
        if (!user) return res.status(404).send({ mesaage: 'User not found' })
        else user.remove(err => {
            if (err) return res.status(500).send({ message: 'Error on the delete user: ' + err })
            else return res.status(200).send({ message: "User delete", user })
        })
    });
}


module.exports = {
    signUp,
    getUsers,
    getAccess,
    getUser,
    saveImage,
    signIn,
    updateUser,
    updateAccess,
    deleteUser
}