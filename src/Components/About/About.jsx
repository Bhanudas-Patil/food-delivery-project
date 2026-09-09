// import React from "react";
import './About.css'
import img from '../../assets/Bhel.jpg'

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h1>About US </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            eius corporis quas, ipsa saepe neque natus accusamus reprehenderit
            debitis officia facilis adipisci molestiae quo repudiandae sequi
            delectus pariatur ea atque?

            lorem
          </p>
          <p>
            We specialixe in Ra=eact Developement , Ui design , and creating
            respponsive webstes that work with modern technologies
          </p>

          <button className="about-btn">Learn More  </button>
        </div>

        <div className="about-image">
          <img src={img} alt="about" />
      </div>

      </div>
    </section>
  );
};
export default About;
