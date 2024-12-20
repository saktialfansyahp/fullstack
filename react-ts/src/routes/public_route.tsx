import { Navigate } from "react-router-dom";

interface PublicRouteProps {
    children: React.ReactElement;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
    return children;
};

export default PublicRoute;
