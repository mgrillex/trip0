import { Inventory as TInventory } from "../api/inventory/Inventory";

export const INVENTORY_TITLE_FIELD = "inventoryItemName";

export const InventoryTitle = (record: TInventory): string => {
  return record.inventoryItemName?.toString() || String(record.id);
};
