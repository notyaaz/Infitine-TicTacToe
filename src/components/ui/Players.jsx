import React from "react";
import ShapeComponent from "./ShapeComponent.jsx";
import { shapes } from "../../helpers.js";

export default function Players() {
    return (
        <div className="flex w-[340px] justify-between items-center absolute bottom-[100px] left-1/2 -translate-x-1/2">
            <div className="flex  flex-col items-center pl-[25px]">
                <ShapeComponent shape={shapes.grayO} />
                <p className="text-[20px]">YOU</p>
            </div>
            <div className="flex  flex-col items-center pr-[35px]">
                <ShapeComponent shape={shapes.grayX} />
                <p className="text-[20px]">CPU</p>
            </div>
        </div>
    );
}
