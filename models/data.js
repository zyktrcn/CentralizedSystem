module.exports = (sequelize, DataTypes) => {

  const { STRING } = DataTypes

  return sequelize.define('data', {
    'request': STRING(100),
    'name': STRING(256),
    'content': STRING(1000),
    'date': STRING(100)
  })
  
}
