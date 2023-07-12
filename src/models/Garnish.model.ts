import mongoose from 'mongoose';
const { Schema } = mongoose;

const garnishSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: ['SLICE', 'QUARTER'],
  },
});

const Garnish = mongoose.model('Garnish', garnishSchema);

export default Garnish;
