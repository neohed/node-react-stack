const noteRepo = require('../models/note.model');

async function getNote(req, res) {
  const notes = await noteRepo.getDrafts();
  console.log(notes)
  res.json({ note: notes[0] });
}

async function postNote(req, res) {
  const {body} = req;
  const {id, title, content, author, lang, isLive, category} = body;

  console.log('Server received data:');
  console.log({id, title, content, author, lang, isLive, category})

  res
    .status(200)
    .json({
      message: 'Ok'
    })
}

module.exports = {
  getNote,
  postNote
}
