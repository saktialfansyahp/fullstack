import React from "react";
import WebSocketClient from "../service/WebSocket";
import PrivateChat from '../service/WebSocket';

const AdminLayout: React.FC = () => {
  return (
    <div className="flex h-screen w-screen bg-white">
      <aside>
        <div className="flex flex-row h-screen">
          {/* Sidebar Kiri */}
          <div className="bg-blue-950 text-white w-16 flex flex-col items-center space-y-6 py-6">
            <h2 className="text-center text-lg font-bold">ES</h2>
            <hr className="w-10 border-t-0 bg-gray-100 h-0.5" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12L11.204 3.045c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>

          {/* Sidebar Konten */}
          <div className="bg-gray-100 w-48 h-screen flex flex-col justify-start space-y-6 px-4 py-6">
            <h2 className="text-lg font-bold">ES SALES</h2>
            <hr className="my-4 h-0.5 border-t-0 bg-gray-300" />
            <h2 className="text-md font-medium">Dashboard</h2>
          </div>
        </div>
      </aside>

      {/* <WebSocketClient currentUser={undefined} otherUser={undefined} /> */}
      <PrivateChat currentUser={{id: "1", name: "alfan"}} otherUser={{id: "2", name:"p"}} />
    </div>
  );
};

export default AdminLayout;
