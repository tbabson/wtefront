import Wrapper from "../assets/StyledPages/Foods";
import { RiSearchFill } from "react-icons/ri";
import { GiCookingPot } from "react-icons/gi";
import { GiShoppingBag } from "react-icons/gi";
import Greeting from "../utils/greeting";
import Menu from "../utils/menu";

const Foods = () => {
  return (
    <Wrapper>
      <div className="hero">
        <div className="hero-text">
          <h3>
            Savor the <span>Moment,</span> Share with <span>Joy,</span>
          </h3>

          <h1>
            cook with <span>Love!</span>
          </h1>
        </div>
      </div>

      <div className="how-to-container">
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
        <div className="divider"></div>
      </div>

      <div className="welcome-center">
        <div className="welcome-content">
          <h3>
            <Greeting />
          </h3>
          <h3>
            <Menu />
          </h3>
        </div>
      </div>
    </Wrapper>
  );
};
export default Foods;
