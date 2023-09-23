import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>404! Not found</h2>
            <NavLink to={"/"}>Go Home</NavLink>
        </div>
    );
};

export default ErrorPage;