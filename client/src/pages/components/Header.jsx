import {useState} from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/img/logo-colorido.svg';
import {FaInstagram, FaBars} from "react-icons/fa";
import { SiIfood } from "react-icons/si";

export default function Header() {
    const [menuStatus, setMenuStatus] = useState("closed");

    function handleMenuClick(e) {
        let status = e.currentTarget.getAttribute("data-status") == "open";
        setMenuStatus(status ? "closed" : "open");
    }

    return (
        <header className="w-full h-16 flex items-center justify-around">
            <nav className={`px-5 py-1 h-16 bg-white ${menuStatus != "open" && "shadow"} md:flex md:items-center md:justify-around w-full`}>
                <div className="flex justify-between items-center">
                    <Link to="/" className="cursor-pointer">
                        <img src={logo} alt="Crops & Co Farmhouse logo" className="max-w-48 m-1"/>
                    </Link>

                    <div
                        className="text-3xl cursor-pointer mx-2 md:hidden block"
                    >
                        <FaBars
                            data-status={menuStatus}
                            onClick={handleMenuClick}
                            className="text-black w-80"
                        />
                    </div>
                </div>

                <ul
                    className={`md:flex md:items-center md:static absolute bg-white w-full left-0 md:w-auto md:py-0
                        md:opacity-100 opacity-${menuStatus == "open" ? 100 : 0} left-[${menuStatus == "open" ? 0 : 100}%]
                        transition-all ease-in duration-300 text-center ${menuStatus == "open" ? "block shadow" : "hidden"}`
                    } style={{zIndex: 1}}>
                    <li className="m-2 md:my-0">
                        <Link to="/" className="text-xl hover:text-primary duration-500">Início</Link>
                    </li>
                    <li className="m-2 md:my-0">
                        <Link to="/about" className="text-xl hover:text-primary duration-500">Sobre</Link>
                    </li>
                    <li className="m-2 md:my-0">
                        <Link to="/contact" className="text-xl hover:text-primary duration-500">Contato</Link>
                    </li>
                    <li className="m-2 md:my-0">
                        <Link to="/location" className="text-xl hover:text-primary duration-500">Endereço</Link>
                    </li>
                    <li className="m-2 flex items-center justify-center">
                        <Link className="mx-1" to="https://www.instagram.com/wearecrops/" target="_blank"><FaInstagram size={30}/></Link>
                        <Link className="mx-1" to="https://www.ifood.com.br/delivery/joinville-sc/crops--co-gloria/677faaa9-2666-449f-9358-421b8d060a11?UTM_Medium=share" target="_blank"><SiIfood size={30} color="#ef4444"/></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
