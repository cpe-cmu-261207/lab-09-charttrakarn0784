import React from "react";
import Navbar from "../components/Navbar";

export default function experience() {
  return (
    <div className="h-flex m-3 bg-white rounded-1">
      {/* <!-- Navbar --> */}
      <Navbar />
      {/* <!-- Content --> */}
      <div className="h-flex">
        <span className="d-flex w-100 justify-content-center gap-5 m-3">
          <h3>Project Experience</h3>
        </span>
        {/* <!-- Container --> */}
        <div className="d-flex m-2">
          <div className="flex-shrink-0">
            <img src="thai-chess.webp" width="150px" height="150px" />
          </div>
          <div className="flex-grow-1 ms-3">
            <h5>Project Chess</h5>
            <p>
              A freshman project that is a Thai chess game that write in C++ and
              the game run in command prompt. I write system and the gameplay.
              It's a pretty fun experience.
              <a
                style={{ textDecoration: "underline", color: "blue" }}
                href="https://github.com/charttrakarn0784/project-c-"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
        {/* <!-- Container --> */}
        <div className="d-flex m-2">
          <div className="flex-shrink-0">
            <img src="rpg.webp" width="150px" height="150px" />
          </div>
          <div className="flex-grow-1 ms-3">
            <h5>Project RPG</h5>
            <p>
              RPG game that use libGDX framework write in Java language. It's
              sophomore project that not fully finish and pretty far for the
              development plan goal. I'm the project manager.
            </p>
          </div>
        </div>
        {/* <!-- Container --> */}
        <div className="d-flex m-2">
          <div className="flex-shrink-0">
            <img src="finder.png" width="150px" height="150px" />
          </div>
          <div className="flex-grow-1 ms-3">
            <h5>FINDER</h5>
            <p>
              An application that base on TINDER but for CPE student only. App
              focus on making friend rather than find dating person. It's Junior
              project and I write back-end specifically I write about register
              form and set up firebase App to sync app and database.
            </p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
