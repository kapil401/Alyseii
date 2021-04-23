import { Fragment } from "react";
import React from "react"

export function Footer(params) {
  return (
    <Fragment>
      <div className="site__footer">
        <div className="site__width">
          <div className="site-align">
            <div className="footer-nav">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </ul>
            </div>
            <div className="footer-social--nav">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-square" /> Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" /> Instagram
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube-square" /> Youtube
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin" /> Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer