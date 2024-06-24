import PropTypes from "prop-types";
import WhatsApp from "./WhatsApp.jsx";
import Toaster from "./Toaster.jsx";
import "../../index.css"

export default function CenterContent({children}) {

    return(
        <main className="centerContent">
            {children}
            <WhatsApp />
            <Toaster />
        </main>
    )
}

CenterContent.propTypes = {
    children: PropTypes.object.isRequired
}
