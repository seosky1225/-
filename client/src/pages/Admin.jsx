import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Admin() {
  const [applications, setApplications] = useState([]);

  const loadApplications = async () => {
    try {
      const response = await fetch(
        "https://sisteam-server.onrender.com"
      );

      if (!response.ok) {
        throw new Error("지원서 목록을 불러오지 못했습니다.");
      }

      const data = await response.json();

      setApplications(data);
    } catch (error) {
      console.error(error);
      alert("지원서 목록을 불러오지 못했습니다.");
    }
  };

  const deleteApplication = async (index) => {
    const confirmed = window.confirm(
      "정말 이 지원서를 삭제하시겠습니까?"
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(
        `https://sisteam-server.onrender.com${index}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("지원서 삭제에 실패했습니다.");
      }

      const data = await response.json();

      console.log(data.message);

      setApplications((currentApplications) =>
        currentApplications.filter((_, i) => i !== index)
      );

      alert("지원서가 삭제되었습니다.");
    } catch (error) {
      console.error(error);
      alert("지원서 삭제에 실패했습니다.");
    }
  };

  return (
    <div className="admin-page">

      <header className="admin-header">

        <div>
          <p className="admin-label">
            SISTEAM ADMIN
          </p>

          <h1>
            관리자 페이지
          </h1>

          <p>
            시스팀 홈페이지와 동아리 운영 정보를 관리합니다.
          </p>
        </div>

        <Link
          to="/"
          className="admin-home-button"
        >
          메인 페이지
        </Link>

      </header>


      <main className="admin-content">

        <section className="admin-section">

          <div className="admin-section-title">

            <div>
              <h2>
                지원자 관리
              </h2>

              <p>
                동아리 지원서를 확인하고 관리합니다.
              </p>
            </div>

          </div>


          <div className="admin-card">

            <div>
              <h3>
                지원자 목록
              </h3>

              <p>
                현재 접수된 지원서를 확인할 수 있습니다.
              </p>
            </div>

            <button
              className="admin-button"
              onClick={loadApplications}
            >
              지원자 목록 보기
            </button>

          </div>


          <div className="admin-card">

            <div>
              <h3>
                지원서 새로고침
              </h3>

              <p>
                새로 접수된 지원서를 불러옵니다.
              </p>
            </div>

            <button
              className="admin-button"
              onClick={loadApplications}
            >
              새로고침
            </button>

          </div>


          <div className="admin-applications">

            {applications.length === 0 ? (

              <p>
                현재 접수된 지원서가 없습니다.
              </p>

            ) : (

              applications.map((application, index) => (

                <div
                  className="admin-application-card"
                  key={index}
                >

                  <h3>
                    {application.name}
                  </h3>

                  <p>
                    학번: {application.studentId}
                  </p>

                  <p>
                    관심 분야: {application.interest}
                  </p>

                  <p>
                    사용 가능한 언어: {application.languages}
                  </p>

                  <p>
                    지원 동기: {application.motivation}
                  </p>

                  <p>
                    하고 싶은 프로젝트: {application.project}
                  </p>


                  <button
                    className="admin-delete-button"
                    onClick={() => deleteApplication(index)}
                  >
                    지원서 삭제
                  </button>

                </div>

              ))

            )}

          </div>

        </section>

      </main>

    </div>
  );
}

export default Admin;