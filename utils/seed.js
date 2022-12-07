const connection = require('../config/connection');
const { User, Thought } = require('../models');
// const { getRandomName, getRandomAssignments } = require('./data');

const seedUsers = ['ckorson', 'ekorson', 'brewer', 'atlas']

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  for (let i = 0; i < seedUsers.length; i++) {

    const username = seedUsers[i];
    const email = `${username}@email.com`;

    users.push({
      username,
      email,
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add courses to the collection and await the results
  // await Course.collection.insertOne({
  //   courseName: 'UCLA',
  //   inPerson: false,
  //   students: [...students],
  // });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
