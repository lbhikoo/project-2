import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    const linkStyles = {
        display: "inline-block",
        width: "200px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };

    return (
        <div className="navbar">
            <NavLink
                to="/header"
                exact
                style={linkStyles}
                activeStyle={{
                background: "darkblue", 
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/locations"
                exact
                style={linkStyles}
                activeStyle={{
                background: "darkblue",
                }}
            >
                Locations
            </NavLink>
            <NavLink
                to="/TripExperience"
                exact
                style={linkStyles}
                activeStyle={{
                background: "darkblue",
                }}
            >
                Ratings
            </NavLink>
            </div>
  );
}

export default NavBar