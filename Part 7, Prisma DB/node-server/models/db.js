const { PrismaClient } = require("@prisma/client")

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  const {__db__} = global;

  if (__db__) {
    prisma = __db__
  } else {
    prisma = new PrismaClient();
    global.__db__ = prisma
  }

  prisma.$connect();
}

module.exports = {
  prisma
}
