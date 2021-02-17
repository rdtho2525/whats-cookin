//GLOBAL VARIABLES//
// const Recipe = require('../src/Recipe');
// const User = require('../src/User');
// const RecipeRepo = require('../src/RecipeRepo');



const getRandomIndex = array => {
    return Math.floor(Math.random() * array.length)
}

const recipeRepo = new RecipeRepo(recipeData);
const currentUser = new User(usersData[getRandomIndex(usersData)]);

currentUser.favoriteRecipes.push(recipeRepo.recipes[3])//for testing only

//DOM ELEMENTS//
const navSection = document.querySelector('#navigation');
const favRecipesButton = document.querySelector('#favoriteRecipes');
const recipesToCookButton = document.querySelector('#recipesToCook');
const userSearch = document.querySelector('#userSearch');
const searchField = document.querySelector('#searchField')
const searchFilter = document.querySelector('#searchFilter');
const searchRecipesFilter = document.querySelector('#searchRecipesFilter');
const landingPage = document.querySelector('#landingPage');
const userGreeting = document.querySelector('#userGreeting');
const recentlyViewRecipes = document.querySelector('#recentlyViewedRecipes');
const centerPieceCard = document.querySelector('#centerPieceCard');
const cardContainer = document.querySelector('#cardContainer');
const modalContainer = document.querySelector('#modalContainer');
const fullRecipeCard = document.querySelector('#fullRecipeCard');
const fullCardImage = document.querySelector('#fullCardImage');
const fullCardName = document.querySelector('#fullCardName');
const totalCost = document.querySelector('#totalCost');
const ingredientsTitle = document.querySelector('#ingredientsTitle');
const ingredientsNeeded = document.querySelector('#ingredientsNeeded');
const instructionsTitle = document.querySelector('#instructionsTitle');
const recipeInstructions = document.querySelector('#recipeInstructions');
const exitFullCardButton = document.querySelector('#exitFullCard');
const searchButton = document.querySelector('#searchButton');
const recipeListTitle = document.querySelector('#recipeListTitle');
const saveToCook = document.querySelector('#saveToCook');

//FUNCTIONS//

const greetUser = () => {
    const firstName = currentUser.name.split(' ', 2);
    userGreeting.textContent = `Welcome to What's Cookin', ${firstName[0]}!`;
    setTimeout(function() {
        addClass(userGreeting);
    }, 10000)
}

const displayRecipes = (array) => {
    console.log(array)
    const pickArray = array.recipes || array;
    const allRecipes = pickArray.map(recipe => {
        return `
        <article id="${recipe.id}" class="recipe-card left click">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="heart-container">
                <p id="" class="recipe-name">${recipe.name}</p>
                <img class="fav-heart" src="../assets/emptyHeart.svg" alt="empty heart">
            </div>
        </article>`
    });

    return cardContainer.innerHTML = allRecipes.join('\n');
}

const addClass = (element, className) => {
    element.classList.add(className || "hidden");
  };
  
const removeClass = (element, className) => {
    element.classList.remove(className || "hidden");
  };

const changeToFullCard = event => {
    let recipe;
    const recipeID = parseInt(event.target.closest('article').id);
    if (recipeID.toString() === 'NaN') {
        return;
    } else {
        recipe = recipeRepo.recipes.find(rec => rec.id === recipeID);
    }
    showFullCard(recipe);
}

const showFullCard = recipe => {
    fullCardImage.src = recipe.image;
    fullCardImage.alt = recipe.name;
    fullCardName.innerText = recipe.name;
    recipeInstructions.innerHTML = getInstructions(recipe);
    totalCost.innerText = `total cost: $${recipe.getTotalCostOfIngredients(ingredientsData)}`;
    ingredientsNeeded.innerHTML = getIngredients(recipe);
    removeClass(modalContainer);
}

const getInstructions = recipe => {
    const result = recipe.instructions.map(ele => {
        return `<li class="item">${ele.instruction}</li>`;
    })
    return result.join('\n');
}

