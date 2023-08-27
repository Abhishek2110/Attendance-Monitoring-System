// src/components/MarkAttendance.js
import React, { useState } from 'react';

const MarkAttendance = ({ classId, students, onSubmitAttendance }) => {
  const [attendance, setAttendance] = useState([]);

  const handleAttendanceChange = (studentId) => {
    const updatedAttendance = attendance.includes(studentId)
      ? attendance.filter(id => id !== studentId)
      : [...attendance, studentId];
    setAttendance(updatedAttendance);
  };

  const submitAttendance = () => {
    onSubmitAttendance(classId, attendance);
  };

  return (
    <div>
      <h2>Mark Attendance</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            <input
              type="checkbox"
              checked={attendance.includes(student.id)}
              onChange={() => handleAttendanceChange(student.id)}
            />
            {student.name}
          </li>
        ))}
      </ul>
      <button onClick={submitAttendance}>Submit Attendance</button>
    </div>
  );
};

export default MarkAttendance;

