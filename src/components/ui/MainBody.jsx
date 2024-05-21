import React from "react";
import Grid from "./Grid.jsx";
import Players from "./Players.jsx";

export default function MainBody() {
    return (
        <main className="">
            <div className="flex justify-center items-center w-full h-svh bg-backgroundColor flex-col">
                <Grid />
            </div>
        </main>
    );
}
