import Wrapper from "../assets/StyledPages/Foods";
import { RiSearchFill } from "react-icons/ri";
import { GiCookingPot } from "react-icons/gi";
import { GiShoppingBag } from "react-icons/gi";

const Foods = () => {
  return (
    <Wrapper>
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
