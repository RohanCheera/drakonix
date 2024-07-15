import React from 'react';
import CTA from '../../components/CTA/CTA';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './work.css';
import { IoPricetagsOutline } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { MdRealEstateAgent } from "react-icons/md";

function Work() {
  const pricewise = <IoPricetagsOutline style={getStyle("btn-back-red")} />;
  const summiz = <MdLocalGroceryStore style={getStyle("btn-back-yellow")} />;
  const threads = <BsFillThreadsFill style={getStyle("btn-back-green")} />;
  const car = <FaCar style={getStyle("btn-back-blue")} />;
  const snapgram = <TiSocialInstagramCircular style={getStyle("btn-back-pink")} />;
  const estate = <MdRealEstateAgent style={getStyle("btn-back-black")} />;

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

  const projects = [
    {
      iconUrl: pricewise,
      theme: "btn-back-red",
      name: "Nike Store",
      description:
        "Developed a web application that shows stylish nike brand shoes, helping users find the best deals.",
        link: "https://github.com/RohanCheera/Car-Rental-System",
    },
    {
      iconUrl: threads,
      theme: "btn-back-green",
      name: "Full Stack Admin Dashboard",
      description:
        "Created a full-stack admin dashboard where admin can view the weekly, monthly and yearly sales and product distribution. Also can view all kind of transaction history.",
        link: "https://github.com/RohanCheera/Car-Rental-System",
    },
    {
      iconUrl: car,
      theme: "btn-back-blue",
      name: "Travel And Tour Website",
      description:
        "A console-based Car Rental System in C++ using OOP principles, managing car inventory, customer reservations, and rental transactions efficiently.",
      link: "https://github.com/RohanCheera/Car-Rental-System",
    },
    {
      iconUrl: snapgram,
      theme: "btn-back-pink",
      name: "Full Stack Flowmazon App",
      description:
        "Built a complete Flowmazon ecommerce web app where user can sign up and order their favourite products. User can add items in cart and see the total price",
        link: "https://github.com/RohanCheera/Car-Rental-System",
    },
    {
      iconUrl: estate,
      theme: "btn-back-black",
      name: "Social App",
      description:
        "Developed a web application for social media user. User can read write or post their beautiful moment.",
        link: "https://github.com/RohanCheera/Car-Rental-System",
    },
    {
      iconUrl: summiz,
      theme: "btn-back-yellow",
      name: "Grocery Store",
      description:
        "A beautiful website where user can find out best deals for their daily basis grocery products and can read articles or blogs.",
        link: "https://github.com/RohanCheera/Car-Rental-System",
    },
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

