import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Admin from "./pages/Admin";
import Apply from "./pages/Apply";
import Success from "./pages/Success";

// ========================================
// 메인 홈페이지
// ========================================
function Home() {
  return (
    <div>

      {/* 상단 메뉴 */}
      <nav className="navbar">
        <h2 className="logo">시스팀</h2>

        <ul>
          <li>
            <a href="#about">소개</a>
          </li>

          <li>
            <a href="#activity">활동</a>
          </li>

          <li>
            <Link to="/apply">지원하기</Link>
          </li>
        </ul>
      </nav>

      {/* 메인 화면 */}
      <section className="hero">

        <span className="hero-tag">
          2026 오남고 유일 컴퓨터 동아리
        </span>

        <h1>
          CREATE.<br />
          BUILD.<br />
          CHANGE.
        </h1>

        <h3>
          오남고등학교 컴퓨터공학 동아리 시스팀
        </h3>

        <p>
          아이디어를 현실로 만들고<br />
          프로젝트를 통해 함께 성장하는 개발자들의 공간
        </p>

        <div className="hero-buttons">

          <Link
            to="/apply"
            className="black-btn"
          >
            지원하기
          </Link>

          <a
            href="#about"
            className="white-btn"
          >
            더 알아보기
          </a>

        </div>

      </section>

      {/* 동아리 소개 */}
      <section
        id="about"
        className="activity"
      >

        <h2>우리는 이런 활동을 합니다.</h2>

        <div className="activity-grid">

          <div className="activity-card">
            <h3>프로그래밍 언어</h3>

            <p>
              Python, C, C#, JavaScript,
              Unity 등 다양한 언어와 기술을
              활용하여 프로젝트를 진행합니다.
            </p>
          </div>

          <div className="activity-card">
            <h3>프로젝트 중심</h3>

            <p>
              웹 개발, 앱 개발, AI,
              게임 개발 등 다양한 분야의
              프로젝트를 직접 기획하고 제작합니다.
            </p>
          </div>

          <div className="activity-card">
            <h3>함께 성장</h3>

            <p>
              처음이어도 괜찮습니다.
              팀원들과 함께 배우며
              포트폴리오를 만들어갑니다.
            </p>
          </div>

        </div>

      </section>

      {/* 모집 안내 */}
      <section
        id="activity"
        className="recruit"
      >

        <h2>
          2026 하반기 신입 부원 모집
        </h2>

        <p>
          코딩 실력보다 배우려는 열정이 더 중요합니다.
          컴퓨터공학에 관심 있는 학생이라면 누구나 환영합니다.
        </p>

        <Link
          to="/apply"
          className="black-btn"
        >
          지원서 작성
        </Link>

      </section>

    </div>
  );
}

// ========================================
// 전체 앱
// ========================================
function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/apply"
        element={<Apply />}
      />

      <Route
        path="/success"
        element={<Success />}
      />
      
      <Route
       path="/admin"
       element={<Admin />}
      />

    </Routes>
  );
}

export default App;