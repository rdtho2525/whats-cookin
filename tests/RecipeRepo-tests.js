const RecipeRepo = require('../src/RecipeRepo');
const chai = require('chai');
const expect = chai.expect;
// const recipeData = require('../data/recipes');

describe('RecipeRepo', () => {

  let recipeRepo;
  let recipeSamples;
  let ingredients;

  beforeEach(() => {
    recipeSamples = [
      {
        "id": 583738,
        "image": "https://spoonacular.com/recipeImages/583738-556x370.jpg",
        "ingredients": [
          {
            "id": 18372,
            "quantity": {
              "amount": 0.75,
              "unit": "teaspoon"
            }
          },
          {
            "id": 19334,
            "quantity": {
              "amount": 0.5,
              "unit": "cup"
            }
          },
          {
            "id": 1123,
            "quantity": {
              "amount": 1,
              "unit": ""
            }
          },
          {
            "id": 20081,
            "quantity": {
              "amount": 1.75,
              "unit": "cups"
            }
          },
          {
            "id": 16098,
            "quantity": {
              "amount": 0.75,
              "unit": "cup"
            }
          },
          {
            "id": 10019151,
            "quantity": {
              "amount": 8,
              "unit": "oz"
            }
          },
          {
            "id": 2047,
            "quantity": {
              "amount": 0.5,
              "unit": "teaspoon"
            }
          },
          {
            "id": 1145,
            "quantity": {
              "amount": 0.5,
              "unit": "cup"
            }
          },
          {
            "id": 2050,
            "quantity": {
              "amount": 1,
              "unit": "teaspoon"
            }
          },
          {
            "id": 19335,
            "quantity": {
              "amount": 0.5,
              "unit": "cup"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "Preheat oven to 350\u00b0F. Line two baking sheets with parchment paper.",
            "number": 1
          },
          {
            "instruction": "Combine the flour, baking soda and salt in a medium bowl. Set aside.In the bowl of a stand mixer, beat the butter, peanut butter and sugars, until light and fluffy.",
            "number": 2
          },
          {
            "instruction": "Add in the egg and vanilla.Gradually add in the flour mixture on low speed. Stir until dough forms. Then stir in Reese's Pieces by hand.Using a cookie dough scoop or your hands, form balls of dough with 1 heaping tablespoon of dough. Gently flatten cookie dough (to form a disk shape) and place on prepared baking sheets.",
            "number": 3
          },
          {
            "instruction": "Bake for 9 minutes and remove from oven.",
            "number": 4
          },
          {
            "instruction": "Let cool for 5 minutes before transferring cookies to a wire rack to cool completely.Note: Cookies will not spread much at all and will look like they are not done baking. But I promise they are! Once they finish cooling, the cookie and chocolate will become firm and you will have a magically soft and crumbly cookie!",
            "number": 5
          }
        ],
        "name": "Reese's Pieces Peanut Butter Cookies",
        "tags": [
          "antipasti",
          "starter",
          "snack",
          "appetizer",
          "antipasto",
          "hor d'oeuvre"
        ]
      },
      {
        "id": 601216,
        "image": "https://spoonacular.com/recipeImages/601216-556x370.jpg",
        "ingredients": [
          {
            "id": 1041009,
            "quantity": {
              "amount": 2,
              "unit": "tablespoons"
            }
          },
          {
            "id": 10018413,
            "quantity": {
              "amount": 1,
              "unit": ""
            }
          },
          {
            "id": 2044,
            "quantity": {
              "amount": 3,
              "unit": "leaves"
            }
          },
          {
            "id": 10111529,
            "quantity": {
              "amount": 0.5,
              "unit": "cup"
            }
          },
          {
            "id": 4053,
            "quantity": {
              "amount": 1,
              "unit": "teaspoon"
            }
          },
          {
            "id": 11477,
            "quantity": {
              "amount": 1,
              "unit": "cup"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "Saute the zucchini in the olive oil on high heat. Season generously with salt and pepper. Stir and leave alone for a little while, so you get a little bit of texture from the browning on the zucchini.While you\u2019re sauteing, toast the flatbread in the oven at 400 degrees.When the zucchini is soft and just slightly browned, remove from the heat. Take the flatbread out of the oven and spread the zucchini on the flatbread.Top with the fresh tomatoes, cheese, and fresh basil.",
            "number": 1
          },
          {
            "instruction": "Cut, serve, and enjoy!",
            "number": 2
          }
        ],
        "name": "Farmer\u2019s Market Flatbread Pizza",
        "tags": [
          "side dish",
          "antipasti",
          "starter"
        ]
      },
      {
        "id": 226562,
        "image": "https://spoonacular.com/recipeImages/226562-556x370.jpg",
        "ingredients": [
          {
            "id": 9019,
            "quantity": {
              "amount": 2,
              "unit": "tablespoons"
            }
          },
          {
            "id": 18079,
            "quantity": {
              "amount": 1,
              "unit": "cup"
            }
          },
          {
            "id": 16069,
            "quantity": {
              "amount": 1,
              "unit": "cup"
            }
          },
          {
            "id": 19334,
            "quantity": {
              "amount": 2,
              "unit": "tablespoons"
            }
          },
          {
            "id": 11124,
            "quantity": {
              "amount": 1,
              "unit": "cup"
            }
          },
          {
            "id": 2009,
            "quantity": {
              "amount": 0.25,
              "unit": "teaspoon"
            }
          },
          {
            "id": 9079,
            "quantity": {
              "amount": 0.3333333333333333,
              "unit": "cup"
            }
          },
          {
            "id": 11165,
            "quantity": {
              "amount": 0.25,
              "unit": "cup"
            }
          },
          {
            "id": 11215,
            "quantity": {
              "amount": 3,
              "unit": ""
            }
          },
          {
            "id": 1002014,
            "quantity": {
              "amount": 0.5,
              "unit": "teaspoon"
            }
          },
          {
            "id": 2042,
            "quantity": {
              "amount": 0.5,
              "unit": "teaspoon"
            }
          },
          {
            "id": 11935,
            "quantity": {
              "amount": 2,
              "unit": "tablespoons"
            }
          },
          {
            "id": 4053,
            "quantity": {
              "amount": 2,
              "unit": "tablespoon"
            }
          },
          {
            "id": 11282,
            "quantity": {
              "amount": 1,
              "unit": "cup"
            }
          },
          {
            "id": 12151,
            "quantity": {
              "amount": 0.5,
              "unit": "cup"
            }
          },
          {
            "id": 11821,
            "quantity": {
              "amount": 1,
              "unit": "cup"
            }
          },
          {
            "id": 1102047,
            "quantity": {
              "amount": 8,
              "unit": "servings"
            }
          },
          {
            "id": 6615,
            "quantity": {
              "amount": 3,
              "unit": "cups"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "Wash the lentils and place into a pot along with the vegetable broth. Bring to a boil, then reduce heat to medium-low and simmer, for about 40 minutes.",
            "number": 1
          },
          {
            "instruction": "Add more broth or water if necessary",
            "number": 2
          },
          {
            "instruction": "Meanwhile, warm the oil in a pan.",
            "number": 3
          },
          {
            "instruction": "Add the onions and cook for about 4 minutes or until soft.",
            "number": 4
          },
          {
            "instruction": "Add the carrots, bell pepper and garlic. Cook for about 3 minutes more. Set aside.When the lentils are ready mash them slightly with a potato masher or a fork.Preheat the oven to 350\u00ba F.In a large bowl, mix the onion mixture, mashed lentils, apple sauce, cranberries, pistachios, bread crumbs, cilantro, chili powder, cumin, thyme, salt and pepper.Line a loaf pan with parchment paper.",
            "number": 5
          },
          {
            "instruction": "Transfer the mixture to the loaf pan and press mixture into the pan with a spoon.",
            "number": 6
          },
          {
            "instruction": "Mix the glaze ingredients in a small bowl and spread evenly over the top.",
            "number": 7
          },
          {
            "instruction": "Bake for about 45 minutes.",
            "number": 8
          },
          {
            "instruction": "Transfer the pan to a wire rack and let the loaf cool a bit. Run a table knife around the edge of the pan and turn the loaf out onto a serving plate.",
            "number": 9
          }
        ],
        "name": "Vegan Lentil Loaf",
        "tags": [
          "side dish"
        ]
      },
      {
        "id": 605132,
        "image": "https://spoonacular.com/recipeImages/605132-556x370.jpg",
        "ingredients": [
          {
            "id": 1001,
            "quantity": {
              "amount": 2,
              "unit": "tablespoons"
            }
          },
          {
            "id": 20027,
            "quantity": {
              "amount": 0.25,
              "unit": "cup"
            }
          },
          {
            "id": 1123,
            "quantity": {
              "amount": 1,
              "unit": ""
            }
          },
          {
            "id": 1125,
            "quantity": {
              "amount": 2,
              "unit": ""
            }
          },
          {
            "id": 1077,
            "quantity": {
              "amount": 2,
              "unit": "cups"
            }
          },
          {
            "id": 2050,
            "quantity": {
              "amount": 1,
              "unit": "teaspoon"
            }
          },
          {
            "id": 19335,
            "quantity": {
              "amount": 0.3333333333333333,
              "unit": "cup"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "In a heavy saucepan, stir together the milk and 1/4 cup of sugar. Bring to a boil over medium heat.",
            "number": 1
          },
          {
            "instruction": "In a medium bowl, whisk together the egg yolks and egg. Stir together the remaining sugar and cornstarch; then stir them into the egg until smooth. When the milk comes to a boil, drizzle it into the bowl in a thin stream while mixing so that you do not cook the eggs. Return the mixture to the saucepan, and slowly bring to a boil, stirring constantly so the eggs don' t curdle or scorch on the bottom.",
            "number": 2
          },
          {
            "instruction": "When the mixture comes to a boil and thickens, remove from the heat. Stir in the butter and vanilla, mixing until the butter is completely blended in.",
            "number": 3
          },
          {
            "instruction": "Pour into a heat-proof container and place a piece of plastic wrap directly on the surface to prevent a skin from forming. Refrigerate until chilled before using.",
            "number": 4
          }
        ],
        "name": "Pastry Cream",
        "tags": [
          "side dish"
        ]
      }
    
    ];
    recipeRepo = new RecipeRepo(recipeSamples);
    ingredients = [
      {
        "id": 20081,
        "name": "wheat flour",
        "estimatedCostInCents": 142
      },
      {
        "id": 18372,
        "name": "bicarbonate of soda",
        "estimatedCostInCents": 582
      },
      {
        "id": 1123,
        "name": "eggs",
        "estimatedCostInCents": 472
      },
      {
        "id": 19334,
        "name": "brown sugar",
        "estimatedCostInCents": 559
      }
    ]

  });

  it('should be a function', () => {
    expect(RecipeRepo).to.be.a('function');
  });

  it('should be an instance of Recipe', () => {
    expect(recipeRepo).to.be.an.instanceof(RecipeRepo);
  }); 

  it('should have a repository of recipes', () => {
    expect(recipeRepo.recipes).to.exist;
  });

  it('should populate the list of recipes upon instantiation', () => {
    expect(recipeRepo.recipes.length).to.equal(recipeSamples.length);
    expect(recipeRepo.recipes[2].id).to.equal(recipeSamples[2].id);
  });

  it('should be able to filter recipes by tag', () => {
    const filteredData1 = recipeRepo.filterByTag('side dish');
    expect(filteredData1.length).to.equal(3);
    const filteredData2 = recipeRepo.filterByTag('starter, antipasti');
    expect(filteredData2.length).to.equal(2);
    const filteredData3 = recipeRepo.filterByTag('soup');
    expect(filteredData3).to.deep.equal([]);
  });

  it('should be able to remove duplicates from filtered data', () => {
    const filteredData2 = recipeRepo.removeDuplicates([1, 2, 3, 3, 3]);
    expect(filteredData2).to.deep.equal([1, 2, 3]);
  });
  
  it('should be able to filter recipes by name', () => {
    const filteredData1 = recipeRepo.filterByName('Reese\'s Pieces Peanut Butter Cookies');
    expect(filteredData1[0].id).to.equal(583738);
    const filteredData2 = recipeRepo.filterByName('fish');
    expect(filteredData2).to.deep.equal([]);
  });

  it('should be able to filter recipes by ingredient', () => {
    const filteredData1 = recipeRepo.filterByIngredient('brown sugar', ingredients);
    expect(filteredData1.length).to.equal(2);
    const filteredData2 = recipeRepo.filterByIngredient('fish', ingredients);
    console.log(filteredData2);
    expect(filteredData2).to.deep.equal([]);
  });
});