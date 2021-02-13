//GLOBAL VARIABLES//
// const Recipe = require('../src/Recipe');
// const User = require('../src/User');
// const RecipeRepo = require('../src/RecipeRepo');

// const recipe = new Recipe();
const recipeRepo = new RecipeRepo();

//DOM ELEMENTS//
const navSection = document.querySelector('#navigation');
const favRecipesButton = document.querySelector('#favoriteRecipes');
const recipesToCookButton = document.querySelector('#recipesToCook');
const userSearch = document.querySelector('#userSearch');
const searchFilter = document.querySelector('#searchFilter');
const landingPage = document.querySelector('#landingPage');
const userGreeting = document.querySelector('#userGreeting');
const recentlyViewRecipes = document.querySelector('#recentlyViewedRecipes');
const centerPieceCard = document.querySelector('#centerPieceCard');
const cardContainer = document.querySelector('#cardContainer');


//FUNCTIONS//

//SELECT RANDOM USER - ON LOAD//
const getRandomIndex = array => {
    return Math.floor(Math.random() * array.length)
}

//unsure where to make this declaration
const currentUser = new User(usersData[getRandomIndex(usersData)]);


const greetUser = () => {
    const firstName = currentUser.name.split(' ', 2);
    userGreeting.textContent = `Welcome to What's Cookin', ${firstName[0]}!`;
}

//VIEW LIST OF ALL RECIPES
const viewAllRecipes = () => {
    const allRecipes = recipeRepo.recipes.map(recipe => {
        return `
        <article class="recipe-card left click">
            <img src="${recipe.image}" alt="${recipe.name}">
            <p id="" class="recipe-name">${recipe.name}</p>
            <p id="" class="recipe-tags">
            <ul class="list tag">
                <li>${recipe.tags[0]}</li>
                <li>${recipe.tags[1]}</li>
                <li>${recipe.tags[2]}</li>
            </ul>
            </p>
        </article>`
    });

    return cardContainer.innerHTML = allRecipes.join('\n');
}
//VIEW FULL RECIPE CARD - DIRECTIONS, INGREDIENTS, TOTAL COST

//FILTER RECIPES BY TAG, NAME, INGREDIENTS


//EVENT LISTENERS **AT BOTTOM**//
window.addEventListener('load', viewAllRecipes);
window.addEventListener('load', greetUser);