export const environment = {
  production: true,
  api: {
    headers: {
      'header-from-env': 'default header value',
      environment: 'prod',
    },
    endpoints: {
      challenges:
        'https://data-upload-6bc54-default-rtdb.asia-southeast1.firebasedatabase.app/sciprbox-hackathon/prod/challenges',
      employees:
        'https://data-upload-6bc54-default-rtdb.asia-southeast1.firebasedatabase.app/sciprbox-hackathon/prod/employees',
    },
  },
};
