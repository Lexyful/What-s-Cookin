import './styles.css';
import fetchAll from './apiCalls';
import Recipe from './classes/recipe';
import User from './classes/user';
import RecipeRepository from './classes/RecipeRepository';
import './images/heart-pink.png'
import './images/heart-icon.png'

// import ingredientsData from './data/ingredients'
// ^^ this is the problem, it's this
// need to work on connecting the api to the classes, some of them arent talking atm

// let userData;
let ingredientsData;
let recipeRolodex;
let userProfile;

const recipeContainer = document.querySelector('.recipe-container');
const miniCardSection = document.getElementById('miniCardSection');
const miniCardList = document.getElementById('miniCardList');

const miniCardSingle = document.getElementById('recipeCard')

const largeRecipeCardContainer = document.getElementById('largeRecipeCardContainer')

const defaultView = document.getElementById('mainScreen');
const overlay = document.querySelector('.overlay');

const buttonHome = document.getElementById('homeButton');
const buttonViewAll = document.getElementById('viewAllButton');
const buttonSavedRecipes = document.getElementById('savedRecipesButton');

const buttonSearch = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');
const buttonSearchYourRecipes = document.getElementById("searchYourRecipeBtn");

// const heartIcon = document.getElementById('heartIcon');
// const heartPink = document.querySelector('heart-pink');


// buttonSearchYourRecipes.addEventListener('click', viewRecipesToCookbyTag);
// buttonSearchYourRecipes.addEventListener('click', viewRecipesToCookbyTag);

window.addEventListener('load', () => {
    fetchAll()
    .then(data => {
    const idNum = getRandomUserId()
    console.log('data', data)
    userProfile = new User(data[0].users.find(user => user.id === idNum))
    console.log('user profile:', userProfile)
    // ingredientsData = allApis[1]
    const recipe = data[1].ingredients.map(recipe => {
      return new Recipe(recipe, ingredientsData)
    })
// console.log(classRecipeData)
    recipeRolodex = new RecipeRepository(data[2].recipes)

    // console.log(recipeRolodex)
    viewHomePage()
    }) 
});

recipeContainer.addEventListener('click', clickRecipeContainer)

// buttonViewRecipe.addEventListener('click', viewLargeRecipe)

buttonSearch.addEventListener('click', function() {
  const searchValue = searchBar.value
  const nameInput = searchValue.startsWith("#") ? "" : searchValue
  const tagInput = searchValue.startsWith("#") ? searchValue.slice(1) : ""
  searchForRecipe(nameInput, tagInput)
})

function searchForRecipe(nameInput, tagInput) {
  if (tagInput) {
    const recipeTagFound = recipeRolodex.getRecipeByTag(tagInput)
    if (recipeTagFound.length > 0) {
      recipeContainer.innerHTML = ""
      viewRecipesByTag(recipeTagFound)
    } else {
      recipeContainer.innerHTML = `<h2>Cool Shiba says, no. Try again.</h2>`
    }
  } else if (nameInput) {
    const recipeNameFound = recipeRolodex.getRecipeByName(nameInput)
    if (recipeNameFound.length > 0) {
      recipeContainer.innerHTML = ""
      viewRecipesByName(recipeNameFound)
    } else {
      recipeContainer.innerHTML = `<h2>Cool Shiba says, no. Try again.</h2>`
    }
  } else {
    recipeContainer.innerHTML = `<h2>Cool Shiba says, no. Try again.</h2>`
  }
}

// EVENT LISTENER // Functions combined

// buttonSearch.addEventListener('click', function() {
//   if (searchBar.value.startsWith("#")) {
//       searchForRecipeTag(searchBar.value.slice(1))
//   } else {
//       searchForRecipeName(searchBar.value)
//   }
// });

// function searchForRecipeName(input) {
//   const recipeNameFound = recipeRolodex.getRecipeByName(input)
// if(input.length > 0) {
//   recipeContainer.innerHTML = ""
//   viewRecipesByName(recipeNameFound)
// } else {
//   recipeContainer.innerHTML = `<h2>Cool Shiba says, no. Try again.</h2>`
//   }
// }

