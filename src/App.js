import {
  Link,
  matchRoutes,
  useLocation,
  useResolvedPath,
  useRoutes,
} from "react-router-dom";
import Page from "./Components/Page";
import Dashboard from "./Components/Dashboard";
import AllUsers from "./Components/AllUsers";
import Team from "./Components/Team";

export function NavLink({ to, exact, className, activeClassName, ...rest }) {
  let location = useLocation();
  let routeMatch = matchRoutes(routes, location);
  let resolvedLocation = useResolvedPath(to);
  let isActive;
  if (exact) {
    isActive = location.pathname === resolvedLocation.pathname;
  } else {
    isActive = routeMatch.some(
      (match) => match.pathname === resolvedLocation.pathname
    );
  }
  if(!activeClassName) activeClassName='';
  let allClassName =
    (className ? `${className} ` : "") + (isActive ? `${activeClassName}` : "");

  return <Link className={allClassName} to={to} {...rest} />;
}
//Routing
const routes = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { path: "", element: <h4>Overview</h4> },
      {
        path: "new-users",
        element: <AllUsers />,
      },
      { path: "sales", element: <h4>Sales</h4> },
    ],
  },
  { path: "/team", element: <Team/>, children: [
      {path: "", element: <div><h1>Our Team</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis facere qui ratione sint?</p></div>},
      {path: "partners", element: <div><h1>Our Partners</h1> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam illo rem voluptatibus!</p></div>}
    ] },
  { path: "/projects", element: <Page title="Projects" /> },
  { path: "/*", element: <Page title="404 not Found" /> },
];
//Main Page
function App() {
  let element = useRoutes(routes);
  return (
      <>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Project By Arpon</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/team" className="nav-link" activeClassName="active">Team</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/projects" className="nav-link" activeClassName="active">Project</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          {element}
        </div>
      </>
  );
}
export default App;
