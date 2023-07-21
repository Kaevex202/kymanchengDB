module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: env('PUBLIC_URL', process.env.PUBLIC_URL),
  proxy: true,
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS"),
  }
});
