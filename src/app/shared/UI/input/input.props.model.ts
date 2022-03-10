export type Validation = {
  name: string;
  errorMessage: string;
  validationFn: (val: string) => boolean;
  inAction: boolean;
};
export type InputProps = {
  id: string;
  type: string;
};
