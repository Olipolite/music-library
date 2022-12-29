const express = require('express')
const artistController = require('../controllers/artist.js');

const artistRouter = express.Router()

artistRouter.post('/', artistController.createArtist);

artistRouter.get('/', artistController.readArtist)

artistRouter.get('/:id/', artistController.artistById)

artistRouter.put('/:id/', artistController.putArtist)

artistRouter.patch('/:id/', artistController.patchArtist)

artistRouter.delete('/:id', artistController.deleteArtist)

module.exports = artistRouter;