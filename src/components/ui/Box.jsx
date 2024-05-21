import React from "react";
import ShapeComponent from "./ShapeComponent.jsx";

export default function Box({ shape }) {
    return (
        <div className="w-[100px] h-[100px] cursor-pointer bg-boxBackgroundColor border border-bordersColor rounded-lg flex justify-center items-center">
            <ShapeComponent shape={shape} />
        </div>
    );
}
