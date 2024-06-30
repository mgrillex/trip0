import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  availableMeals?: SortOrder;
  createdAt?: SortOrder;
  dietKind?: SortOrder;
  entryDate?: SortOrder;
  id?: SortOrder;
  leavingDate?: SortOrder;
  patientId?: SortOrder;
  patientName?: SortOrder;
  updatedAt?: SortOrder;
};
