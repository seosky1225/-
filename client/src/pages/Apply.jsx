import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";

function Apply() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [interest, setInterest] = useState("");
  const [languages, setLanguages] = useState("");
  const [motivation, setMotivation] = useState("");
  const [project, setProject] = useState("");
  const handleSubmit = async (e) => {
  e.preventDefault();

 const application = {
    name,
    studentId,
    interest,
    languages,
    motivation,
    project,
  };

  const response = await fetch("https://sisteam-server.onrender.com", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(application),
  });

  const data = await response.json();

  console.log(data);
  
  navigate("/success");
};

  return (
    <div className="apply-container">
      <div className="apply-card">

        <h1>시스팀 동아리 지원서</h1>

        <p className="apply-description">
          프로젝트를 함께 만들어 갈 새로운 부원을 모집합니다.
          <br />
          아래 내용을 작성한 후 제출해주세요.
        </p>

        <p className="required-notice">
          <span className="required">*</span> 표시된 항목은 필수입니다.
        </p>

        <form
          className="apply-form"
          onSubmit={handleSubmit}
        >

          {/* 이름 */}
          <div className="form-group">
            <label>
              이름 <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder="이름을 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* 학번 */}
          <div className="form-group">
            <label>
              학번 <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder="예) 31011"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />
          </div>

          {/* 관심 분야 */}
          <div className="form-group">
            <label>
              관심 분야 <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder="예) 웹 개발, AI, 앱 개발"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              required
            />
          </div>

          {/* 사용 가능한 언어 */}
          <div className="form-group">
            <label>
              사용 가능한 언어 <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder="예) Python, C, JavaScript"
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
              required
            />
          </div>

          {/* 지원 동기 */}
          <div className="form-group">
            <label>
              지원 동기 <span className="required">*</span>
            </label>
            <textarea
              rows="6"
              placeholder="지원 동기를 자유롭게 작성해주세요."
              value={motivation}
              onChange={(e) => setMotivation(e.target.value)}
              required
            />
          </div>

          {/* 하고 싶은 프로젝트 */}
          <div className="form-group">
            <label>
              하고 싶은 프로젝트 <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder="예) AI 웹사이트 제작"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              required
            />
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            className="submit-btn"
          >
            지원서 제출
          </button>

        </form>

      </div>
    </div>
  );
}

export default Apply;