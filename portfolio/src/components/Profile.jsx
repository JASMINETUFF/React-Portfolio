import React from "react";
import Typical from "react-typical";
import './Profile.css';


function Home() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          
          <div className="col">
              <div className="col-icon">
            <a href="https://www.facebook.com/profile.php?id=100078021911234">
              <i className="fa fa-facebook-square"> </i>
            </a>
            <a href="https://github.com/JASMINETUFF">
              <i className="fa fa-github-square"> </i>
            </a>
            <a href="https://www.instagram.com/jasminetuff/?hl=en">
              <i className="fa fa-instagram"> </i>
            </a>
            <a href="https://www.youtube.com/channel/UCANDKElXQHx_ftKpeiCtAAw">
              <i className="fa fa-youtube-square"> </i>
            </a>
            <a href="https://twitter.com/jr_devvs">
              <i className="fa fa-twitter-square"> </i>
            </a>
              </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              J.R. <span className="highlighted-text"> DEVS</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Creative 😎",
                    500,
                    "Driven 😍",
                    500,
                    "Self Starter😜",
                    500,
                    "Team Player 😜",
                    500,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">Let's build something amazing together 🤝</span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="JSMR.pdf"><button className="btn highlighted-btn"  title="resumer" download> Get Resume </button></a>
          </div>
        </div>
        <div class="profile-picture">
          <div class="profile-picture-background">
            </div>
            </div>
        </div>
      </div>
  );
}

export default Home;
