import { Diet as TDiet } from "../api/diet/Diet";

export const DIET_TITLE_FIELD = "dietName";

export const DietTitle = (record: TDiet): string => {
  return record.dietName?.toString() || String(record.id);
};
