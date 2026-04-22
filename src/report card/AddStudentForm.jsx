import { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || marks === "") return;

    addStudent(name, marks);
    setName("");
    setMarks("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form"
    >
      <div className="form-head">
        <p className="form-title">
          REGISTER STUDENT
        </p>
        <span className="form-badge">NEW ENTRY</span>
      </div>

      <div className="form-row">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />

        <input
          type="number"
          placeholder="Score (0-100)"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          className="input small"
        />

        <button
          type="submit"
          className="btn"
        >
          + ADD
        </button>
      </div>
    </form>
  );
}

export default AddStudentForm;
