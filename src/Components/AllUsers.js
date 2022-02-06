import {useSearchParams} from "react-router-dom";
import {NavLink} from "../App";

function AllUsers() {
    const[serachParams] = useSearchParams();
    return (
        <>
            <h1>All Users</h1>
            <div className="row">
                <div className="col-sm-6">
                    <ul className="list-group">
                        {[...Array(20).keys()].map((index) => (
                            <span key={index}>
                                <NavLink className={`list-group-item `+(serachParams.get('id') == index ? `active` : ``)} to={`?id=${index}`}>
                                    User {index}
                                </NavLink>
                            </span>
                        ))}
                    </ul>
                </div>
                <div className="col-sm-6">
                    {serachParams.get('id') &&
                        <>
                            <h4> User {serachParams.get('id')} Details </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et facere, ipsa pariatur praesentium sed voluptates. Eveniet nostrum numquam similique voluptatem.</p>
                        </>
                    }
                </div>
            </div>
        </>
    );
}
export default AllUsers;