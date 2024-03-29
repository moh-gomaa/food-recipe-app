import { useEffect, useState } from "react";
import { FoodRecipesModel } from "../interfaces/foodRecipesModel";
import { BasicApiResponseModel } from "../interfaces/basicApiResponseModel";
import styles from "./search.module.css";

const BASE_URL = "https://api.spoonacular.com";
const API_KEY = "d94d4fa6c8b747819feec18fbca00cdc";

const RECIPIES_SECTION = "recipes";
const COMPLEX_SEARCH_QUERY = "complexSearch";

interface SearchProps {
  setFoodRecipesLst: React.Dispatch<React.SetStateAction<FoodRecipesModel[]>>;
}

export default function Search({ setFoodRecipesLst }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    async function fetchFood() {
      const res: Response = await fetch(
        `${BASE_URL}/${RECIPIES_SECTION}/${COMPLEX_SEARCH_QUERY}?apiKey=${API_KEY}&query=${searchQuery}`
      );

      const data: BasicApiResponseModel<FoodRecipesModel[]> = await res.json();
      const responseObj = data.results;

      console.log("foodRecipesArray", responseObj);
      setFoodRecipesLst(responseObj);
    }

    fetchFood();
  }, [searchQuery]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search text.."
      />
    </div>
  );
}
