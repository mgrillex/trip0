import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PatientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="availableMeals" source="availableMeals" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dietKind" source="dietKind" />
        <TextField label="entryDate" source="entryDate" />
        <TextField label="ID" source="id" />
        <TextField label="leavingDate" source="leavingDate" />
        <TextField label="patientId" source="patientId" />
        <TextField label="patientName" source="patientName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
