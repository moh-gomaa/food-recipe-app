import { API_REQUESTS } from "../api-requests";
import { RecipeIngredientModel } from "../interfaces/recipeIngredientModel";
import IngredientItem from "./IngredientItem";

type IngredientsLstProps = {
  ingredientsLst: RecipeIngredientModel[];
};

export default function IngredientsLst({ ingredientsLst }: IngredientsLstProps) {
  return (
    <div>
      {ingredientsLst.map((item, index) => (
        <IngredientItem key={index} item={item} />
      ))}
    </div>
  );
}
