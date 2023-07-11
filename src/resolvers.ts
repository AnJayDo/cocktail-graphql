import { IResolvers } from '@graphql-tools/utils/typings/Interfaces';
import Spirit from './models/Spirit.model';
import GlassType from './models/GlassType.model';

const resolvers: IResolvers = {
  Query: {
    name: () => 'Cocktail Recipes with GraphQL Yoga server',
    // cocktails: (parent, args, ctx, info) => {
    //   return ctx.cocktails
    // },
    cocktail: () => {
      return {
        name: 'Long Island Iced Tea',
        garnish: {
          name: 'Lemon',
          type: 'SLICE',
        },
        mixingMethod: 'SHAKE',
        instructions: `Fill a cocktail shaker with ice.
          Add all of the spirits (vodka, gin, white rum, silver tequila, and triple sec) to the shaker.
          Add the fresh lemon juice and simple syrup to the shaker.
          Shake the mixture vigorously for about 10-15 seconds.
          Strain the mixture into a tall glass filled with ice.
          Top off the glass with cola and stir gently.
          Garnish with a lemon wedge.`,
        image:
          'https://i.pinimg.com/564x/a4/63/c7/a463c7925a2faf8a82e9f69d7606c3bb.jpg',
        description: `The Long Island Iced Tea is a popular cocktail that combines several different spirits`,
      };
    },
    cocktails: () => {
      return [
        {
          name: 'Long Island Iced Tea',
          garnish: {
            name: 'Lemon',
            type: 'SLICE',
          },
          mixingMethod: 'SHAKE',
          instructions: `Fill a cocktail shaker with ice.
            Add all of the spirits (vodka, gin, white rum, silver tequila, and triple sec) to the shaker.
            Add the fresh lemon juice and simple syrup to the shaker.
            Shake the mixture vigorously for about 10-15 seconds.
            Strain the mixture into a tall glass filled with ice.
            Top off the glass with cola and stir gently.
            Garnish with a lemon wedge.`,
          image:
            'https://i.pinimg.com/564x/a4/63/c7/a463c7925a2faf8a82e9f69d7606c3bb.jpg',
          description: `The Long Island Iced Tea is a popular cocktail that combines several different spirits`,
        },
      ];
    },
    spirits: async () => {
      return await Spirit.find();
    },
    glassTypes: async () => {
      return await GlassType.find();
    },
  },
  Cocktail: {
    ingredients: async (parent, args, ctx, info) => {
      return [
        {
          amount: '1/2 oz',
          name: 'Vodka',
        },
        {
          amount: '1/2 oz',
          name: 'London Dry Gin',
        },
        {
          amount: '1/2 oz',
          name: 'Silver Tequila',
        },
        {
          amount: '1/2 oz',
          name: 'White Rum',
        },
        {
          amount: '1/2 oz',
          name: 'Triple Sec (ex: Cointreau)',
        },
        {
          amount: '3/4 oz',
          name: 'Fresh lemon juice',
        },
        {
          amount: '3/4 oz',
          name: 'Simple syrup',
        },
        {
          amount: '1 oz',
          name: 'Cola',
        },
      ];
    },
    spirits: async (parent, args, ctx, info) => {
      return [
        {
          name: 'Vodka',
          parent: 'VODKA',
        },
        {
          name: 'London Dry Gin',
          parent: 'GIN',
        },
        {
          name: 'Silver Tequila',
          parent: 'TEQUILA',
        },
        {
          name: 'White Rum',
          parent: 'RUM',
        },
        {
          name: 'Triple Sec',
          parent: 'LIQUOR',
        },
      ];
    },
    garnish: async (parent, args, ctx, info) => {
      return {
        name: 'Lemon',
        type: 'SLICE',
      };
    },
    glassType: async (parent, args, ctx, info) => {
      return {
        name: 'Highball Glass',
      };
    },
  },
  Mutation: {
    addSpirit: async (parent, args, ctx, info) => {
      console.log(args);
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
    addCocktail: async (parent, args, ctx, info) => {
      const newItem = {
        name: 'Long Island Iced Tea',
        mixingMethod: 'SHAKE',
        instructions: `Fill a cocktail shaker with ice.
              Add all of the spirits (vodka, gin, white rum, silver tequila, and triple sec) to the shaker.
              Add the fresh lemon juice and simple syrup to the shaker.
              Shake the mixture vigorously for about 10-15 seconds.
              Strain the mixture into a tall glass filled with ice.
              Top off the glass with cola and stir gently.
              Garnish with a lemon wedge.`,
        image:
          'https://i.pinimg.com/564x/a4/63/c7/a463c7925a2faf8a82e9f69d7606c3bb.jpg',
        description: `The Long Island Iced Tea is a popular cocktail that combines several different spirits`,
      };
      //   await db.read();
      //   db.data.cocktails.push(newItem);
      //   await db.write();
      return newItem;
    },
  },
};

export default resolvers;
