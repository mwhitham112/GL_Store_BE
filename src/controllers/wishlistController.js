const wishlistService = require('../services/wishlistService.js');

exports.getWishlists = (req, res) => {
    wishlistService.getWishlists()
        .then((baskets) => {
            res.json(baskets);
        })
        .catch((error) => {
            console.error('Error getting wishlist:', error);
            res.status(500).send('Error getting wishlist');
        });
};

exports.getWishlistByUser = (req, res) => {
    const { userID } = req.params;
    wishlistService.getWishlistByUser(userID)
        .then((wishlist) => {
            res.json(wishlist);
        })
        .catch((error) => {
            console.error('Error getting wishlist:', error);
            res.status(500).send('Error getting wishlist');
        });
};

exports.createWishlist = (req, res) => {
    const { user_id } = req.body;
    wishlistService.createWishlist(user_id)
        .then(() => {
            console.log('Wishlist created successfully');
            res.sendStatus(201);
        })
        .catch((error) => {
            console.error('Error creating Wishlist:', error);
            res.status(500).send('Error creating basket');
        });
};

exports.addToWishlist = (req, res) => {
    const { user_id, product } = req.body;
    wishlistService.addToWishlist(user_id, product)
        .then(() => {
            console.log('Item added successfully');
            res.sendStatus(201);
        })
        .catch((error) => {
            console.error('Error adding item:', error);
            res.status(500).send('Error adding item');
        });
};




