import { useEffect, useState } from "react";
import { FoodRecipesModel } from "../interfaces/foodRecipesModel";
import { BasicApiResponseModel } from "../interfaces/basicApiResponseModel";
import styles from "./search.module.css";
import { ENVIRONMENT } from "../environment";
import { API_REQUESTS } from "../api-requests";

type SearchProps = {
  setFoodRecipesLst: React.Dispatch<React.SetStateAction<FoodRecipesModel[]>>;
};

export default function Search({ setFoodRecipesLst }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    async function fetchFood() {
      const res: Response = await fetch(
        `${ENVIRONMENT.baseUrl}/${API_REQUESTS.recipesSection}/${API_REQUESTS.complexSearchQuery}?apiKey=${ENVIRONMENT.apiKey}&query=${searchQuery}`
      );

      const data: BasicApiResponseModel<FoodRecipesModel[]> = await res.json();
      const responseObj = data.results;

      // console.log("foodRecipesArray", responseObj);
      setFoodRecipesLst(responseObj);
    }

    fetchFood();
  }, [searchQuery]);

  return (
    <div className={styles.searchContainer}>
      <input className={styles.input} type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search text.." />
    </div>
  );
}
