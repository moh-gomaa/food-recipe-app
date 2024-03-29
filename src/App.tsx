import { useState } from "react";
import Search from "./components/Search";
import { FoodRecipesModel } from "./interfaces/foodRecipesModel";
import FoodRecipesLst from "./components/FoodRecipesLst";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [foodRecipesLst, setFoodRecipesLst] = useState<FoodRecipesModel[]>([]);

  return (
    <div className="App">
      <Nav />
      <Search setFoodRecipesLst={setFoodRecipesLst} />
      <FoodRecipesLst foodLst={foodRecipesLst} />
    </div>
  );
}

export default App;
