import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/img/logo.png';
import {FaBars} from "react-icons/fa";

function Header() {
    const [menuStatus, setMenuStatus] = useState("closed");

    function handleMenuClick(e) {
        let status = e.currentTarget.getAttribute("data-status") == "open";
        setMenuStatus(status ? "closed" : "open");
    }

    return (
        <header className="w-full h-12 flex items-center justify-around relative">
            <nav className="px-5 py-2 bg-white shadow md:flex md:items-center md:justify-around w-full">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl cursor-pointer">
                        <img src={logo} alt="Crops & Co logo" className="w-2/6 md:w-44"/>
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
                    className={`md:flex md:items-center md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0
                        py-4 md:pl-0 pl-7 md:opacity-100 opacity-${menuStatus == "open" ? 100 : 0} left-[${menuStatus == "open" ? 0 : 100}%]
                        transition-all ease-in duration-300 text-center ${menuStatus == "open" ? "block shadow" : "hidden"}`
                    }>
                    <li className="mx-2 my-6 md:my-0">
                        <Link to="/" className="text-xl hover:text-primary duration-500">Início</Link>
                    </li>
                    <li className="mx-2 my-6 md:my-0">
                        <Link to="/about" className="text-xl hover:text-primary duration-500">Sobre nós</Link>
                    </li>
                    <li className="mx-2 my-6 md:my-0">
                        <Link to="/contact" className="text-xl hover:text-primary duration-500">Contato</Link>
                    </li>
                    <li className="mx-2 my-6 md:my-0">
                        <Link to="/location" className="text-xl hover:text-primary duration-500">Onde estamos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
