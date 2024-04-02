import { useEffect, useState } from "react";
import { ENVIRONMENT } from "../environment";
import { API_REQUESTS } from "../api-requests";
import { RecipeInfoModel } from "../interfaces/recipeInfoModel";
import styles from "./foodrecipedetails.module.css";
import IngredientsLst from "./IngredientsLst";

type FoodRecipeDetailsProps = {
  selectedRecipeId: number | undefined;
};

export default function FoodRecipeDetails({ selectedRecipeId }: FoodRecipeDetailsProps) {
  const [foodRecipeInfo, setFoodRecipeInfo] = useState<RecipeInfoModel>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchRecipeInfo() {
      const res: Response = await fetch(
        `${ENVIRONMENT.baseUrl}/${API_REQUESTS.recipesSection}/${selectedRecipeId}/${API_REQUESTS.recipeInfoQuery}?apiKey=${ENVIRONMENT.apiKey}`
      );

      const data: RecipeInfoModel = await res.json();
      setFoodRecipeInfo(data);
      // console.log("recipeInfo", data);

      setIsLoading(false);
    }

    if (selectedRecipeId) {
      fetchRecipeInfo();
    }
  }, [selectedRecipeId]);

  if (selectedRecipeId == undefined && isLoading) {
    return <strong>Please select recipe...</strong>;
  } else if (isLoading) {
    return <strong>Loading...</strong>;
  } else {
    return (
      <div>
        <div className={styles.recipeCard}>
          <h1 className={styles.recipeTitle}>{foodRecipeInfo?.title}</h1>
          <img className={styles.recipeImg} src={foodRecipeInfo?.image} alt="" />

          <div className={styles.recipeDetails}>
            <span>
              ⌚ <strong>{foodRecipeInfo?.readyInMinutes} Minutes</strong>
            </span>

            <span>
              👪 <strong>Serves {foodRecipeInfo?.servings}</strong>
            </span>

            <span>
              <strong>{foodRecipeInfo?.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}</strong>
            </span>

            <span>
              <strong>{foodRecipeInfo?.vegan ? "🍅 Vegan" : ""}</strong>
            </span>
          </div>

          <div>
            <strong>${foodRecipeInfo?.pricePerServing ?? 0 / 100} Per serving</strong>
          </div>

          <h2>Ingredients:</h2>
          <IngredientsLst ingredientsLst={foodRecipeInfo!.extendedIngredients} />

          <h2>Instructions:</h2>
          <div className={styles.recipeInstructions}>
            <ol>
              {foodRecipeInfo?.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
