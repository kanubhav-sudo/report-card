import { useState } from "react";
import Header from "./report-card/Header";
import AddStudentForm from "./report-card/AddStudentForm";
import StudentTable from "./report-card/StudentTable";
import Summary from "./report-card/Summary";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Anubhav", marks: 85 },
    { id: 2, name: "Rahul", marks: 32 },
    { id: 3, name: "Priya", marks: 67 },
  ]);

  const addStudent = (name, marks) => {
    const newStudent = {
      id: Date.now(),
      name,
      marks: Number(marks),
    };
    setStudents([...students, newStudent]);
  };

  const updateMarks = (id, newMarks) => {
    const updated = students.map((s) =>
      s.id === id ? { ...s, marks: Number(newMarks) } : s
    );
    setStudents(updated);
  };

  return (
      <div className="container">
        <Header />
        <AddStudentForm addStudent={addStudent} />
        <Summary students={students} />
        <StudentTable students={students} updateMarks={updateMarks} />
      </div>
  );
}

export default App;
