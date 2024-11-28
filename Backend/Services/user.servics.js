const UserModels = require('../models/user.models');

module.exports.createUser = async({
    firstname, lastname, password, email
}) => {
    if(!firstname || !lastname || !password || !email){
        throw new Error('All feild are Required');
    }

    const user = UserModels.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    })

    return user;
}