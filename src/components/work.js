import { useState } from "react";
import "./work.css";

export default function Work() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section className="work">
      <h2 className="work-title">My Corner</h2>

      {/* Tabs Navigation */}
      <div className="tab-buttons">
        <button
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
        <button
          className={activeTab === "blog" ? "active" : ""}
          onClick={() => setActiveTab("blog")}
        >
          Blog
        </button>
      </div>

      {/* Tabs Content */}
      <div className="tab-content">
        {activeTab === "projects" && (
          <div className="projects">
            <h3> My Projects</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/bradleylena/ANPR-system-"
                  target="blank"
                >
                  Automatic Number Plate Recognition System
                </a>
              </li>
              <p>
                The Automatic Number Plate Recognition (ANPR) system uses
                computer vision (OpenCV) and Optical Character Recognition
                (Tesseract OCR) to detect and read vehicle license plates,
                making it useful for security, parking, and traffic management
                applications.
              </p>
              <li>
                <a href="#">Smart-Nyumba Property Management Software</a>
                <p>
                  Smart Nyumba is a Property Management System (PMS) built with
                  the MERN stack (MongoDB, Express, React, Node.js) that
                  simplifies managing tenants, properties, payments, and
                  caretakers through a modern, user-friendly dashboard.
                </p>
              </li>
              <li>
                <a
                  href="https://github.com/bradleylena/Real-time-Detector"
                  target="blank"
                >
                  Neuro-Vision
                </a>
                <p>
                  This project is a real-time object detection system built in
                  Python using OpenCV and YOLOv8. It captures live video from a
                  webcam, processes each frame, and identifies objects such as
                  people, cars, or everyday items with bounding boxes and
                  labels. By leveraging deep learning for accuracy and OpenCV
                  for video streaming, the system runs efficiently in real time,
                  making it useful for applications like surveillance, traffic
                  monitoring, and smart automation.
                </p>
              </li>
              <li>
                <a href="https://github.com/bradleylena/FinTech" target="blank">
                  Kwanza-Pay
                </a>
                <p>
                  A modern Financial-Technology(Fin-Tech) web app built with the
                  MERN stack (MongoDB, Express.js, React, Node.js) that enables
                  users to manage payments, track expenses, and view
                  transactions securely in real time. It combines a clean React
                  frontend with a scalable Node/Express backend and MongoDB for
                  secure financial data storage.
                </p>
              </li>
              <li>
                <a href="https://bradleylena.github.io/bradify/" target="blank">
                  Bradify
                </a>
                <p>
                  Bradify is a music streaming app built with the MERN stack and
                  powered by the Deezer API. It allows users to search for
                  artists, albums, and tracks, explore curated playlists, and
                  enjoy a smooth, Spotify-like experience. With a clean React
                  interface, Node.js backend, and MongoDB for storing user
                  preferences, Bradify delivers personalized music discovery in
                  real time.
                </p>
              </li>
            </ul>
          </div>
        )}

        {activeTab === "blog" && (
          <div className="blog">
            <h3>The Brad-Blog</h3>
            <article>
              <h4>I Think alot</h4>
              <p>naturally</p>
            </article>
            <article>
              <h4>I like being alone with my thoughts</h4>
              <p>silence is my best buddy</p>
            </article>
          </div>
        )}
      </div>
    </section>
  );
}
