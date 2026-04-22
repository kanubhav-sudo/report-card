function Summary({ students }) {
  const total = students.reduce((sum, s) => sum + s.marks, 0);
  const avg = students.length ? (total / students.length).toFixed(0) : 0;

  const pass = students.filter((s) => s.marks >= 40).length;
  const fail = students.length - pass;

  return (
    <div className="grid">
      <Card title="TOTAL" value={students.length} />
      <Card title="AVG SCORE" value={avg} />
      <Card title="PASSED" value={pass} color="green" />
      <Card title="FAILED" value={fail} color="red" />
    </div>
  );
}

function Card({ title, value, color = "cyan" }) {
  return (
    <div className="card">
      <p className="title">
        {title}
      </p>
      <h2 className={`value ${color}`}>
        {value}
      </h2>
    </div>
  );
}

export default Summary;
