import { FoodRecipesModel } from "../interfaces/foodRecipesModel";
import FoodRecipeItem from "./FoodRecipeItem";

interface FoodRecipesLstProps {
  foodLst: FoodRecipesModel[];
}
export default function FoodRecipesLst({ foodLst }: FoodRecipesLstProps) {
  return (
    <div>
      {foodLst.map((recipe) => (
        <FoodRecipeItem key={recipe.id} item={recipe} />
      ))}
    </div>
  );
}
