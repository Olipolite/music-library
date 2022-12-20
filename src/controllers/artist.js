const db = require('../db/index');



exports.createArtist = async (req, res) => {
    const { name, genre } = req.body
  
    try {
      const { rows: [ artist ] } = await db.query(`INSERT INTO Artists (name, genre) VALUES ('${name}', '${genre}') RETURNING *`)
      //const databaseResponse = await db.query(`INSERT INTO Artists (name, genre) VALUES ('${name}', '${genre}') RETURNING *`)
      //const artist = databaseResponse.rows[0]
      res.status(201).json(artist)
    } catch (err) {
      res.status(500).json(err.message)
    }
  }

