import { Icon } from "../Icon";

import {
  FiFile,
  FiHome,
  FiPlay,
  FiPlusCircle,
  FiSettings,
  FiTag,
  FiTrash,
  FiUser,
} from "react-icons/fi";
import "./SideNav.css";

const SideNav = () => {
  return (
    <section className="side-nav">
      <div className="profile items-center">
        <img
          src="/fonts/icons/profile-image.JPG"
          alt="profile-image"
          className="profile-image"
        />
        <div className="flex flex-column">
          <p className="lexend-font">Ayoade</p>
          <p className="poppins-extralight">Moromoluwatiketike</p>
        </div>
      </div>

      <div className="nav-body">
        <div className="input-area">
          <div className="input">
            <input
              type="search-input"
              placeholder="Search Notes"
              className="search-input"
            />
            <Icon
              type="search"
              fill="rgba(00, 00, 00, 0.7)"
              className="search-icon"
            />
          </div>

          <button className="search-button flex items-center">
            <div className="play-icon-wrapper">
              <FiPlay color="#fff" className="outlined-icon" />
            </div>
            Find Anything
          </button>
        </div>

        <nav className="nav-links">
          <ul className="link-lists">
            <li>
              <div className="icon-style">
                <FiHome className="outlined-icon" />
                Home
              </div>
            </li>
            <li>
              <div className="icon-style">
                <FiFile className="outlined-icon" />
                Notes
              </div>
            </li>
            <li>
              <div className="icon-style">
                <FiTag className="outlined-icon" />
                Tag
              </div>
            </li>
            <li>
              <div className="icon-style">
                <FiUser className="outlined-icon" />
                User
              </div>
            </li>
            <li>
              <div className="icon-style">
                <FiSettings className="outlined-icon" /> Settings
              </div>
            </li>
            <li>
              <div className="icon-style">
                <FiTrash className="outlined-icon" />
                Thrash
              </div>
            </li>
          </ul>
        </nav>

        <div className="actions">
          <div className="group-action">
            <div className="group">
              {/* <div className="icon-style">
                <FiPlusCircle className="outlined-icon" /> <p>Add Group</p>
              </div> */}
            </div>

            <div className="footnote">
              <div className="icon-style">
                <FiSettings className="outlined-icon" /> Settings
              </div>
              <div className="icon-style">
                <FiTrash className="outlined-icon" />
                Thrash
              </div>
            </div>
              </div>
            
        </div> 
      </div>
    </section>
  );
}

export default SideNav;
