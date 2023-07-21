module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
    jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
