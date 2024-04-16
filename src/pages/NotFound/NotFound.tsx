import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="scroll-to-top">
        <span className="scroll-icon">
          <i className="fa fa-rocket" aria-hidden="true"></i>
        </span>
      </div>

      <div className="full-wh">
        <div className="bg-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
      </div>
      <div className="page-wrapper">
        <div className="error-area">
          <div className="error-content text-center">
            <div className="error-num glitch" data-text="404">
              404
            </div>
            <h2>Page Not Found</h2>
            <Link to="/">Go back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
