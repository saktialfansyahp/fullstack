import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Header from "./components/header";
import {
    BrowserRouter,
    Route,
    Routes,
    useLocation,
    useNavigate,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Signin from "./pages/signin";
import PrivateRoute from "./routes/private_route";
import axios from "axios";
import { API_URL } from "./lib/global";

const Layout: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    useEffect(() => {
        const verifyToken = async () => {
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
                        // navigate("/");
                    })
                    .catch((err) => {
                        localStorage.removeItem("token");
                        setIsAuthenticated(false);
                        // navigate("/login");
                    });
            }
        };
        verifyToken();
    }, [location]);

    const login = async () => {
        await axios
            .post(
                `${API_URL}/api/auth/login`,
                {
                    email: "alfan@gmail.com",
                    password: "alfan123",
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
                navigate("/");
            })
            .catch((err) => {
                return err;
            });
    };
    const logout = () => {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        navigate("/login");
    };

    return (
        <>
            {/* Conditionally render Header based on current route */}
            {/* {!noHeaderRoutes.includes(location.pathname) && <Header />} */}
            <PrivateRoute isAuthenticated={isAuthenticated}>
                <Header isAuthenticated={isAuthenticated} onLogout={logout} />
            </PrivateRoute>

            {/* Main content */}
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PrivateRoute isAuthenticated={isAuthenticated}>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="about"
                        element={
                            <PrivateRoute isAuthenticated={isAuthenticated}>
                                <About />
                            </PrivateRoute>
                        }
                    />
                    <Route path="login" element={<Signin onLogin={login} />} />
                    {/* Add more routes here */}
                </Routes>
            </div>
        </>
    );
};

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
};
// function App() {
//     return (
//         <div className="App">
//             <Header />
//             {/* <header className="App-header">
//                 <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
//                     <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
//                         Writes Upside-Down
//                     </h3>
//                     <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
//                         The Zero Gravity Pen can be used to write in any
//                         orientation, including upside-down. It even works in
//                         outer space.
//                     </p>
//                 </div>
//             </header> */}
//         </div>
//     );
// }

export default App;
