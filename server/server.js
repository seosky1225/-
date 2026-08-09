const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

const applications = [];

app.use(
  cors({
    origin: "https://sisteam.vercel.app",
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("시스팀 서버가 정상적으로 실행되었습니다.");
});

app.get("/api/applications", (req, res) => {
  res.json(applications);
});

app.post("/api/apply", (req, res) => {
  console.log("지원서가 도착했습니다.");
  console.log(req.body);

  applications.push(req.body);

  res.json({
    message: "지원서가 정상적으로 접수되었습니다.",
  });
});

app.delete("/api/applications/:index", (req, res) => {
  console.log("삭제 요청이 도착했습니다.");
  console.log("삭제할 index:", req.params.index);

  const index = Number(req.params.index);

  if (
    Number.isNaN(index) ||
    index < 0 ||
    index >= applications.length
  ) {
    return res.status(404).json({
      message: "지원서를 찾을 수 없습니다.",
    });
  }

  applications.splice(index, 1);

  console.log(`지원서 ${index + 1}번이 삭제되었습니다.`);

  res.json({
    message: "지원서가 삭제되었습니다.",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});