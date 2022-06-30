const { prisma } = require("./db")

async function getNotes() {
  return prisma.note.findMany();
}

async function getNote(id) {
  return prisma.note.findUnique({ where: { id } });
}

async function createNote(
  note
) {
  return prisma.note.create({
    data: note
  });
}

async function updateNote(
  note
) {
  return prisma.draft.update({
    data: note,
  });
}

module.exports = {
  getNotes,
  getNote,
  createNote,
  updateNote,
}
