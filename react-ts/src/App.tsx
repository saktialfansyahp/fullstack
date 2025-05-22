import React, { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react"
// import logo from "./logo.svg";
// import "./App.css";
import {
    BrowserRouter,
    Route,
    Routes,
    useLocation,
    useNavigate,
} from "react-router-dom";
import PrivateRoute from "./routes/private_route";
import axios from "axios";
import { API_URL } from "./lib/global";
import { ProgressSpinner } from "primereact/progressspinner";
import routes from "./routes/routes";

const Layout: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
    useEffect(() => {
        const verifyToken = async () => {
            setIsLoading(true);
            const token = localStorage.getItem("token");
            if (token) {
                await axios
                    .get(`${API_URL}/api/auth/verif`, {
                        headers: {
                            Authorization: token,
                        },
                    })
                    .then((response) => {
                        setIsAuthenticated(true);
                        if (location.pathname === "/login") {
                            navigate("/");
                        }
                    })
                    .catch((err) => {
                        localStorage.removeItem("token");
                        setIsLoading(false);
                        setIsAuthenticated(false);
                        // navigate("/login");
                    })
                    .finally(() => {
                        // console.log(location.pathname);

                        // navigate("/");
                        setIsLoading(false);
                    });
            } else {
                localStorage.removeItem("token");
                setIsLoading(false);
                setIsAuthenticated(false);
                // navigate("/login");
            }
        };
        verifyToken();
    }, [location.pathname, navigate]);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        await axios
            .post(
                `${API_URL}/api/auth/login`,
                {
                    email: email,
                    password: password,
                },
                {
                    headers: {
                        Accept: "*/*",
                    },
                }
            )
            .then((result) => {
                const token = result.data.token;
                localStorage.setItem("token", token);
                localStorage.setItem("isAuthenticated", "true");
                setIsAuthenticated(true);
                navigate("/home");
            })
            .catch((err) => {
                return err;
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    const logout = () => {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        navigate("/login");
    };

    // console.log(isLoading);

    return (
        <div className="bg-gray-100">
            {/* <Sidebar /> */}

            {/* Conditionally render Header based on current route */}
            {/* {!noHeaderRoutes.includes(location.pathname) && <Header />} */}
            {/* <PrivateRoute isAuthenticated={isAuthenticated}>
                <Header isAuthenticated={isAuthenticated} onLogout={logout} />
            </PrivateRoute> */}

            {/* Main content */}
            <div className="min-h-screen mx-auto">
                {isLoading ? (
                    <div className="flex justify-center items-center h-screen">
                        <ProgressSpinner />
                    </div>
                ) : (
                    <Routes>
                        {routes.map((route, index) => {
                            // Buat elemen komponen dengan props jika diperlukan
                            const Element = route.isPrivate ? (
                                <PrivateRoute
                                    logout={logout}
                                    isAuthenticated={isAuthenticated}
                                >
                                    <route.component onLogin={login} />
                                </PrivateRoute>
                            ) : (
                                <route.component onLogin={login} />
                            );

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={Element}
                                />
                            );
                        })}
                    </Routes>
                )}
		<SpeedInsights />
            </div>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
};
export default App;
