import mongoose from 'mongoose';
import Ingredient from './Ingredient.model';
import Spirit from './Spirit.model';
import Garnish from './Garnish.model';
import GlassType from './GlassType.model';
const { Schema } = mongoose;

const cocktailSchema = new Schema({
  name: String,
  ingredients: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: Ingredient,
    },
  ],
  spirits: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: Spirit,
    },
  ],
  garnish: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: Garnish,
  },
  mixingMethod: {
    type: String,
    enum: ['STIR', 'SHAKE'],
  },
  glassType: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: GlassType,
  },
  description: String,
  instructions: String,
  image: String,
});

const Cocktail = mongoose.model('Cocktail', cocktailSchema);

export default Cocktail;
