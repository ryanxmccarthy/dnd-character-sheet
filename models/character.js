var characterObj = (sequelize, DataTypes) => {
  const Character = sequelize.define('Character', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 60]
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 45]
    },
    xp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 20
      }
    },
    alignment: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 25]
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 45]
    },
    armorClass: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1, 45]
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dex: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    constitution: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    intelligence: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wisdom: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    charisma: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    physical: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    personality: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    background: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    story: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })
  return Character
}

module.exports = characterObj;