// function searchForRecipeTag(input) {
//     const recipeFound = recipeRolodex.getRecipeByTag(input)
//     if(input.length > 0) {
//     console.log("here", recipeRolodex.getRecipeByTag(input).length)
//     recipeContainer.innerHTML = ""
//     viewRecipesByTag(recipeFound)
//     } else { 
//     recipeContainer.innerHTML = `<h2>Cool Shiba says, no. Try again.</h2>`
//   }
// };
// else if(recipeRolodex.getRecipeByName(input).length > 0){
//   viewRecipeByName(input)

function getRandomUserId(){
    return Math.floor(Math.random() * 41);
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

const viewHomePage = () => {
  recipeContainer.innerHTML = ''
  let recipeHTML = recipeRolodex.recipes.map(recipe =>
    recipeContainer.innerHTML += `
    <article class="one-recipe">
        <div class="mini-recipe-card" data-parent="${recipe.id}">
        <article class="card-image-section">
            <img class="card-image" src="${recipe.image}" alt="image of ${recipe.name}" data-parent="${recipe.id}">
        </article>
            <h2 class="recipe-name" data-parent="${recipe.id}">${recipe.name}</h2>
        <article class="all-card-icons" data-parent="${recipe.id}">
            <button data-title="Click to save this recipe!" id="heartBtn" data-parent="${recipe.id}">
                <img class="heart-icon card-icon" id="heartIcon" src="/images/heart-icon.png" alt="a heart to add recipe to favorites">
            </button>
            <button class="hidden" id="pinkHeartBtn" data-parent="${recipe.id}">
                <img class="heart-pink card-icon" src="/images/heart-pink.png" alt="a heart to add recipe to favorites">
            </button>
            <button class="view-recipe-button" id="viewRecipeButton" data-parent="${recipe.id}">view</button>
        </article>
        </div>
    </article>
  `);
};

function viewLargeRecipe(){
  largeRecipeCardContainer.innerHTML = ''
  let largeRecipeHTML = recipeRolodex.recipes.find(recipe => 
    largeRecipeCardContainer.innerHTML += `
  <article class=large-recipe-card >
    <div class="ingredients" id="ingredients">
      <h2>${recipe.name}</h2>
    <div class="ingredeient-list" id="ingredientList">
      <p>${recipe.ingredients}</p>
      <p>${recipe.instructions}</p>
    </div>
      <img class="card-image" src="${recipe.image}" alt="image of ${recipe.name}" data-parent="${recipe.id}">
      <button class="saved-recipe" id="savedRecipe">
    </div>
    </article>`);
    show(largeRecipeCardContainer)
  };
  // buttonViewRecipe.addEventListener('click', viewLargeRecipe)


function saveRecipe(){
  console.log('hello world')
  let heartBtn = parent.firstElementChild;
  let pinkHeartBtn = parent.lastElementChild;
    recipeRolodex.recipes
              // recipe.pinkHeartBtn = true
              userProfile.recipesToCook.push(userProfile.recipe)
              console.log(userProfile.classRecipeData)
            // hide(heartBtn)
            // show(pinkHeartBtn)
            
}
              
  function unsaveRecipe(){
          recipe.pinkHeartBtn = false
              const currentRecipeIndex = userProfile.recipesToCook
                .findIndex(currentRecipe => currentRecipe.id === recipe.id)
                console.log(userProfile.recipesToCook)
                userProfile.recipesToCook.splice(currentRecipeIndex, 1)
                console.log(userProfile.recipesToCook)
              // hide(pinkHeartBtn)
              // show(heartBtn)
  }
       
      // console.log("recipes to cook",userProfile.recipesToCook)
  

  function clickRecipeContainer(event){
    const chosenRecipeId = event.target.closest('article').dataset.parent
    console.log('hi', chosenRecipeId)
    console.log(event.target.id)
    if(event.target.id === 'heartIcon'){
      saveRecipe(chosenRecipeId)
    } 
    if(event.target.id === 'pinkHeartBtn'){
      unsaveRecipe(chosenRecipeId)
    }
    if(event.target.id === 'viewRecipeButton'){
      viewLargeRecipe(chosenRecipeId)
    }
  }



// **** note: heart in DOM does not persist once a tag or name is searched (still in data model)

function viewRecipesByTag(recipeTag) {
  // console.log("tag name:", recipeTag.name)
  const searchTag = recipeTag.forEach(recipe => {
  recipeContainer.innerHTML += `
<article class="one-recipe">
<div class="mini-recipe-card" data-parent="${recipe.id}">
<article class="card-image-section">
    <img class="card-image" src="${recipe.image}" alt="image of ${recipe.name}" data-parent="${recipe.id}">
</article>
    <h2 class="recipe-name" data-parent="${recipe.id}">${recipe.name}</h2>
<article class="all-card-icons" data-parent="${recipe.id}">
    <button data-title="Click to save this recipe!" id="heart-btn" data-parent="${recipe.id}">
        <img class="heart-icon card-icon" id="heartIcon" src="/images/heart-icon.png" alt="a heart to add recipe to favorites">
    </button>
    <button class="hidden" id="pink-heart-btn" data-parent="${recipe.id}">
        <img class="heart-pink card-icon" src="/images/heart-pink.png" alt="a heart to add recipe to favorites">
    </button>
</article>
</div>
</article>
`
  });
  return searchTag
};

function viewRecipesByName(recipeTag){
console.log("recipe name:", recipeTag.name)
const searchName = recipeTag.forEach(recipe => {
  recipeContainer.innerHTML += `
  <article class="one-recipe">
  <div class="mini-recipe-card" data-parent="${recipe.id}">
  <article class="card-image-section">
      <img class="card-image" src="${recipe.image}" alt="image of ${recipe.name}" data-parent="${recipe.id}">
  </article>
      <h2 class="recipe-name" data-parent="${recipe.id}">${recipe.name}</h2>
  <article class="all-card-icons" data-parent="${recipe.id}">
      <button data-title="Click to save this recipe!" id="heart-btn" data-parent="${recipe.id}">
          <img class="heart-icon card-icon" id="heartIcon" src="/images/heart-icon.png" alt="a heart to add recipe to favorites">
      </button>
      <button class="hidden" id="pink-heart-btn" data-parent="${recipe.id}">
          <img class="heart-pink card-icon" src="/images/heart-pink.png" alt="a heart to add recipe to favorites">
      </button>
  </article>
  </div>
</article>
`
});
return searchName
};


// function viewRecipesToCookbyTag() {
//   let recipesToCookTagHTML = userProfile.recipesToCook.filterRecipesByTag(tag).map(recipe => `    <article class="mini-recipe-card" data-parent="${recipe.id}>
//   <article class="card-image-section">
//     <img class="card-image" tabindex="0" src="${recipe.image}" alt="image of ${recipe.name}" data-parent="${recipe.id}">
//   </article>
//   <article class="recipe-name-area">
//     <h2 class="recipe-name" tabindex="0" data-parent="${recipe.id}">${recipe.name}</h2><article class="all-card-icons">
//     <button data-title="Click to save this recipe!" id="triggerInfoButton"><img class="heart-icon card-icon" id="triggerFavoritesIcon" tabindex="0" src="https://i.postimg.cc/9fSC0FND/heart.png" alt="a heart with a plus sign on the bottom corner for the add to favorites button"></button>
//   </article>
//   </article>
// </article>`).join('')
// recipeContainer.innerHTML = tagHTML;
// }




/*
As a user, I should be able to view a list of all recipes.
As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
As a user, I should be able to filter recipes by a tag. (Extension option: by multiple tags)
As a user, I should be able to search recipes by their name. (Extension option: by name or ingredients)
*/