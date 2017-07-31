/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('messages', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    room_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'rooms',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    message: {
      type: DataTypes.STRING(1500),
      allowNull: true
    }
  }, {
    tableName: 'messages'
  });
};
