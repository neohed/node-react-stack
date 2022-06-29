const authorRepo = require('../models/author.model');
const noteRepo = require('../models/note.model');

async function getNote(req, res) {
  const notes = await noteRepo.getNotes();
  //HACK return top 1 note
  const { authorId, ...noteRest } = notes[0];
  const { username } = await authorRepo.getAuthor(authorId);

  res.json({ note: {
      ...noteRest,
      author: username
    }
  });
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