const getIngredients = recipe => {
    const ingredients = recipe.getIngredientNames(ingredientsData);
    const result = ingredients.map((ingr, i) => {
        return `<li>${ingr}:  ${recipe.ingredients[i].quantity.amount} ${recipe.ingredients[i].quantity.unit}</li>`;
    })
    return result.join('\n');
}


//FILTER RECIPES BY TAG, NAME, INGREDIENTS
const filterRecipes = () => {
    const filterValue = searchFilter.value;
    let userInput = searchField.value;

    if (userInput === '' || filterValue === '' || searchRecipesFilter.value === '') {
        return alert('Please fill in all search fields'); 
    }

    let recipeCards;

    switch (searchRecipesFilter.value) {
        case 'All Recipes':
            recipeCards = filterAllRecipes(filterValue, userInput);
            break;
        case 'Favorite Recipes':
            recipeCards = filterFavoriteRecipes(filterValue, userInput);
            break;
    }

    searchField.value = '';
    displayRecipes(recipeCards);
}

const filterFavoriteRecipes = (filterValue, userInput) => {

    switch (filterValue) {
        case 'name':
            changeTitleOnFilter(userInput, 'Favorite Recipes');
            return currentUser.filterByName(userInput, 'favoriteRecipes');
        case 'tag':
            userInput = searchField.value.toLowerCase();
            changeTitleOnFilter(userInput, 'Favorite Recipes');
            return currentUser.filterByTag(userInput, 'favoriteRecipes');
        case 'ingredients':
            userInput = searchField.value.toLowerCase();
            changeTitleOnFilter(userInput, 'Favorite Recipes');
            return currentUser.filterByIngredients(userInput, 'favoriteRecipes', ingredientsData);
    }
}

const filterAllRecipes = (filterValue, userInput) => {

    switch (filterValue) {
        case 'name':
            changeTitleOnFilter(userInput, 'All Recipes');
            return recipeRepo.filterByName(userInput);
        case 'tag':
            userInput = searchField.value.toLowerCase();
            changeTitleOnFilter(userInput, 'All Recipes');
            return recipeRepo.filterByTag(userInput);
        case 'ingredients':
            userInput = searchField.value.toLowerCase();
            changeTitleOnFilter(userInput, 'All Recipes');
            return recipeRepo.filterByIngredient(userInput, ingredientsData);
    }
}

const changeTitle = event => {
    return recipeListTitle.innerText = `Currently Viewing: ${event.target.value}`;
}

const changeTitleOnFilter = (filterValue, recipeGroup) => {
    return recipeListTitle.innerText = `Currently Viewing: ${recipeGroup} filtered by '${filterValue}'`;
}

const saveToRecipesToCook = () => {
    const recipeName = fullCardName.innerText;
    const recipe = recipeRepo.filterByName(recipeName);

    if (currentUser.recipesToCook.includes(recipe[0])) {
        alert('This recipe is already saved in your list of recipes to cook!');
    } else {
        currentUser.saveRecipe(recipe[0]);
    }
}

//EVENT LISTENERS **AT BOTTOM**//
window.addEventListener('load', function() {
    displayRecipes(recipeRepo.recipes);
});
window.addEventListener('load', greetUser);
exitFullCardButton.addEventListener('click', function() {
    addClass(modalContainer);
})
cardContainer.addEventListener('click', function(event) {
    changeToFullCard(event);
});
allRecipes.addEventListener('click', function(event) {
    changeTitle(event);
    displayRecipes(recipeRepo.recipes);
})
favRecipesButton.addEventListener('click', function(event) {
    changeTitle(event);
    displayRecipes(currentUser.favoriteRecipes);
})
recipesToCookButton.addEventListener('click', function(event) {
    changeTitle(event);
    displayRecipes(currentUser.recipesToCook);
})
searchButton.addEventListener('click', filterRecipes);
saveToCook.addEventListener('click', saveToRecipesToCook);