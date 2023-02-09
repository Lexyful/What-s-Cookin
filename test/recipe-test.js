import { expect } from 'chai';
import Recipe from '../src/classes/recipe';
import sampleIngredientData from '../src/sampleIngredientData';
describe('Recipe', () => {
    let recipe;
    let ingredient1;
    let ingredient2;
    let ingredientDataSet;
    let recipeDataSet;
    let recipeDetails;

  beforeEach(() => {
     recipe = new Recipe(sampleIngredientData)
    })
    it('should be a function', () => {
        expect(Recipe).to.be.a('function');
    })
    it('should be an instance of recipe', () => {
        expect(recipe).to.be.an.instanceof(Recipe);
    })
    it('should have an id', () => {
        expect(recipe.id).to.equal(595736)
    })
    it('should have an image', () => {
        expect(recipe.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg')
    })
    it('should get ingredient name', () => {
      const ingredientResult = ingredient1.getIngredient("lemon zest")
      expect(ingredientResult).to.deep.equal([{
        "id": 18372,
        "name": "lemon zest",
        "estimatedCostInCents": 712,
        "instruction": "Add dry ingredients and mix on low just until incorporated. lemon zest.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
        "number": 3
      }])
    })
})