import { FoodRecipesModel } from "../interfaces/foodRecipesModel";
import styles from "./foodrecipeitem.module.css";

type FoodRecipeItemProps = {
  item: FoodRecipesModel;
  setSelectedRecipeId: React.Dispatch<number | undefined>;
};

export default function FoodRecipeItem({ item, setSelectedRecipeId }: FoodRecipeItemProps) {
  function handleClick() {
    setSelectedRecipeId(item.id);
  }

  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={item.image} alt={item.title} />

      <div className={styles.itemContent}>
        <p className={styles.itemName}>{item.title}</p>
      </div>

      <div className={styles.btnContainer}>
        <button className={styles.itemBtn} onClick={handleClick}>
          View Recipe
        </button>
      </div>
    </div>
  );
}
