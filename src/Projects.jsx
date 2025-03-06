import React from "react";
import "../src/styles/projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <a href="https://github.com/Satyam6201/Weather-App" target="_blank">Weather App</a> - Real-time weather updates using OpenWeather API.
        </li>
        <li>
          <a href="https://github.com/Satyam6201/2D-Brick-Breaker-Game" target="_blank">2D Brick Breaker Game</a> - A classic arcade game using Canvas API.
        </li>
        <li>
          <a href="https://github.com/Satyam6201/Tic-Tac-Toe-Game" target="_blank">Tic-Tac-Toe</a> - Interactive two-player game with real-time UI updates.
        </li>
        <li>
          <a href="https://github.com/Satyam6201/Whack-a-Mole" target="_blank">Whack-a-Mole</a> - Fun game using event listeners and dynamic DOM updates.
        </li>
        <li>
          <a href="https://github.com/Satyam6201/Calculator" target="_blank">Calculator</a> -  It allows users to perform both basic arithmetic and advanced mathematical operations.
        </li>
        <li>
          <a href="https://github.com/Satyam6201/Rest-Api" target="_blank">Quora Post</a> - A Quora-like Q&A platform built with REST API, JavaScript, CSS, EJS, Express.js, and Node.js for user-generated posts and discussions.
        </li>
        <li>
          <a href="https://github.com/Satyam6201/Simon-Says-Game" target="_blank">Simon-Says-Game</a> - A classic Simon Says memory game built using HTML, CSS, and JavaScript, where players repeat sequences to test their memory.
        </li>
      </ul>
    </section>
  );
}

export default Projects;
