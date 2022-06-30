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
  const {title, content, author, lang, isLive, category} = body;

  try {
    let noteAuthor = await authorRepo.getAuthorByName(author);
    if (noteAuthor === null) {
      noteAuthor = await authorRepo.createAuthor({
        username: author
      })
    }

    const note = await noteRepo.createNote({
      title,
      content,
      lang,
      isLive,
      category,
      authorId: noteAuthor.id
    })

    res
      .status(200)
      .json({
        note
      })
  } catch (e) {
    console.error(e)
  }
}

module.exports = {
  getNote,
  postNote
}
