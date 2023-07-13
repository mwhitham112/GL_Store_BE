const db = require('../database/db');

exports.getWishlists = async () => {
    try {
        const query = 'SELECT * FROM store.wishlist';
        const result = await db.query(query);
        return result.rows;
    } catch (error) {
        throw new Error('Error getting users');
    }
};

exports.getWishlistByUser = async (user_id) => {
    try {
        const query = 'SELECT * FROM store.wishlist WHERE user_id = $1';
        const values = [user_id];
        const result = await db.query(query, values);
        return result.rows;
    } catch (error) {
        throw new Error('Error getting basket');

    }
};

exports.createWishlist = async (user_id) => {
    try {
        const query = 'INSERT INTO store.wishlist (user_id) VALUES ($1)';
        const values = [user_id];
        await db.query(query, values);
        console.log('Bakset created successfully');
    } catch (error) {
        throw new Error('Error creating basket');
    }
};


exports.addToWishlist = async (user_id, sku) => {
    try {
        const query = 'UPDATE store.wishlist SET sku = ARRAY_APPEND(sku, $2) WHERE user_id = $1;';
        const values = [user_id, sku];
        await db.query(query, values);
        console.log('item added successfully');
    } catch (error) {
        throw new Error('Error adding item');
    }
};



