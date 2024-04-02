import { RecipeIngredientModel } from "./recipeIngredientModel";
import { RecipeInstructionsLstModel } from "./recipeInstructionsModel";

export interface RecipeInfoModel {
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;

  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: true;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: 90;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: number;
  originalId: number;
  spoonacularScore: number;
  spoonacularSourceUrl: string;

  analyzedInstructions: RecipeInstructionsLstModel[];
  extendedIngredients: RecipeIngredientModel[];
}
