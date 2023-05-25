import React from "react";
import { usePenContext } from "./state";

import { PenShape } from "../../backend/src/constants";
import ShapeButton from "./shape_button";

const ShapeSelector = (props) => {
    const {setShape} = usePenContext();

    return (
        <div>
            {
                Object.entries(PenShape).map(([_, shape]) => {
                    return (
                        <ShapeButton key={shape} shape={shape} setShape={setShape} />
                    );
                })
            } 
        </div>
    );
}

export default ShapeSelector;
