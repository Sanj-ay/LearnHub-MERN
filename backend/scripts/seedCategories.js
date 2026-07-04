const mongoose = require('mongoose');
require('dotenv').config();
const Category = require('../models/category');

const categories = [
  { name: 'Programming', description: 'Code and development' },
  { name: 'Design', description: 'UI/UX and product design' },
  { name: 'Data Science', description: 'ML, Data Analysis, AI' },
  { name: 'Business', description: 'Marketing, Management, Finance' }
];

async function seed() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to DB');
    await Category.insertMany(categories);
    console.log('Seeded categories');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
