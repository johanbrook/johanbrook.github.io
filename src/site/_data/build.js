module.exports = {
  hash: process.env.GITHUB_SHA || 'dev',
  date: new Date().toJSON(),
  env: process.env.NODE_ENV || 'development',
};
