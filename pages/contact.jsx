import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";

export default function contact() {
  return (
    <div className="h-flex m-3 bg-white rounded-1">
      {/* <!-- Navbar --> */}
      <Navbar />

      {/* <!-- header --> */}
      <div className="d-inline-flex w-100 justify-content-center mx-auto gap-5 m-3">
        <h3>Contact Me</h3>
      </div>
      {/* <!-- Content --> */}
      <div className="d-flex mx-auto m-3" style={{ maxWidth: "600px" }}>
        <div className="d-flex m-2">
          <Image
            src="/portrait.jpg"
            alt="portrait.jpg"
            width="250px"
            height="250px"
            style={{ objectFit: "cover" }}
            className="rounded-circle"
          />
        </div>

        {/* <!-- Info --> */}
        <div>
          <p>
            <span>Name:</span> Charttrakarn Choosiri
          </p>
          <p>
            <span>Nickname:</span> Pun
          </p>
          <p>
            <span>Facebook:</span>
            <a
              href="https://www.facebook.com/charttrakarn.choosiri"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "underline", color: "blue" }}
            >
              https://www.facebook.com/charttrakarn.choosiri
            </a>
          </p>
          <p>
            <span>Email:</span>
            <a href="mailto:charttrakarn_ch@cmu.ac.th">
              <span
                style={{
                  width: "200px",
                  textDecoration: "underline",
                  color: "blue",
                }}
              >
                charttrakarn_ch@cmu.ac.th
              </span>
            </a>
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}
