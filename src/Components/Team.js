import {NavLink} from "../App";
import { Outlet } from "react-router-dom";


export  default function Team() {
    return (
        <>
            <h1>Team</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                quibusdam natus assumenda?
            </p>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <NavLink className="nav-link" to="" activeClassName="active" exact={true}>
                        Our Teams
                    </NavLink>
                </li>
                <li className="nav-pills">
                    <NavLink className="nav-link" to="partners" activeClassName="active">
                        Partners
                    </NavLink>
                </li>

            </ul>
            <Outlet/>
        </>
    );
}
