import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1>
        About <span>Me</span>
      </h1>
      <div className="about__wrapper">
        <div className="bio box-shadow">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, dolorum. Rerum iure quas similique minus omnis dolorum
            suscipit adipisci libero molestiae consequuntur a incidunt qui
            dignissimos accusantium ipsum eos ipsam, maxime eligendi? Ad quod
            voluptatem distinctio laborum laboriosam quos suscipit quis, veniam
            maxime, numquam vitae officiis soluta obcaecati nam minus?
          </p>
          <img src="./files/img/avatar.png" alt="user" className="box-shadow" />
        </div>
        <div className="education box-shadow">
          <h2>Education</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            consequuntur nihil nesciunt, dolorem voluptatum, veniam qui dicta
            nam eius voluptate, laudantium ullam fugit? Itaque animi iste
            voluptas ab sunt adipisci.
          </p>
        </div>
        <div className="interests box-shadow">
          <h2>Interests</h2>
          <ul>
            <li>Interest 1</li>
            <li>Interest 2</li>
            <li>Interest 3</li>
            <li>Interest 4</li>
            <li>Interest 5</li>
          </ul>
        </div>
        <div className="hobbies box-shadow">
          <h2>Hobbies</h2>
          <ul>
            <li>Hobby 1</li>
            <li>Hobby 2</li>
            <li>Hobby 3</li>
            <li>Hobby 4</li>
            <li>Hobby 5</li>
          </ul>
        </div>
        <div className="links box-shadow">
          <h2>Contact Me</h2>
          <div>
            <a href="!#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="!#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="!#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="!#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
