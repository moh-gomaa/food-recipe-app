import { FoodRecipesModel } from "../interfaces/foodRecipesModel";
import FoodRecipeItem from "./FoodRecipeItem";

type FoodRecipesLstProps = {
  foodLst: FoodRecipesModel[];
  setSelectedRecipeId: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export default function FoodRecipesLst({ foodLst, setSelectedRecipeId }: FoodRecipesLstProps) {
  return (
    <div>
      {foodLst.map((recipe) => (
        <FoodRecipeItem key={recipe.id} item={recipe} setSelectedRecipeId={setSelectedRecipeId} />
      ))}
    </div>
  );
}
