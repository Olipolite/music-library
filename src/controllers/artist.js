const artistController = (_, res) => {
    res.status(201).json({ name: 'Tmae Impala', genre: 'rock'})
}

module.exports = artistController