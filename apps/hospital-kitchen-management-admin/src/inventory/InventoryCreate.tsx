import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { DepartmentTitle } from "../department/DepartmentTitle";

export const InventoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="department.id"
          reference="Department"
          label="department"
        >
          <SelectInput optionText={DepartmentTitle} />
        </ReferenceInput>
        <DateTimeInput label="expirationDate" source="expirationDate" />
        <TextInput label="inventoryItemName" source="inventoryItemName" />
        <NumberInput step={1} label="quantity" source="quantity" />
      </SimpleForm>
    </Create>
  );
};
