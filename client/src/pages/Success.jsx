import { Link } from "react-router-dom";
import "../App.css";

function Success() {
  return (
    <div className="success-container">
      <div className="success-card">

        <div className="success-check">✓</div>

        <h1>지원이 완료되었습니다!</h1>

        <p>
          시스팀 동아리에 지원해 주셔서 감사합니다.
          <br />
          지원서가 정상적으로 접수되었습니다.
          <br />
          합격 여부는 추후 안내드리겠습니다.
        </p>

        <Link
          to="/"
          className="success-button"
        >
          메인 페이지로 돌아가기
        </Link>

      </div>
    </div>
  );
}

export default Success;