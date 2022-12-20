const express = require('express')
const artistController = require('../controllers/artist.js');

const artistRouter = express.Router()

artistRouter.post('/', artistController.createArtist);

module.exports = artistRouter;