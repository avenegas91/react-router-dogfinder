import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ dogs }) => {
    const links = dogs.map((dog) => (
        <NavLink 
            to={`/dogs/${dog.name.toLowerCase()}`} 
            key={dog.name}
        >
            {dog.name}
        </NavLink>
    ));

    return (
        <nav>
            <NavLink to="/dogs" end>
                Home
            </NavLink>
            {links}
        </nav>    
    );
}

export default NavBar;