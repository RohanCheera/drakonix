import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./timeline.css";
import { FaUniversity } from "react-icons/fa";
import { LiaSchoolSolid } from "react-icons/lia";
import { GiAchievement } from "react-icons/gi";

function Timeline() {
  return (
    <div className="main-timeline">
      <h1 className="timeline-title">Education & Certifications</h1>
      <div className="timeline">
        <div className="timeline-content left-content">
          {/* <img src='../../assets/scl.png' alt='school'/> */}
          <div className="img">
            <FaUniversity />
          </div>
          <div className="text-box">
            <h2>The Unwritten Chapters: Awaiting Future Achievements</h2>
            <small>Future</small>
            <p>
              <em>
                This timeline box eagerly awaits the unfolding of my upcoming
                milestones and achievements. Stay tuned for the remarkable
                chapters that will shape my educational journey.
              </em>
            </p>

            <span className="left-content-arrow"></span>
          </div>
        </div>
        <div className="timeline-content right-content">
          {/* <img src='../../assets/scl.png' alt='school'/> */}
          <div className="img">
            <GiAchievement />
          </div>
          <div className="text-box">
            <h2>Innovative Strides: Navigating the Graduation Landscape</h2>
            <small>2021 - Present</small>
            
              <ul>
                <li>
                  <p>Active participation in various hackathons, showcasing
                  problem-solving skills and collaborative spirit.</p>
                </li>
                <li>
                  <p>Dedicated learning journey, completing courses on NPTEL,
                  Coursera, Udemy, and Jobaaj to broaden skillsets.</p>
                </li>
                <li>
                  <p>
                  Proficiency in programming languages including Python and C++,
                  demonstrated through consistent contributions on platforms
                  like LeetCode, Kaggle, and GitHub.
                  </p>
                </li>
              </ul>
            

            <span className="right-content-arrow"></span>
          </div>
        </div>
        <div className="timeline-content left-content">
          {/* <img src='../../assets/scl.png' alt='school'/> */}
          <div className="img">
            <LiaSchoolSolid />
          </div>
          <div className="text-box">
            <h2>Chaitanya Bharathi Institute of Technology, Hyderabad</h2>
            <small>2021-2025 (Ongoing)</small>
            <p>
              Bachelor's Degree in Artificial Intelligence and Data Science{" "}
              <br />
              Enrolled in the Bachelor's program at Chaitanya Bharathi Institute
              of Technology, specializing in Artificial Intelligence and Data
              Science. Passionate about the course and looking forward to
              completing the program in 2024.
            </p>
            <span className="left-content-arrow"></span>
          </div>
        </div>
        <div className="timeline-content right-content">
          {/* <img src='../../assets/scl.png' alt='school'/> */}
          <div className="img">
            <GiAchievement />
          </div>
          <div className="text-box">
            <h2>Epic Odyssey: Navigating Quantum Realms during Intermediate</h2>
            <small>2020 - 2021</small>
            
              <ul>
                <li>
                <p>
                  Embarked on a challenging journey to crack IIT entrance exams,
                  showcasing determination with a commendable 96%.
                 </p>
                </li>
                <li>
                <p>
                  Achieved the remarkable 5000th rank in the TSEAMCET
                  examination, leading to a stellar seat at CBIT.
                 </p>
                </li>
                <li>
                <p>
                  Persistently pursued excellence, though the IIT seat remained
                  elusive.
                  </p>
                </li>
              </ul>
            

            <span className="right-content-arrow"></span>
          </div>
        </div>
        <div className="timeline-content left-content">
          {/* <img src='../../assets/scl.png' alt='school'/> */}
          <div className="img">
            <LiaSchoolSolid />
          </div>
          <div className="text-box">
            <h2>Sri Gayatri Junior College</h2>
            <small>2018-2020</small>
            <p>
              Intermediate Education
              <br /> Pursued Intermediate education at Sri Gayatri Junior
              College, specializing in the Maths, Physics, and Chemistry group.
              Achieved an outstanding result with a score of 962/1000.
            </p>
            <span className="left-content-arrow"></span>
          </div>
        </div>
        <div className="timeline-content right-content">
          {/* <img src='../../assets/scl.png' alt='school'/> */}
          <div className="img">
            <GiAchievement />
          </div>
          <div className="text-box">
            <h2>Quantum Achievements at School</h2>
            <small>During Schooling</small>
            
              <ul>
                <li>
                <p>
                  Engaged in various extracurricular activities with enthusiasm.
                  </p>
                </li>
                <li>
                <p>
                  Contributed to science fairs and showcased projects with
                  creativity.
                  </p>
                </li>
              </ul>
            

            <span className="right-content-arrow"></span>
          </div>
        </div>
        <div className="timeline-content left-content">
          {/* <img src='../../assets/scl.png' alt='school'/> */}
          <div className="img">
            <LiaSchoolSolid />
          </div>
          <div className="text-box">
            <h2>Siddhartha Model High School</h2>
            <small>2010-2018</small>
            <p>
              High School Education <br />
              Completed my 10th class in Siddhartha Model High School with a
              stellar performance, securing a remarkable GPA of 9/10.
            </p>
            <span className="left-content-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
