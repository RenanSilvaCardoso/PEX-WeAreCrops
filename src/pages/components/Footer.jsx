import logo from '../../assets/img/logo.png';
import {Link} from 'react-router-dom';
import {FaInstagram, FaWhatsapp} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full space-y-4">
            <div className="w-full text-center bg-secondary py-2">
                <p className="font-bold text-sm md:text-xl">SE BEBER, NÃO DIRIJA.</p>
                <p className="font-medium text-xs md:text-lg">VENDA E CONSUMO PROIBIDO PARA MENORES DE 18 ANOS</p>
            </div>
            <div className="w-full flex flex-col justify-center items-center space-y-4 md:flex-row md:justify-between">
                <div className="w-full md:w-2/6">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Crops & Co logo"
                            className="w-3/5 m-auto md:w-4/6 md:m-auto"
                        />
                    </Link>
                </div>
                <div className="w-full flex flex-col items-center justify-center py-2 md:w-3/6 md:flex-row md:gap-4">
                    <Link to='/' className="text-xl">
                        Início
                    </Link>
                    <Link to='/about' className="text-xl">
                        Sobre nós
                    </Link>
                    <Link to='/contact' className="text-xl">
                        Contato
                    </Link>
                    <Link to='/location' className="text-xl">
                        Onde estamos
                    </Link>
                </div>
                <div className="flex items-center justify-center space-x-4 w-full md:w-2/6">
                    <Link to="https://www.instagram.com/wearecrops/" target="_blank"><FaInstagram size={30}/></Link>
                    <Link to="https://api.whatsapp.com/send?phone=5547988302999" target="_blank"><FaWhatsapp size={30}/></Link>
                </div>
            </div>
            <div className="w-full bg-primary py-2">
                <p className="text-xs md:w-3/5 md:m-auto md:text-base text-white font-medium text-center">
                    Copyright © 2024 CROPS & Co Farmhouse Todos os direitos reservados. Todas as marcas registradas são
                    propriedade dos seus respectivos donos.
                </p>
            </div>
        </footer>
    )
}
