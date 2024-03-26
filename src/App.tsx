import { useState } from "react";
import Search from "./components/Search";
import { FoodRecipesModel } from "./interfaces/foodRecipesModel";
import FoodRecipesLst from "./components/FoodRecipesLst";

function App() {
  const [foodRecipesLst, setFoodRecipesLst] = useState<FoodRecipesModel[]>([]);

  return (
    <div className="App">
      <Search setFoodRecipesLst={setFoodRecipesLst} />
      <FoodRecipesLst foodLst={foodRecipesLst} />
    </div>
  );
}

export default App;
