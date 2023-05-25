import React from "react";

import { usePenContext } from "./state";

const SizeSelector = (props) => {
    const {setSize} = usePenContext();

    return (
        <div>
            <input
                type="range"
                min="1"
                max="20"
                onChange={(e) => setSize(e.target.value)}
            />
        </div>
    );
}

export default SizeSelector;
