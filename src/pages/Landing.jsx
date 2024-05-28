import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/StyledPages/Landing";
import image from "../assets/Images/landing.jpg";
import imageP from "../assets/Images/landing.webp";
import Foods from "../pages/Foods";

const Landing = () => {
  return (
    <Wrapper>
      <div
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(227,119,43,0.3),rgba(0,0,0,0)), url(${imageP})`,
        }}
      >
        <div className="hero-text">
          <h3>
            Savor the <span>Moment,</span>
          </h3>
          <h3>
            Share with <span>Joy,</span>
          </h3>
          <h1>
            cook with <br /> <span>Love!</span>
          </h1>
        </div>
      </div>

      <Foods />
    </Wrapper>
  );
};
export default Landing;
