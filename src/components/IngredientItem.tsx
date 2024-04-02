import { API_REQUESTS } from "../api-requests";
import { RecipeIngredientModel } from "../interfaces/recipeIngredientModel";
import styles from "./ingredientitem.module.css";

type IngredientItemProps = {
  item: RecipeIngredientModel;
};

export default function IngredientItem({ item }: IngredientItemProps) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imgContainer}>
        <img src={`${API_REQUESTS.ingredientImg}/${item.image}`} alt={item.name} />
      </div>

      <div className={styles.itemContentContainer}>
        <div className={styles.name}>{item.name}</div>

        <div className={styles.amount}>
          {item.amount} {item.unit}
        </div>
      </div>
    </div>
  );
}
