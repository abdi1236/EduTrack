const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Student = require("./Student");

const Attendance = sequelize.define("Attendance", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  status: { type: DataTypes.ENUM("present", "absent", "late"), allowNull: false }
});

Attendance.belongsTo(Student, { foreignKey: "studentId" });

module.exports = Attendance;
