const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");

const app = express();
const PORT = 5000;

const db = new Database("applications.db");

db.prepare(`
  CREATE TABLE IF NOT EXISTS applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    studentId TEXT,
    interest TEXT,
    languages TEXT,
    motivation TEXT,
    project TEXT
  )
`).run();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("시스팀 서버가 정상적으로 실행되었습니다.");
});


/* 지원자 목록 */
app.get("/api/applications", (req, res) => {
  const applications = db
    .prepare("SELECT * FROM applications ORDER BY id DESC")
    .all();

  res.json(applications);
});


/* 지원서 제출 */
app.post("/api/apply", (req, res) => {
  console.log("지원서가 도착했습니다.");
  console.log(req.body);

  const {
    name,
    studentId,
    interest,
    languages,
    motivation,
    project
  } = req.body;

  const result = db.prepare(`
    INSERT INTO applications
    (name, studentId, interest, languages, motivation, project)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(
    name,
    studentId,
    interest,
    languages,
    motivation,
    project
  );

  console.log(`지원서 저장 완료: ${result.lastInsertRowid}`);

  res.json({
    message: "지원서가 정상적으로 접수되었습니다."
  });
});


/* 지원서 삭제 */
app.delete("/api/applications/:id", (req, res) => {
  const id = Number(req.params.id);

  const result = db
    .prepare("DELETE FROM applications WHERE id = ?")
    .run(id);

  if (result.changes === 0) {
    return res.status(404).json({
      message: "지원서를 찾을 수 없습니다."
    });
  }

  console.log(`지원서 ID ${id}가 삭제되었습니다.`);

  res.json({
    message: "지원서가 삭제되었습니다."
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});