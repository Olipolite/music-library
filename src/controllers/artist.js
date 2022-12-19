const db = require('../src/db/index.js');



exports.create = async (req, res) => {
    const name = req.body.name
    const genre = req.body.genre

    await res.sendStatus(201);
    await db.query(INSERT INTO Artists [(name, genre )] VALUES (`${name}, ${genre}` )
}

