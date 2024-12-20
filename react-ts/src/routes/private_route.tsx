import { Navigate } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

interface PrivateRouteProps {
    isAuthenticated: boolean;
    children: React.ReactElement;
    logout: () => void;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
    isAuthenticated,
    children,
    logout,
}) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    // return children;
    return (
        <>
            <Header isAuthenticated={isAuthenticated} onLogout={logout} />
            {children}
            {/* <div className="flex">
                <Sidebar />
                <div className="grow">
                    <div className="col">
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default PrivateRoute;
