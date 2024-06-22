import {FaWhatsapp} from "react-icons/fa";
import {Link} from "react-router-dom";

export default function WhatsApp() {
    return (
        <Link
            className="absolute bottom-28 right-6 bg-green-500 w-[60px] h-[60px] flex justify-center items-center rounded-full shadow animate-bounce"
            to="https://wa.me/5547988302999" target="_blank">
            <FaWhatsapp size={40} color="white"/>
        </Link>
    )
}
