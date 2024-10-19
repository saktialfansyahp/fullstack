import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    isAuthenticated: boolean;
    children: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
    isAuthenticated,
    children,
}) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default PrivateRoute;
