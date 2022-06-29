const { PrismaClient } = require("@prisma/client")

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  const {__db__} = global;

  if (!__db__) {
    global.__db__ = new PrismaClient();
  }

  prisma = global.__db__;
  prisma.$connect();
}

module.exports = {
  prisma
}
