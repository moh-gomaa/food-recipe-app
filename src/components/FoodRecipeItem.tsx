import { FoodRecipesModel } from "../interfaces/foodRecipesModel";

interface FoodRecipeItemProps {
  item: FoodRecipesModel;
}
export default function FoodRecipeItem({ item }: FoodRecipeItemProps) {
  return (
    <div>
      <img src={item.image} alt={item.title} />
      <h1>{item.title}</h1>
      <button>View Recipe</button>
    </div>
  );
}
