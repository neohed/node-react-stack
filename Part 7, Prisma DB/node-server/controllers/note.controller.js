const note = {
  id: 1,
  title: 'A Note',
  content: 'Lorem ipsum dolor sit amet',
  author: 'neohed',
  lang: 'en',
  isLive: true,
  category: '',
}

async function getNote(req, res) {
  res.json({ note });
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
