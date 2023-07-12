import mongoose from 'mongoose';
const { Schema } = mongoose;

const ingredientSchema = new Schema({
  name: String,
  amount: String,
  unit: String,
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

export default Ingredient;
