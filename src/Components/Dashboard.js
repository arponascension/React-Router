import { Outlet } from "react-router-dom";
import { NavLink } from "../App";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
        quibusdam natus assumenda?
      </p>
      <ul className="nav nav-pills">
        <li className="nav-item">
            <NavLink className="nav-link" to="" activeClassName="active" exact={true}>
                Overview
            </NavLink>
        </li>
        <li className="nav-pills">
            <NavLink className="nav-link" to="new-users" activeClassName="active">
                New Users
            </NavLink>
        </li>
          <li className="nav-pills">
              <NavLink className="nav-link" to="sales" activeClassName="active">
                  Sales
              </NavLink>
          </li>
      </ul>
      <Outlet />
    </div>
  );
}
export default Dashboard;
