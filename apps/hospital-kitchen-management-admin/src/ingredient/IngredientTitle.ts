import { Ingredient as TIngredient } from "../api/ingredient/Ingredient";

export const INGREDIENT_TITLE_FIELD = "itemName";

export const IngredientTitle = (record: TIngredient): string => {
  return record.itemName?.toString() || String(record.id);
};
