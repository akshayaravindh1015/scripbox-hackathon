export const NEW_CHALLENGE_SCHEMA = {
  title: 'New Idea',
  subtitle: 'Enter the details about your new hackathon idea!',
  inputs: [
    {
      label: 'Title',
      show: true,
      props: {
        id: 'new_challenge_title',
        type: 'text',
      },
      validations: [
        {
          name: 'required',
          errorMessage: 'Enter a non-empty title',
          validationFn: (val: string) => val.length != 0,
          inAction: true,
        },
        {
          name: 'min-length',
          errorMessage: 'Your title id is too short',
          validationFn: (val: string) => !!val && val.length > 4,
          inAction: true,
        },
        {
          name: 'max-length',
          errorMessage: 'Your title id is too long',
          validationFn: (val: string) => !!val && val.length < 99,
          inAction: true,
        },
      ],
    },
    {
      label: 'Description',
      show: true,
      props: {
        id: 'new_challenge_desc',
        type: 'textarea',
      },
      validations: [
        {
          name: 'required',
          errorMessage: 'Enter a non-empty desc',
          validationFn: (val: string) => val.length != 0,
          inAction: true,
        },
        {
          name: 'min-length',
          errorMessage: 'Your desc id is too short',
          validationFn: (val: string) => !!val && val.length > 10,
          inAction: true,
        },
      ],
    },
    {
      label: 'Tags',
      show: true,
      props: {
        id: 'new_challenge_tags',
        type: 'text',
      },
      validations: [
        {
          name: 'required',
          errorMessage: 'Enter atleast one tag',
          validationFn: (val: string) => JSON.parse(val).length > 0,
          inAction: true,
        },
      ],
    },
  ],
};
