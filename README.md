#Setup the project

Install typesript for the project

```
npm install -D typescript tslib @types/node ts-node
tsc init
```

Install mongoose ORM to work with MongoDB

```
npm i -D dotenv mongoose
```

#Installation and run project
Install **node_modules**

```
npm install
npm run dev
```

#Test query

```
query cocktailById {
  cocktail(id: "64aed566f5c2585da51518c0") {
    _id
    description
    garnish {
      _id
      name
      type
    }
    glassType {
      _id
      name
    }
    image
    ingredients {
      _id
      amount
      name
      unit
    }
    instructions
    mixingMethod
    name
    spirits {
      _id
      name
      parent
    }
  }
}
```
