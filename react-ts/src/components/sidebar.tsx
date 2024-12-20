// src/components/Sidebar.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC<{ isExpanded: boolean; toggleSidebar: () => void }> = ({
    isExpanded,
    toggleSidebar,
}) => {
    return (
        <aside
            className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ${
                isExpanded ? "w-64" : "w-16"
            }`}
        >
            <div
                className={`flex justify-between ${
                    isExpanded ? "p-6" : "ps-4 pt-6"
                }`}
            >
                <h2
                    className={`text-2xl ${isExpanded ? "block" : "hidden"}`}
                    style={{ fontWeight: "bold" }}
                >
                    Sidebar
                </h2>
                <button onClick={toggleSidebar}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                        />
                    </svg>
                </button>
            </div>
            <nav className="mt-4">
                <ul
                    className={`space-y-2 ${
                        isExpanded ? "text-start" : "text-center"
                    }`}
                >
                    <li>
                        <Link to="/" className="block p-4 hover:bg-gray-700">
                            {isExpanded ? "Dashboard" : "D"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/profile"
                            className="block p-4 hover:bg-gray-700"
                        >
                            {isExpanded ? "Profile" : "P"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/settings"
                            className="block p-4 hover:bg-gray-700"
                        >
                            {isExpanded ? "Settings" : "S"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/logout"
                            className="block p-4 hover:bg-gray-700"
                        >
                            {isExpanded ? "Logout" : "L"}
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
