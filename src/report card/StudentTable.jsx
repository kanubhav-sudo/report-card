import StudentRow from "./StudentRow";

function StudentTable({ students, updateMarks }) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              updateMarks={updateMarks}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
