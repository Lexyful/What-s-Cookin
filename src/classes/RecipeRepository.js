class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes
  }
  
  getRecipesByTag(tag) {
    return this.recipes.filter(recipe => recipe.tags.includes(tag));
}

  getRecipesByName(name){
    return this.recipes.filter(recipe => recipe.name.includes(name));
    }

  getRecipeById(id){
    return this.recipes.find(recipe => {
      return recipe.id === +id
    });
  }
};

export default RecipeRepository;
