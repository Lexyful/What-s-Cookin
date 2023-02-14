import './styles.css';
import fetchAll from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import Recipe from './classes/recipe';
import User from './classes/user';
import RecipeRepository from './classes/RecipeRepository';
import './images/heart-pink.png'
import './images/heart-icon.png'

let userData;
let ingredientsData;
let recipeRolodex;
let userProfile;

const recipeContainer = document.querySelector('.recipe-container');
const miniCardSection = document.getElementById('miniCardSection');
const miniCardList = document.getElementById('miniCardList');

const miniCardSingle = document.getElementById('recipeCard')

const defaultView = document.getElementById('mainScreen');
const overlay = document.querySelector('.overlay');

const buttonHome = document.getElementById('homeButton');
const buttonViewAll = document.getElementById('viewAllButton');
const buttonSavedRecipes = document.getElementById('savedRecipesButton');

const buttonSearch = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');
const buttonSearchYourRecipes = document.getElementById("searchYourRecipeBtn");

const heartIcon = document.getElementById('heartIcon');
const heartPink = document.querySelector('heart-pink');


// buttonSearchYourRecipes.addEventListener('click', viewRecipesToCookbyTag);
// buttonSearchYourRecipes.addEventListener('click', viewRecipesToCookbyTag);

window.addEventListener('load', () => {
    fetchAll()
    .then(data => {
    const idNum = getRandomUserId()
    userProfile = new User(data[0].usersData.find(user => user.id === idNum))
    console.log('user profile:', userProfile)
    // ingredientsData = allApis[1]
    recipeRolodex = new RecipeRepository(data[2].recipeData)
    // console.log(recipeRolodex)
    viewHomePage()
    }) 
});

recipeContainer.addEventListener('click', saveRecipe)



buttonSearch.addEventListener('click', function() {
  if (searchBar.value.startsWith("#")) {
      searchForRecipeTag(searchBar.value.slice(1))
  } else {
      searchForRecipeName(searchBar.value)
  }
});

function searchForRecipeName(input) {
  const recipeNameFound = recipeRolodex.getRecipeByName(input)
if(input.length > 0) {
  recipeContainer.innerHTML = ""
  viewRecipesByName(recipeNameFound)
} else {
  recipeContainer.innerHTML = `<h2>Cool Shiba says, no. Try again.</h2>`
  }
}

function searchForRecipeTag(input) {
    const recipeFound = recipeRolodex.getRecipeByTag(input)
    console.log("recipe found:", recipeFound)
  // console.log("recipe repository:", recipeRolodex)
    if(input.length > 0) {
    console.log("here", recipeRolodex.getRecipeByTag(input).length)
    recipeContainer.innerHTML = ""
    viewRecipesByTag(recipeFound)
    } else { 
    recipeContainer.innerHTML = `<h2>Cool Shiba says, no. Try again.</h2>`
  }
};


// else if(recipeRolodex.getRecipeByName(input).length > 0){
//   viewRecipeByName(input)

function getRandomUserId(){
    return Math.floor(Math.random() * 41);
};

// function show(element) {
//   element.classList.remove('hidden');
// };

// function hide(element) {
//   element.classList.add('hidden');
// };

const viewHomePage = () => {
  let recipeHTML = recipeRolodex.recipes.map(recipe => `
    <article class="mini-recipe-card" data-parent="${recipe.id}>
    <article class="card-image-section">
      <img class="card-image" tabindex="0" src="${recipe.image}" alt="image of ${recipe.name}" data-parent="${recipe.id}">
    </article>
    <article class="recipe-name-area">
      <h2 class="recipe-name" tabindex="0" data-parent="${recipe.id}">${recipe.name}</h2><article class="all-card-icons">
      <button data-title="Click to save this recipe!" id="triggerInfoButton"><img class="heart-icon card-icon" id="triggerFavoritesIcon" tabindex="0" src="/images/heart-icon.png" alt="a heart with a plus sign on the bottom corner for the add to favorites button"></button>
      <button id="triggerInfoButton"><img class="hidden heart-pink card-icon" id="triggerFavoritesIcon" tabindex="0" src="/images/heart-pink.png" alt="a heart with a plus sign on the bottom corner for the add to favorites button"></button>
    </article>
  </article>
  `).join('');
  recipeContainer.innerHTML = recipeHTML;
};



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~


