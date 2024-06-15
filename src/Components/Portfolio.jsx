/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Projects_image.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "AlgoSmart",
    description:
      "A platform for students to learn Data Structures and Algorithms through interactive animations.",
    url: "https://github.com/Sachin63Kumar/AlgoSmart",
  },
  {
    title: "Prompt Sharing Platform",
    description:
      "A collaborative environment for discovering, creating, and sharing AI prompts.",
    url: "https://github.com/Sachin63Kumar/Prompt-Sharing-Platform",
  },
  {
    title: "To-Do List using MongoDB",
    description:
      "A web application that allows users to create, complete, and delete tasks with efficient data storage.",
    url: "https://github.com/Sachin63Kumar/To-DoList-using-MogoDB",
  },
  {
    title: "Newsletter Signup using MailChimp API",
    description:
      "A web application to collect user name and email for a newsletter using Mailchimp API.",
    url: "https://github.com/Sachin63Kumar/Newsletter-Signup-using-mailChimp-API",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "3rem",
          marginLeft: "1.5rem",
          marginRight: "1.5rem",
        }}
      >
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
