module.exports = {
  development: {
    storage: 'db/dev.db',
    dialect: 'sqlite',
    seederStorage: 'sequelize',
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true
    // logging: false
  }
};
