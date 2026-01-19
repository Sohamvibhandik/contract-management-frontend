// src/types/blueprint.ts

export type FieldType = 'TEXT' | 'DATE' | 'SIGNATURE' | 'CHECKBOX';

export interface BlueprintField {
  id: string;
  type: FieldType;
  label: string;
  position: {
    x: number;
    y: number;
  };
}

export interface Blueprint {
  id: string;
  name: string;
  fields: BlueprintField[];
  createdAt: string;
}
