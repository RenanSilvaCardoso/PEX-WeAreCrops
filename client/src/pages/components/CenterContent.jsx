import React from "react";
import PropTypes from "prop-types";
import WhatsApp from "./WhatsApp.jsx";
import "../../index.css"

export default function CenterContent({children}) {
    return(
        <main className="centerContent">
            {children}
            <WhatsApp />
        </main>
    )
}

CenterContent.propTypes = {
    children: PropTypes.object.isRequired
}
