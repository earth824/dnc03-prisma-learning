import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/prisma/client.js';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function run() {
  // CREATE: create, createMany
  // const result = await prisma.user.create({
  //   data: {
  //     email: 'a@mail.com',
  //     password: '123456'
  //   }
  // });

  // const result = await prisma.user.createMany({
  //   data: [
  //     { email: 'b@mail.com', password: '9876543', name: 'Ben' },
  //     { email: 'c@mail.com', password: '234567', name: 'Catherine' }
  //   ]
  // });

  // const result = await prisma.user.createManyAndReturn({
  //   data: [
  //     { email: 'd@mail.com', password: '9876543', name: 'Denis' },
  //     { email: 'e@mail.com', password: '234567', name: 'Ethan' }
  //   ]
  // });

  // const result = await prisma.user.create({
  //   data: {
  //     email: 'f@mail.com',
  //     password: '543216'
  //   }
  // });

  // const result = await prisma.account.create({
  //   data: {
  //     name: 'Frank',
  //     no: '02625553411',
  //     // userId: 2,
  //     user: { connect: { email: 'f@mail.com' } },
  //     balance: 2000
  //   }
  // });

  // NESTED CREATE
  // const result = await prisma.account.create({
  //   data: {
  //     name: 'Glen',
  //     no: '1234567890',
  //     user: {
  //       create: {
  //         email: 'g@mail.com',
  //         password: '123456'
  //       }
  //     }
  //   }
  // });

  // UPDATE: update, updateMany
  // const result = await prisma.user.update({
  //   data: {
  //     password: '09876543'
  //   },
  //   where: {
  //     // email: 'a@mail.com'
  //     // name: 'Ben'
  //     id: 2
  //   }
  // });

  // const result = await prisma.user.updateMany({
  //   data: {
  //     password: '111111'
  //   },
  //   where: {
  //     id: {
  //       gt: 4
  //     }
  //   }
  // });

  // DELETE: delete, deleteMany
  const result = await prisma.user.delete({
    where: {
      id: 10000
    }
  });

  console.log(result);
}

run();
