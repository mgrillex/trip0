import { Department } from "../department/Department";

export type Ingredient = {
  createdAt: Date;
  department?: Department | null;
  id: string;
  itemName: string | null;
  quantityInGrams: number | null;
  updatedAt: Date;
};
