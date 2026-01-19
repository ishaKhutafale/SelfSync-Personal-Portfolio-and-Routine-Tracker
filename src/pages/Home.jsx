import profilePic from "../assets/profile.png";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="content">
        {/* LEFT PROFILE */}
        <div className="profile-wrapper">
          <div className="profile-card">
            <img src={profilePic} alt="Profile" className="profile-img" />
            <h2 className="name">Isha Khutafale</h2>
            <p className="role">
              

              
              ....
            </p>
            <p className="role">
              21, Aspiring programmer and developer, always seeking new
              challenges to grow. Passionate about sharing knowledge and
              creations with others.
            </p>
          </div>

          <button className="contact-btn">Get In Touch →</button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="intro-content">
          <h2 className="intro-title">
            Let’s Get Your Life in Sync <span>with SelfSync</span>
          </h2>

          <p className="intro-text">
            SelfSync is your all-in-one personal workspace to organize tasks,
            build strong habits, and present your professional journey
            beautifully in one place.
          </p>

          <div className="feature-cards">
            <div className="feature-card card-green">
              <h3>Task Planner</h3>
              <p>
                Organize daily tasks, set priorities, and stay focused with a
                clean and simple task management system.
              </p>
            </div>

            <div className="feature-card card-orange">
              <h3>Habit Tracker</h3>
              <p>
                Track habits consistently, build discipline, and visualize your
                growth over time.
              </p>
            </div>

            <div className="feature-card card-blue">
              <h3>Portfolio Showcase</h3>
              <p>
                Showcase your projects, skills, and achievements through a
                professional personal portfolio.
              </p>
            </div>
          </div>

          <div className="details-section">
            <h2 className="details-title">
              What SelfSync <span>Helps You Achieve</span>
            </h2>

            <p className="details-text">
              SelfSync is built to simplify your daily life by helping you stay
              organized, consistent, and intentional.
            </p>

            <div className="details-tags">
              <span>Task Management</span>
              <span>Habit Building</span>
              <span>Daily Planning</span>
              <span>Productivity Tracking</span>
              <span>Personal Portfolio</span>
              <span>Goal Clarity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
