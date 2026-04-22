import { useState } from "react";

function StudentRow({ student, updateMarks }) {
  const [editing, setEditing] = useState(false);
  const [tempMarks, setTempMarks] = useState(student.marks);

  const status = student.marks >= 40 ? "Pass" : "Fail";

  const handleSave = () => {
    updateMarks(student.id, tempMarks);
    setEditing(false);
  };

  return (
    <tr>
      <td>
        {student.name}
      </td>

      <td className="score">
        {student.marks}
      </td>

      <td className={`${status === "Pass" ? "green" : "red"}`}>
        {status}
      </td>

      <td>
        {editing ? (
          <div className="row-actions">
            <input
              type="number"
              value={tempMarks}
              onChange={(e) => setTempMarks(e.target.value)}
              className="input small"
            />

            <button
              onClick={handleSave}
              className="link-btn"
            >
              Save
            </button>
          </div>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="link-btn"
          >
            Edit
          </button>
        )}
      </td>
    </tr>
  );
}

export default StudentRow;
