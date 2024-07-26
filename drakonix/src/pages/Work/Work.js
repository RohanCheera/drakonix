import React from 'react';
import CTA from '../../components/CTA/CTA';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './work.css';
import { IoPricetagsOutline } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdHomeRepairService } from "react-icons/md";
import { MdOutlineSentimentSatisfied } from "react-icons/md";

function Work() {
  const pricewise = <IoPricetagsOutline style={getStyle("btn-back-red")} />;
  const caller = <BiSolidPhoneCall style={getStyle("btn-back-blue")} />;
  const car = <FaCar style={getStyle("btn-back-blue")} />;
  const snapgram = <MdHomeRepairService style={getStyle("btn-back-green")} />;
  const estate = <MdOutlineSentimentSatisfied style={getStyleRev("btn-back-pink")} />;
  const python =<FaPython style={getStyleRev("btn-back-yellow")}/>

  function getStyle(theme) {
    return {
      width: '50px',
      height: '50px',
      color: theme.includes('btn-back') ? 'white' : 'black', // Example dynamic color based on theme
      marginRight: '10px',
      backgroundColor: theme.split('-')[2], // Example dynamic background color based on theme
      borderRadius: '30%',
      padding: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    };
  }
  function getStyleRev(theme) {
    return {
      width: '50px',
      height: '50px',
      color: theme.split('-')[2], // Example dynamic color based on theme
      marginRight: '10px',
      backgroundColor: theme.includes('btn-back') ? 'black' : 'white', // Example dynamic background color based on theme
      borderRadius: '30%',
      padding: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    };
  }

  const projects = [
    {
      iconUrl: caller,
      theme: "btn-back-red",
      name: "Qcaller",
      description:
        "Engineered a MERN stack web portal with Twilio API integration, automating rent payment reminders through calls; ensured timely notifications and streamlined payment management, reducing late payments by 40% and saving 100+ hours monthly.",
        link: "https://github.com/RohanCheera/Qcaller",
    },
    {
      iconUrl: pricewise,
      theme: "btn-back-green",
      name: "CouponTrader",
      description:
        "Developed a MERN stack application incorporating Redux, allowing users to exchange unused coupons for virtual currency; supported transactions from GPay and Amazon, boosting platform activity by 50% and user retention by35%.",
      link: "https://github.com/RohanCheera/CouponTrader", 
    },
    {
      iconUrl: car,
      theme: "btn-back-blue",
      name: "Car Rental System",
      description:
        "Developed a comprehensive Car Rental System using Object-Oriented Programming (OOP) concepts in C++. The system includes features such as vehicle booking, customer management, and payment processing. Implemented encapsulation, inheritance, and polymorphism to ensure a modular and maintainable codebase. ",
      link: "https://github.com/RohanCheera/Car-Rental-System", 
    },
    {
      iconUrl: snapgram,
      theme: "btn-back-pink",
      name: "Employee Attrition Prediction",
      description:
        "Implemented a machine learning algorithm in Python to predict employee attrition with 85% accuracy, leading to a 20% improvement in retention strategies and saving $300,000 in rehiring expenses.",
        link: "https://github.com/RohanCheera/EmployeeAttrition",
    },
    {
      iconUrl: estate,
      theme: "btn-back-yellow",
      name: "Sentiment Analysis Projects",
      description: "A comprehensive repository of sentiment analysis projects demonstrating various techniques and applications in natural language processing.",
      link: "https://github.com/RohanCheera/Sentiment-Analysis"
  },  
    
    {
      iconUrl: python,
      theme: "btn-back-yellow",
      name: "Innovative Python Projects",
      description: "A collection of 10 innovative Python projects showcasing diverse applications from web development to data science.",
      link: "https://github.com/RohanCheera/Python-Projects"
  }
  ];

  return (
    <div className='projects-section'>
      <div className="projects-container">
        <h1 className="work-head-text">
          My Projects
        </h1>

        <p className="works-desc">
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so if
          you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further enhancements.
          Your collaboration is highly valued!
        </p>

        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <div className="project-card-inner">
              <div className={`project-card-back ${project.theme}`} />
              <div className="project-card-front">
                {project.iconUrl}
              </div>
            </div>

            <div className="project-card-content">
              <h4 className="project-card-title">
                {project.name}
              </h4>
              <p className="project-card-description">{project.description}</p>
              <div className="project-card-link">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Link
                </Link>
                <FaArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr />

      <CTA />
    </div>
  );
}

export default Work;

