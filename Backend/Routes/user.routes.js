const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user.controllers');  
const { body, validationResult } = require('express-validator');

router.post('/register', 
    [
        [
                    
        body('name').isLength({ min: 3 }),
        body('email').isEmail(),
        body('password').isLength({ min: 6 }),

        ],

    ],
    async (req, res) => {
        const error = validationResult(req);
    
        if(!error.isEmpty()) {
            return res.status(400).json({error: error.array()});
        }
    
        res.status(200).json({success: "sucessfully sign up! "})
    },
    
    
);

module.exports = router;