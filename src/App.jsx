import React from "react";
import Navbar from "./components/ui/Navbar.jsx";
import MainBody from "./components/ui/MainBody.jsx";
import Players from "./components/ui/Players.jsx";

export default function App() {
    return (
        <div className="text-lightGray relative">
            <Navbar />
            <MainBody />
            <Players />
        </div>
    );
}
