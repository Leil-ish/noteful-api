module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    REACT_APP_API_TOKEN: process.env.REACT_APP_API_TOKEN || 'dummy-api-token',
    DB_URL: process.env.DATABASE_URL || 'postgresql://leilaanderson@localhost/noteful',
  }