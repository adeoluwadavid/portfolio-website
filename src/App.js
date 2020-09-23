import React from 'react';

import './App.css';
import logo from './images/Logo.png'
function App() {

  const handleClick = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li');

    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.7}s`;
        console.log(index / 7);
      }

    });

    // Burger Animation
    burger.classList.toggle('toggle');
  }
  return (
    <div>
      <section className="background">
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Download Resume</a>
            </li>
            <li>
              <a href="#">Hire Me!</a>
            </li>

          </ul>
          <div onClick={handleClick} className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
        <div className="first-content">
          <h2>Hi, I am David O. Adewole</h2>
          <h3>A Web Developer</h3>
          <button className="button1">My Works</button>
        </div>
      </section>
      <section className="skills container">
        <div>
          <h3>PROFILE</h3>
          <h4>About Me</h4>
          <img className="profile-image" src={logo} alt="adewole"/>
          <h4>Who am I</h4>
          <p>I am a full stack developer in Ibadan, Nigeria.</p>
          <p>I can create dynamic user interface and experience</p>
          <p>I sync my front end with back end technologies to build full stack web applications</p>
        </div>
      </section>
      <section className="center-skill">
          <h3>SKILLS</h3>
          <div className="center-skill2">
            <div>
              <h4>Tech Skills</h4>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>MySql</li>
                <li>ReactJs</li>
                <li>Spring Boot</li>
                <li>Figma</li>
              </ul>
            </div>
            <div>
              <h4>Soft Skills</h4>
              <ul>
                <li>Good Communicator</li>
                <li>Understanding of Fundamental Concepts</li>
                <li>Team Oriented</li>
                <li>Solution Driven</li>
                <li>Adaptable to new challenges</li>
              </ul>
            </div>
          </div>
          
      </section>
      <section className="detail">
        <h4>Let's Connect</h4>
        <form className="form">
          <input className="form-children" type="text" placeholder="Fullname" />
          <input className="form-children" type="number" placeholder="Phone Number" />
          <input className="form-children" type="email" placeholder="Email Address" />
          <textarea rows="10" className="form-children" placeholder="Comment/Offers...."></textarea>
          <button className="form-children submit">Submit</button>
        </form>
      </section>
      <footer className="footer">
        <p>Find me</p>
        <p>David O. Adewole</p>
      </footer>
    </div>
  );
}

export default App;
