import React, { useState } from "react";

const Toggle = ({ children }) => {
    const [toggle, setToggle] = useState(true);
    return <div onClick={(e) => setToggle(!toggle)}>{toggle ? children: ""}</div>;
        
};

export default Toggle;
