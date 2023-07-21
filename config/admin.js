module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e4350524b0689fc3f46e2407dae950e2'),
  },
  url: env('PUBLIC_ADMIN_URL', process.env.PUBLIC_ADMIN_URL),
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },

});