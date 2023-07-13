const express = require('express');
const router = express.Router();
const wishlistsController = require('../controllers/wishlistController.js');

router.get('/', wishlistsController.getWishlists);
router.get('/:userID', wishlistsController.getWishlistByUser);
router.post('/newwishlist', wishlistsController.createWishlist);
router.post('/addToWishlist', wishlistsController.addToWishlist);

module.exports = router;