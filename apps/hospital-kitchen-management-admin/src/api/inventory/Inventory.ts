import { Department } from "../department/Department";

export type Inventory = {
  createdAt: Date;
  department?: Department | null;
  expirationDate: Date | null;
  id: string;
  inventoryItemName: string | null;
  quantity: number | null;
  updatedAt: Date;
};
