import React from 'react';
import MarkAttendance from './components/MarkAttendance';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  const students = [
    { id: 1, name: 'Abhishek Rajpal' },
    { id: 2, name: 'Anish Gogna' },
    { id: 3, name: 'Rohan Kumar' },
    { id: 4, name: 'Rajya Vardhan' },
    { id: 5, name: 'Stavin' },
    { id: 6, name: 'Aman' },
    { id: 7, name: 'Ashu Sharma' },
    { id: 8, name: 'Ashish' },
    { id: 9, name: 'Chidvilas' },
    { id: 10, name: 'Tarun' },
    { id: 11, name: 'Rahul' },
    { id: 12, name: 'Anirudh' },
    { id: 13, name: 'Gokul' },
    { id: 14, name: 'Seshapriyan' },
    { id: 15, name: 'Manpreet' },
    { id: 16, name: 'Kunal' },
    { id: 17, name: 'Aryan' },
    { id: 18, name: 'Sidharth' },
    { id: 19, name: 'Gaurang' },
    { id: 20, name: 'Rishab' },
  ];

  const handleAttendanceSubmission = (classId, attendanceData) => {
    // Handle attendance submission logic here
    console.log(`Class ${classId} attendance submitted:`, attendanceData);
  };

  return (
    <div className="App">
      <h1>Attendance Monitoring System</h1>
      <MarkAttendance classId={1} students={students} onSubmitAttendance={handleAttendanceSubmission} />
      <StudentList students={students} />
    </div>
  );
}

export default App;
