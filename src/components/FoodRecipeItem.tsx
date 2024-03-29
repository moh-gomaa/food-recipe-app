import { FoodRecipesModel } from "../interfaces/foodRecipesModel";
import styles from "./foodrecipeitem.module.css";

interface FoodRecipeItemProps {
  item: FoodRecipesModel;
}
export default function FoodRecipeItem({ item }: FoodRecipeItemProps) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={item.image} alt={item.title} />

      <div className={styles.itemContent}>
        <p className={styles.itemName}>{item.title}</p>
      </div>

      <div className={styles.btnContainer}>
        <button className={styles.itemBtn}>View Recipe</button>
      </div>
    </div>
  );
}
