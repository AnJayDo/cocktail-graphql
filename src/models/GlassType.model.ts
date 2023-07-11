import mongoose from 'mongoose';
const { Schema } = mongoose;

const glassTypeSchema = new Schema({
  name: String,
});

const GlassType = mongoose.model('GlassType', glassTypeSchema);

export default GlassType;
