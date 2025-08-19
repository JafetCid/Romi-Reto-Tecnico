// Tipado para datos del form
export interface SymptomsForm {
  name: string;
  age: string;
  headache: boolean;
  fever: boolean;
  cough: boolean
  soreThroat: boolean;
  nasalCongestion: boolean;
  otherSymptoms: string;
}

// Tipado para errores del form
export interface SymptomsFormErrors {
    name: string;
    age: string;
    headache: string;
    fever: string;
    cough: string
    soreThroat: string;
    nasalCongestion: string;
    otherSymptoms: string;
}