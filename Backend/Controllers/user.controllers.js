const UserModels = require('../models/user.models');
const userService = require('../Services/user.servics');
const { validationResult } = require('express-validator');


module.exports.registration = async function(req, res, next) {
        const { fullname , email, password } = req.body;

        const isUserAlready = await UserModels.findOne({ email });
        if (isUserAlready) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await UserModels.hashPassword(password);

        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword
        });

        const token = user.generateAuthToken();
        res.status(201).json({ token, user });
    };