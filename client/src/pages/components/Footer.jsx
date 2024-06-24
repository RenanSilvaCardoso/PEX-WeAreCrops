import Celeiro from '../../assets/img/celeiro-colorido.svg';
import '../../index.css';

export default function Footer() {
    return (
        <>
            <div className="grass"></div>
            <img className="barn" src={Celeiro} />
            <footer className="w-full h-20">
                <div className="w-full text-center bg-secondary py-2">
                    <p className="font-bold text-sm">SE BEBER, NÃO DIRIJA.</p>
                    <p className="font-medium text-xs">VENDA E CONSUMO PROIBIDO PARA MENORES DE 18 ANOS</p>
                </div>
                <div className="w-full bg-primary py-2">
                    <p className="text-xs text-white font-medium text-center">
                        Copyright © 2024 CROPS & Co Farmhouse Todos os direitos reservados. Todas as marcas registradas são
                        propriedade dos seus respectivos donos.
                    </p>
                </div>
            </footer>
        </>
    )
}
