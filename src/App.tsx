import { useState } from "react";
import Search from "./components/Search";
import { FoodRecipesModel } from "./interfaces/foodRecipesModel";
import FoodRecipesLst from "./components/FoodRecipesLst";
import Nav from "./components/Nav";
import "./App.css";
import OuterContainer from "./components/OuterContainer";
import InnerContainer from "./components/InnerContainer";
import FoodRecipeDetails from "./components/FoodRecipeDetails";

function App() {
  const [foodRecipesLst, setFoodRecipesLst] = useState<FoodRecipesModel[]>([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | undefined>();

  return (
    <div className="App">
      <Nav />
      <Search setFoodRecipesLst={setFoodRecipesLst} />
      <OuterContainer>
        <InnerContainer>
          <FoodRecipesLst foodLst={foodRecipesLst} setSelectedRecipeId={setSelectedRecipeId} />
        </InnerContainer>

        <InnerContainer>
          <FoodRecipeDetails selectedRecipeId={selectedRecipeId} />
        </InnerContainer>
      </OuterContainer>
    </div>
  );
}

export default App;
