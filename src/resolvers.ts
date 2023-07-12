import { IResolvers } from '@graphql-tools/utils/typings/Interfaces';
import Spirit from './models/Spirit.model';
import GlassType from './models/GlassType.model';
import Garnish from './models/Garnish.model';
import Ingredient from './models/Ingredient.model';
import Cocktail from './models/Cocktail.model';

const resolvers: IResolvers = {
  Query: {
    name: () => 'Cocktail Recipes with GraphQL Yoga server',
    cocktail: async (parent, { id }, ctx, info) => {
      return await Cocktail.findById(id);
    },
    cocktails: async () => {
      return await Cocktail.find();
    },
    spirits: async () => {
      return await Spirit.find();
    },
    glassTypes: async () => {
      return await GlassType.find();
    },
    garnishs: async () => {
      return await Garnish.find();
    },
    ingredients: async () => {
      return await Ingredient.find();
    },
  },
  Cocktail: {
    ingredients: async (parent, args, ctx, info) => {
      await parent.populate('ingredients');
      return parent.ingredients;
    },
    spirits: async (parent, args, ctx, info) => {
      await parent.populate('spirits');
      return parent.spirits;
    },
    garnish: async (parent, args, ctx, info) => {
      await parent.populate('garnish');
      return parent.garnish;
    },
    glassType: async (parent, args, ctx, info) => {
      await parent.populate('glassType');
      return parent.glassType;
    },
  },
  Mutation: {
    addSpirit: async (parent, args, ctx, info) => {
      const newSpirit = new Spirit({
        ...args,
      });
      await newSpirit.save();
      try {
        return newSpirit;
      } catch (err) {
        console.info((err as Error).message);
        await Spirit.findByIdAndDelete(newSpirit._id);
      }
    },
    addGlassType: async (parent, args, ctx, info) => {
      const newGlassType = new GlassType({
        ...args,
      });
      await newGlassType.save();
      try {
        return newGlassType;
      } catch (err) {
        console.info((err as Error).message);
        await GlassType.findByIdAndDelete(newGlassType._id);
      }
    },
    addGarnish: async (parent, args, ctx, info) => {
      const newItem = new Garnish({
        ...args,
      });
      await newItem.save();
      try {
        return newItem;
      } catch (err) {
        console.info((err as Error).message);
        await Garnish.findByIdAndDelete(newItem._id);
      }
    },
    addIngredient: async (parent, args, ctx, info) => {
      const newItem = new Ingredient({
        ...args,
      });
      await newItem.save();
      try {
        return newItem;
      } catch (err) {
        console.info((err as Error).message);
        await Ingredient.findByIdAndDelete(newItem._id);
      }
    },
    addCocktail: async (parent, args, ctx, info) => {
      const newItem = new Cocktail({
        ...args,
      });
      await newItem.save();
      try {
        return newItem;
      } catch (err) {
        console.info((err as Error).message);
        await Cocktail.findByIdAndDelete(newItem._id);
      }
    },
  },
};

export default resolvers;
