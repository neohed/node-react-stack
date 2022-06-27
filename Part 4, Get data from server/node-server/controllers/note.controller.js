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

module.exports = {
  getNote
}
