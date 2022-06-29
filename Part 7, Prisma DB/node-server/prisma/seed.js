const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

async function seed() {
  // Blitz everything!
  await prisma.note.deleteMany();
  await prisma.author.deleteMany();

  const author = await prisma.author.create({
    data: {
      name: 'neohed'
    },
  });

  await prisma.note.create({
    data: {
      title: 'A Note',
      content: 'Lorem ipsum dolor sit amet',
      authorId: author.id,
      lang: 'en',
      isLive: true,
      category: '',
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .then(() => {
    console.log('Prisma seed function in prisma/seed.ts executed!')
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
