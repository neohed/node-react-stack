const { prisma } = require("./db")

async function getDrafts() {
  return prisma.note.findMany();
}

async function getDraft(id) {
  return prisma.note.findUnique({ where: { id } });
}

async function createDraft(
  note
) {
  return prisma.note.create({ note });
}

async function updateDraft(
  note
) {
  return prisma.draft.update({
    data: note,
  });
}

module.exports = {
  getDrafts,
  getDraft,
  createDraft,
  updateDraft,
}
