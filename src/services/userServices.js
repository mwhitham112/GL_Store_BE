const db = require('../database/db');

exports.getUsers = async () => {
    try {
        const query = 'SELECT * FROM store.users';
        const result = await db.query(query);
        return result.rows;
    } catch (error) {
        throw new Error('Error getting users');
    }
};

exports.getUserByID = async (username) => {
    try {
        const query = 'SELECT * FROM store.users WHERE username = $1';
        const values = [username];
        const result = await db.query(query, values);
        return result.rows;
    } catch (error) {
        throw new Error('Error getting user');

    }
};

exports.createUser = async (email, username, password) => {
    try {
        const query = 'INSERT INTO store.users (email, username, password) VALUES ($1, $2, $3) RETURNING *';
        const values = [email, username, password];
        const result = await db.query(query, values);
        const createdUser = result.rows[0];
        console.log('User created successfully');
        return createdUser;
    } catch (error) {
        throw new Error('Error creating user');
    }
};




