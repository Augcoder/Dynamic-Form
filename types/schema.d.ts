export interface FormField {
    id: string;
    type: string;
    label: string;
    required: boolean;
    placeholder?: string;
    validation?: {
      pattern?: string;
      message?: string;
    };
    options?: { value: string; label: string }[];
  }
  
  export interface FormSchema {
    formTitle: string;
    formDescription: string;
    fields: FormField[];
  }