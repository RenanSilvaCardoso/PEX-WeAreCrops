import {FaWhatsapp} from "react-icons/fa";
import {Link} from "react-router-dom";

export default function WhatsApp() {
    return (
        <Link
            className="absolute bottom-48 right-12 bg-green-500 w-[80px] h-[80px] flex justify-center items-center rounded-full shadow animate-bounce"
            to="https://wa.me/5547988302999" target="_blank">
            <FaWhatsapp size={60} color="white"/>
        </Link>
    )
}
