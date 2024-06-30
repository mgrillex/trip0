import { SortOrder } from "../../util/SortOrder";

export type DepartmentOrderByInput = {
  createdAt?: SortOrder;
  departmentName?: SortOrder;
  id?: SortOrder;
  totalRequiredItems?: SortOrder;
  totalRequiredMaterials?: SortOrder;
  updatedAt?: SortOrder;
};
