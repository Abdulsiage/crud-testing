module.exports = {
  HOST: "localhost",
  PORT: "3306",
  USER: "root",
  PASSWORD: "1hk20cs101",
  DB: "bezkoder_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
