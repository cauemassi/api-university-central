module.exports = {
  development: {
    username: 'admin',
    password: 'password',
    database: 'university_central_database_development',
    host: 'localhost',
    dialect: 'postgres'
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres'
  },
  production: {
    username: 'root',
    password: null,
    database: 'university_central_database',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
};
