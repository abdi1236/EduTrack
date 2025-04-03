const Attendance = require("../models/Attendance");

exports.markAttendance = async (req, res) => {
  try {
    const { studentId, status } = req.body;
    const attendance = await Attendance.create({ studentId, status });
    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ message: "Error marking attendance", error });
  }
};
