import mongoose from 'mongoose';
const { Schema } = mongoose;

const spiritSchema = new Schema({
  name: String,
  parent: {
    type: String,
    enum: [
      'LIQUOR',
      'WHISKEY',
      'COGNAC',
      'RUM',
      'VODKA',
      'GIN',
      'TEQUILA',
      'SYRUP',
    ],
  },
});

const Spirit = mongoose.model('Spirit', spiritSchema);

export default Spirit;
