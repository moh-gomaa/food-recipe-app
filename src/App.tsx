import { useState } from "react";
import Search from "./components/Search";
import { FoodRecipesModel } from "./interfaces/foodRecipesModel";

function App() {
  const [foodRecipesLst, setFoodRecipesLst] = useState<FoodRecipesModel[]>([]);

  return (
    <div className="App">
      <Search setFoodRecipesLst={setFoodRecipesLst} />

      {foodRecipesLst.map((recipe) => (
        <h1 key={recipe.id}>{recipe.title}</h1>
      ))}
    </div>
  );
}

export default App;
