import { MdLocationOn } from "react-icons/md";

function Header() {
  return (
    <div className="header">
      <div className="headerSearch">
        <div className="headerSearchItem">
          <MdLocationOn className="headerIcon" />
          <input
            type="text"
            placeholder="where to go?"
            className="headerSearchInput"
            name="destination"
            
          />
        </div>
        <div className="headerSearchItem"></div>
        <div className="headerSearchItem"></div>
        <div className="headerSearchItem"></div>
      </div>
    </div>
  );
}

export default Header;
