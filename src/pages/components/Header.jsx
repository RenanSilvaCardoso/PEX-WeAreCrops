import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.png';
import { FaBars } from "react-icons/fa";

function Header() {
    function Menu(e){
        let list = document.querySelector('ul');

        console.log(e.target.getAttribute('name'));
        e.target.getAttribute('name') === 'menu' ? 
        (e.target.setAttribute('name', 'close'), list.classList.remove('opacity-0') , list.classList.add('opacity-100'), list.classList.remove('left-[100%]'), list.classList.add('left-[0]')) 
        : ( e.target.setAttribute('name', 'menu'), list.classList.remove('opacity-100'),list.classList.add('opacity-0'), list.classList.remove('left-[0]'), list.classList.add('left-[100%]'));
    }

    return (
    <header class="w-full h-12 flex items-center justify-around relative">
        <nav class="px-5 py-2 bg-white shadow md:flex md:items-center md:justify-around w-full">
            <div class="flex justify-between items-center">
                <span class="text-2xl cursor-pointer">
                    <img src={logo} alt="Crops & Co logo" class="w-2/6 md:w-44"/>
                </span>

                <span class="text-3xl cursor-pointer mx-2 md:hidden block" name="menu">
                    <FaBars name="menu" class="text-black w-80" onClick={Menu}/>
                </span>
            </div>

            <ul class="md:flex md:items-center md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-100 left-[100%] transition-all ease-in duration-300 text-center">
                <li class="mx-2 my-6 md:my-0">
                    <Link to="/" class="text-xl hover:text-primary duration-500">Início</Link>
                </li>
                <li class="mx-2 my-6 md:my-0">
                    <Link to="/about" class="text-xl hover:text-primary duration-500">Sobre nós</Link>
                </li>
                <li class="mx-2 my-6 md:my-0">
                    <Link to="/contact" class="text-xl hover:text-primary duration-500">Contato</Link>
                </li>
                <li class="mx-2 my-6 md:my-0">
                    <Link to="/location" class="text-xl hover:text-primary duration-500">Onde estamos</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;