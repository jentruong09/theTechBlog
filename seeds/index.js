const sequelize = require('../config/connection');
const seedComments = require('./commentData');
const seedPosts = require('./postData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await seedUsers();
  
  await seedPosts();

  await seedComments();

  process.exit(0);
};

seedAll();
