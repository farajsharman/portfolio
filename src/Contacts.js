import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div id="contacts">
      <h1 className="title">CONTACT</h1>
      <ul className="contain">
        <li
          className="item telephone"
          onClick={() => window.open("tel:07706022514")}
        >
          {" "}
          <a href="tel:07706022514" alt="telephone">
            {" "}
          </a>
        </li>
        <li
          className="item email"
          onClick={() => window.open("mailto:farajsharman@yahoo.com.")}
        >
          <a href="mailto:farajsharman@yahoo.com">farajsharman@yahoo.com </a>
        </li>
        <li
          className="item github"
          onClick={() => window.open("https://github.com/farajsharman")}
        >
          {" "}
          <a href="https://github.com/farajsharman">
            "https://github.com/farajsharman"{" "}
          </a>
        </li>
        <li
          className="item linkedin"
          onClick={() =>
            window.open("https://www.linkedin.com/in/farajsharman/")
          }
        >
          {" "}
          <a href="https://www.linkedin.com/in/farajsharman/">
            "https://www.linkedin.com/in/farajsharman/"
          </a>
        </li>
      </ul>
    </div>
  );
}
