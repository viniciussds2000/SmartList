import React from "react";
import "./Botão.css"

const Botão = ({children, onClick}) => {
    return(
        <button onClick={onClick} className="addbotão">
            {children}
        </button>
    )

};
export default Botão;