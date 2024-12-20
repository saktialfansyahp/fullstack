// src/pages/Admin.tsx
import React, { useEffect, useState } from "react";
// import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Home from "./home";
import Navbar from "../components/navbar";
import About from "./about";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

const Admin: React.FC = () => {
    const [isVisible, setVisible] = useState(true);
    const [isExpanded, setIsExpanded] = useState(true);
    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsExpanded(false); // Collapse pada ukuran layar kecil
        } else {
            setIsExpanded(true); // Expand pada ukuran layar besar
        }
    };

    useEffect(() => {
        handleResize(); // Set initial state based on window size
        window.addEventListener("resize", handleResize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <div className="flex min-h-screen">
                {/* <Sidebar
                    isExpanded={isExpanded}
                    toggleSidebar={toggleSidebar}
                /> */}
                <Sidebar
                    visible={isVisible}
                    onHide={() => setVisible(false)}
                ></Sidebar>
                <div
                    className={`flex-grow ${
                        isExpanded ? "ml-64" : "ml-16"
                    } transition-all duration-300`}
                >
                    {/* <Header isAuthenticated={true} onLogout={() => {}} /> */}
                    <Navbar />
                    <div className="mx-6">
                        <Button onClick={() => setVisible(true)}>
                            Sidebar
                        </Button>
                        <About />
                    </div>
                    {/* <Home /> */}
                </div>
            </div>
        </>
    );
};

export default Admin;
