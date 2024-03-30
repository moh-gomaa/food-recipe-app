type FoodRecipeDetailsProps = {
  selectedRecipeId: number | undefined;
};

export default function FoodRecipeDetails({ selectedRecipeId }: FoodRecipeDetailsProps) {
  return <div>Detais== {selectedRecipeId}</div>;
}
