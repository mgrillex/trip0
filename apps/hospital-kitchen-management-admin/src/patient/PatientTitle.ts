import { Patient as TPatient } from "../api/patient/Patient";

export const PATIENT_TITLE_FIELD = "patientName";

export const PatientTitle = (record: TPatient): string => {
  return record.patientName?.toString() || String(record.id);
};
