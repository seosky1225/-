import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  // 다른 페이지로 이동하기 위한 기능
  const navigate = useNavigate();

  return (
    <div>

      {/* 상단 메뉴 */}
      <nav className="navbar">

        <h2>시스팀</h2>

        <ul>
          <li>소개</li>
          <li>활동</li>

          {/* 지원하기를 누르면 /apply 페이지로 이동 */}
          <li onClick={() => navigate("/apply")}>
            지원하기
          </li>
        </ul>

      </nav>


      {/* 메인 화면 */}
      <section className="hero">

        <h1>
          미래를 만드는<br />
          개발자들의 공간
        </h1>

        <p>
          웹 개발, 앱 개발, 알고리즘 학습을 통해
          실제 프로젝트를 진행하는 컴퓨터공학 동아리
        </p>

        {/* 지원하기 버튼 */}
        <button
          className="black-btn"
          onClick={() => navigate("/apply")}
        >
          지원하기
        </button>

      </section>

    </div>
  );
}

export default Home;