function saveRecipe(event){
  let heartIcon = document.getElementById('heartIcon');
  let heartPink = document.querySelector('.heart-pink');
    console.log("event", event.target.dataset.parent)
    recipeRolodex.recipes
      .forEach(recipe => {
          if(recipe.id === +(event.target.dataset.parent)){
              userProfile.recipesToCook.push(recipe)
              recipe.pinkHeartIcon = true
          }
          if(recipe.pinkHeartIcon === true){
            heartPink.classList.remove('hidden')
            heartIcon.classList.add('hidden')
          }
      })
      console.log("recipes to cook",userProfile.recipesToCook)
    // hide(heartIcon)
    // show(heartPink)
  };





function viewRecipesByTag(recipeTag) {
  // console.log("tag name:", recipeTag.name)
  const searchTag = recipeTag.forEach(recipe => {
  recipeContainer.innerHTML += ` 
  <article class="mini-recipe-card" data-parent="${recipe.id}>
  <article class="card-image-section">
    <img class="card-image" tabindex="0" src="${recipe.image}" alt="image of ${recipe.name}" data-parent="${recipe.id}">
  </article>
  <article class="recipe-name-area">
    <h2 class="recipe-name" tabindex="0" data-parent="${recipe.id}">${recipe.name}</h2><article class="all-card-icons">
    <button data-title="Click to save this recipe!" id="triggerInfoButton"><img class="heart-icon card-icon" id="triggerFavoritesIcon" tabindex="0" src="https://i.postimg.cc/9fSC0FND/heart.png" alt="a heart with a plus sign on the bottom corner for the add to favorites button"></button>
  </article>
</article>`
  });
  return searchTag
};

function viewRecipesByName(recipeTag){
console.log("recipe name:", recipeTag.name)
const searchName = recipeTag.forEach(recipe => {
  recipeContainer.innerHTML += `
  <article class="mini-recipe-card" data-parent="${recipe.id}>
  <article class="card-image-section">
    <img class="card-image" tabindex="0" src="${recipe.image}" alt="image of ${recipe.name}" data-parent="${recipe.id}">
  </article>
  <article class="recipe-name-area">
    <h2 class="recipe-name" tabindex="0" data-parent="${recipe.id}">${recipe.name}</h2><article class="all-card-icons">
    <button data-title="Click to save this recipe!" id="triggerInfoButton"><img class="heart-icon card-icon" id="triggerFavoritesIcon" tabindex="0" src="https://i.postimg.cc/9fSC0FND/heart.png" alt="a heart with a plus sign on the bottom corner for the add to favorites button"></button>
  </article>
</article>
  `
});
return searchName
};


function viewRecipesToCookbyTag() {
  let recipesToCookTagHTML = userProfile.recipesToCook.filterRecipesByTag(tag).map(recipe => `    <article class="mini-recipe-card" data-parent="${recipe.id}>
  <article class="card-image-section">
    <img class="card-image" tabindex="0" src="${recipe.image}" alt="image of ${recipe.name}" data-parent="${recipe.id}">
  </article>
  <article class="recipe-name-area">
    <h2 class="recipe-name" tabindex="0" data-parent="${recipe.id}">${recipe.name}</h2><article class="all-card-icons">
    <button data-title="Click to save this recipe!" id="triggerInfoButton"><img class="heart-icon card-icon" id="triggerFavoritesIcon" tabindex="0" src="https://i.postimg.cc/9fSC0FND/heart.png" alt="a heart with a plus sign on the bottom corner for the add to favorites button"></button>
  </article>
  </article>
</article>`).join('')
recipeContainer.innerHTML = tagHTML;
}




/*
As a user, I should be able to view a list of all recipes.
As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
As a user, I should be able to filter recipes by a tag. (Extension option: by multiple tags)
As a user, I should be able to search recipes by their name. (Extension option: by name or ingredients)
*/