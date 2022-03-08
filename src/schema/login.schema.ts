export const LOGIN_SCHEMA = {
  title: 'Login',
  inputs: [
    {
      label: 'Employee Id',
      show: true,
      props: {
        id: 'employee_id',
        type: 'number',
      },
      validations: [
        {
          name: 'required',
          errorMessage: 'Enter a non-empty Employee Id',
          validationFn: (val: string) => val.length != 0,
          inAction: true,
        },
        {
          name: 'min-length',
          errorMessage: 'Your Employee id is too short',
          validationFn: (val: string) => !!val && val.length > 4,
          inAction: true,
        },
        {
          name: 'max-length',
          errorMessage: 'Your Employee id is too long',
          validationFn: (val: string) => !!val && val.length < 7,
          inAction: true,
        },
        {
          name: 'exact-length',
          errorMessage: 'Enter a 6 digit employee id',
          validationFn: (val: string) => !!val && val.length == 6,
          inAction: false,
        },
      ],
    },
  ],
};
