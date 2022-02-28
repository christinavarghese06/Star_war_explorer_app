import {
    Link,
    useLocation
  } from "react-router-dom";
  import {PEOPLE,MOVIES,PLANETS} from "../utils/constants"

export default function Menu() {
    const location = useLocation();

    const isCurrentLocation = (pattern: string) => {
        return location.pathname === pattern;
    }

    return (
        <div>
            <ul className="menu">
                <li className="menu__item">
                    <Link to="/characters" className={isCurrentLocation('/characters') ? "menu__link menu__link--active" : "menu__link"}>{PEOPLE}</Link>
                </li>
                <li className="menu__item">
                    <Link to="/movies" className={isCurrentLocation('/movies') ? "menu__link menu__link--active" : "menu__link"}>{MOVIES}</Link>
                </li>
                <li className="menu__item">
                    <Link to="/planets" className={isCurrentLocation('/planets') ? "menu__link menu__link--active" : "menu__link"}>{PLANETS}</Link>
                </li> 
            </ul>
        </div>
    )
}  