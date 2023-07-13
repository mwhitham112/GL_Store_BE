const userService = require('../services/userServices.js');

exports.getUsers = (req, res) => {
    userService.getUsers()
        .then((users) => {
            res.json(users);
        })
        .catch((error) => {
            console.error('Error getting users:', error);
            res.status(500).send('Error getting users');
        });
};

exports.getUserByID = (req, res) => {
    const { username } = req.params;
    userService.getUserByID(username)
        .then((user) => {
            res.json(user);
        })
        .catch((error) => {
            console.error('Error getting user:', error);
            res.status(500).send('Error getting user');
        });
};

exports.createUser = (req, res) => {
    const { email, username, password } = req.body;
    userService.createUser(email, username, password)
        .then((createdUser) => {
            console.log('User created successfully');
            res.status(201).json(createdUser)
        })
        .catch((error) => {
            console.error('Error creating user:', error);
            res.status(500).send('Error creating user');
        });
};
