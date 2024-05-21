import React from "react";
import Box from "./Box.jsx";
import { shapes } from "../../helpers.js";

export default function Grid() {
    return (
        <div className="flex flex-row flex-wrap gap-4 w-[340px]">
            <Box shape={shapes.grayO} />
            <Box shape={shapes.grayX} />
            <Box shape={shapes.grayX} />
            <Box shape={shapes.grayX} />
            <Box shape={shapes.redO} />
            <Box shape={shapes.redO} />
            <Box shape={shapes.redO} />
            <Box shape={shapes.greenX} />
            <Box shape={shapes.greenX} />
        </div>
    );
}
