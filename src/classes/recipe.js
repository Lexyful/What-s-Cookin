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
    getIngredientsName() {
        console.log(ingredient)
        return this.recipeData.filter(ingredient => ingredient.ingredientsData.name);
    }
       
    calculateIngredientsCosts() {
     const total = this.ingredients.reduce((sum, ingredient) => {
        this.ingredientsData.forEach(element => {
        if (ingredient.id === element.id) {
        sum += ingredient.quantity.amount * element.estimatedCostInCents
            }
         })
        return sum
        }, 0)
        return `$${(total/100).toFixed(2)}`
    }
    returnInstructions() {

    }
}


export default Recipe
