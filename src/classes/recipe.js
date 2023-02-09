class Recipe {
    constructor(recipeData, ingredientsData) {
        this.id = recipeData.id
        this.image = recipeData.image
        this.ingredients = recipeData.ingredients
        this.instructions = recipeData.instructions
        this.name = recipeData.name
        this.tags = recipeData.tags
        this.ingredientsData = ingredientsData
    }
    getIngredientsName(name) {
        console.log(ingredient)
        return this.ingredients.filter(ingredient => ingredient.recipeData.ingredients.includes(name));
        
    }
    calculateIngredientsCosts() {
        
    }
    returnInstructions() {

    }
}


export default Recipe
