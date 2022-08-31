const db = require('../models')
const bcrypt = require("bcryptjs");
const saltRounds = 5;

// image Upload
// const multer = require('multer')
// const path = require('path')

// create Main Model
const User = db.users



// Add User

const Register = async (req, res) => {
    console.log(req.body)
    if (await User.findOne({ where: { email: req.body.email } })) {
        res.status(409).send({ message: 'Email "' + req.body.email + '" is already registered'});
    }else{
        bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(req.body.password, salt, async function (err, hash) {
            req.body.password = hash;
            const user = new User(req.body);
            await user.save().then((data) => {
                console.log(data);
                res.status(200).send(data);
                })
                .catch((err) => {
                console.log(err);
                res.send(err);
            });
            });
        });
    }

}


// Validate User

const CheckUser = async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } })
    if (!user) {
        res.status(404).send({ message: 'User not found' })
    } else {
        bcrypt.compare(req.body.password, user.password, function (err, result) {
            if (result) {
                res.status(200).send(user)
            } else {
                res.status(401).send({ message: 'Password is incorrect' })
            }
        }
        )
    }
}

// Get User by email
const getUserByEmail = async (req, res) => {
    console.log(req.body)
    const user = await User.findOne({ where: { email: req.body.email } })
    if (!user) {
        res.status(200).send(null)
    } else {
        res.status(200).send(user)
    }
    
}

// Upload Image Controller

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'Images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({
//     storage: storage,
//     limits: { fileSize: '1000000' },
//     fileFilter: (req, file, cb) => {
//         const fileTypes = /jpeg|jpg|png|gif/
//         const mimeType = fileTypes.test(file.mimetype)  
//         const extname = fileTypes.test(path.extname(file.originalname))

//         if(mimeType && extname) {
//             return cb(null, true)
//         }
//         cb('Give proper files formate to upload')
//     }
// }).single('image')


module.exports = {
    Register,
    CheckUser,
    getUserByEmail
   
    
}