import dotenv from 'dotenv';
import { connect } from 'mongoose';
import Spirit from './models/Spirit.model';
import { spirits } from './sample';
dotenv.config();

connect(
  'mongodb://mongo:rwXH0euiYqIXeyDbyvEo@containers-us-west-174.railway.app:7627'
).then(() => {
  console.info('Connected to MongoDB.');
});

// Run migration
const migration = async () => {
  console.log('Migrating . . . . . .');
  const spiritList = [];
  await Spirit.deleteMany();
  for (const spirit of spirits) {
    const newSpirit = new Spirit(spirit);
    await newSpirit.save();
    spiritList.push(newSpirit._id);
  }
  console.log('--------------------');
};

migration().then(() => {
  console.log('Migrated.');
});
