import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PatientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="availableMeals"
          source="availableMeals"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="dietKind" source="dietKind" />
        <DateTimeInput label="entryDate" source="entryDate" />
        <DateTimeInput label="leavingDate" source="leavingDate" />
        <TextInput label="patientId" source="patientId" />
        <TextInput label="patientName" source="patientName" />
      </SimpleForm>
    </Create>
  );
};
