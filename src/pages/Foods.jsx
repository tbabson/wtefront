import Wrapper from "../assets/StyledPages/Foods";
import imageP from "../assets/Images/landing.webp";
import { RiSearchFill } from "react-icons/ri";
import { GiCookingPot } from "react-icons/gi";
import { GiShoppingBag } from "react-icons/gi";

const Foods = () => {
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

      <div className="how-to">
        <div className="how-to-icon">
          <RiSearchFill className="how-icons" />
          <h3>Search for meals</h3>
        </div>
        <div className="how-to-icon">
          <GiCookingPot className="how-icons" />
          <h3>Know how to cook it</h3>
        </div>
        <div className="how-to-icon">
          <GiShoppingBag className="how-icons" />
          <h3>Order the ingredients</h3>
        </div>
      </div>
    </Wrapper>
  );
};
export default Foods;
