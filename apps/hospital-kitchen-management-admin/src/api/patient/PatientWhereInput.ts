import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PatientWhereInput = {
  dietKind?: StringNullableFilter;
  entryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  leavingDate?: DateTimeNullableFilter;
  patientId?: StringNullableFilter;
  patientName?: StringNullableFilter;
};
