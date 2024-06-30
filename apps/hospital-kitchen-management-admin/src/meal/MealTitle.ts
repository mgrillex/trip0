import { Meal as TMeal } from "../api/meal/Meal";

export const MEAL_TITLE_FIELD = "mealName";

export const MealTitle = (record: TMeal): string => {
  return record.mealName?.toString() || String(record.id);
};
