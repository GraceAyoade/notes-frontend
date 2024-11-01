import react from "react";
import "./MainArea.css";
import {
  FiCodesandbox,
  FiDatabase,
  FiFilter,
  FiHeart,
  FiNavigation2,
  FiShare,
  FiShare2,
  FiShuffle,
} from "react-icons/fi";

const MainArea = () => {
  return (
    <section className="main-area">
      <nav className="main-header">
        <h2 className="lexend-font">Good Morning</h2>
        <p className="poppins-extralight">Wednesday, 24th October, 2024</p>
      </nav>

      <div className="main-body">
        <div className="mainbody-header">
          <div className="mainbody-header1">
            <h3>
              <b>Notes</b>
            </h3>
            <h3>Favourites</h3>
          </div>

          <div className="mainbody-header2">
            <FiFilter className="icon-method outlined-icon" />
            <FiShuffle className="icon-method outlined-icon" />
          </div>
        </div>

        <div className="notes-box">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((note) => {
            return (
              <div className="notes-card">
                <div>
                  <div className="notes-title">
                    <h3>New Notes</h3>
                  </div>
                  <div className="notes">
                    <p>Notes are a way to document your thoughts</p>
                  </div>
                </div>
                <div className="notes-footer">
                  <div className="footer-pair-one">
                    <p className="info date-created"> 2 days ago</p>
                    <p className="info">
                      <FiDatabase className="db-icon" />
                      Categories
                    </p>
                  </div>

                  <div className="footer-pair-two">
                    <div className="footer-pair-two-smallbox">
                      <div className="likes">
                        <FiHeart size={24} className="notes-reaction-icon" />
                      </div>
                      <div className="share">
                        <FiShare2 size={24} className="notes-reaction-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MainArea;
