import {useEffect} from 'react';
import historySvg from '../assets/img/pen-svgrepo-com.svg';
import missionSvg from '../assets/img/target-svgrepo-com.svg';
import visionSvg from '../assets/img/eye-show-svgrepo-com.svg';
import valuesSvg from '../assets/img/hearth-svgrepo-com.svg';
import '../index.css';

function About() {
    useEffect(() => {
        const title = document.getElementById('title');
        const history = document.getElementById('history');
        const mission = document.getElementById('mission');
        const vision = document.getElementById('vision');
        const values = document.getElementById('values');
        title.classList.remove('opacity-0'), title.classList.add('opacity-100');
        history.classList.remove('opacity-0'), history.classList.add('opacity-100');
        mission.classList.remove('opacity-0'), mission.classList.add('opacity-100');
        vision.classList.remove('opacity-0'), vision.classList.add('opacity-100');
        values.classList.remove('opacity-0'), vision.classList.add('opacity-100');
    }, []);

    return (
        <div className="w-[85%] space-y-4 h-full overflow-auto no-scrollbar p-8">
            <h1 id='title' className="font-bold text-3xl opacity-0 text-center mt-2 duration-1000 md:text-4xl">Sobre o
                Crops</h1>
            <div id='history'
                 className="w-full flex flex-col justify-center items-center duration-1000 opacity-0 delay-200">
                <div className="w-full flex justify-center items-center gap-1">
                    <h2 className="font-bold text-2xl md:text-3xl">História do Crops</h2>
                    <img src={historySvg} alt="caneta" className="size-7 md:size-9 animate-oscilation z-0"/>
                </div>
                <div className="w-[90%] md:w-[70%] text-pretty py-2">
                    <p className="indent-8 text-lg">
                        O CROPS & Co foi fundado em 2017, em Joinville, Santa Catarina, como uma saladaria no terceiro
                        piso do Shopping Mueller. Durante os dois anos iniciais, conquistamos nossos clientes com
                        saladas frescas e saudáveis, até que em 2019 decidimos transformar e expandir nossa identidade.
                    </p>
                    <p className="indent-8 text-lg">
                        Assim nasceu o CROPS & Co Farmhouse, inspirado no conceito de casa de fazenda, onde a premissa
                        principal é fazer tudo do zero. Nossa cozinha não utiliza produtos processados ou
                        industrializados; cada ingrediente é selecionado com cuidado, e conhecemos cada fornecedor
                        pessoalmente. Este compromisso garante que nossos pratos sejam sempre frescos e cheios de sabor.
                    </p>
                    <p className="indent-8 text-lg">
                        Nosso ambiente rústico e acolhedor, que lembra um celeiro de fazenda, complementa a experiência
                        gastronômica. Tocamos música country, rock dos anos 80, blues e folk, criando uma atmosfera
                        descontraída e prazerosa. Nosso cardápio é diversificado, oferecendo desde saladas até
                        hambúrgueres e carnes defumadas no estilo texano.
                    </p>
                    <p className="indent-8 text-lg">
                        Estamos localizados em Joinville, Santa Catarina, e temos como princípio transformar clientes em
                        amigos, proporcionando uma experiência única e memorável em cada visita.
                    </p>
                </div>
            </div>
            <div id='mission'
                 className="w-full flex flex-col justify-center items-center delay-500 duration-1000 opacity-0">
                <div className="w-full flex justify-center items-center gap-1">
                    <h2 className="font-bold text-2xl md:text-3xl">Missão do Crops</h2>
                    <img src={missionSvg} alt="caneta" className="size-7 md:size-9 animate-oscilation"/>
                </div>
                <div className="w-[90%] md:w-[70%] text-pretty py-2">
                    <p className="indent-8 text-lg">
                        No CROPS & Co, nossa missão é proporcionar uma experiência gastronômica única e acolhedora,
                        valorizando ingredientes frescos e de alta qualidade. Nos dedicamos a criar pratos autênticos e
                        saborosos, preparados diariamente com amor e atenção aos detalhes. Nosso compromisso é com a
                        saúde e bem-estar dos nossos clientes, garantindo que cada refeição seja uma celebração de
                        sabores naturais e frescos.
                    </p>
                </div>
            </div>
            <div id='vision' className="w-full flex flex-col justify-center items-center delay-700 duration-1000 opacity-0">
                <div className="w-full flex justify-center items-center gap-1">
                    <h2 className="font-bold text-2xl md:text-3xl">Visão do Crops</h2>
                    <img src={visionSvg} alt="caneta" className="size-7 md:size-9 animate-oscilation"/>
                </div>
                <div className="w-[90%] md:w-[70%] text-pretty py-2">
                    <p className="indent-8 text-lg">
                        Ser reconhecido como o melhor restaurante farm-to-table em Joinville, destacando-nos pela
                        qualidade excepcional dos nossos pratos e pelo atendimento caloroso e personalizado. Queremos
                        ser referência em práticas sustentáveis e em verticalização de processos, inspirando outras
                        empresas a adotarem uma abordagem mais consciente e responsável na culinária.
                    </p>
                </div>
            </div>
            <div id='values'
                 className="w-full flex flex-col justify-center items-center delay-1000 duration-1000 opacity-0">
                <div className="w-full flex justify-center items-center gap-1">
                    <h2 className="font-bold text-2xl md:text-3xl">Valores do Crops</h2>
                    <img src={valuesSvg} alt="caneta" className="size-7 md:size-9 animate-oscilation"/>
                </div>
                <div className="w-[90%] md:w-[50%] text-pretty py-2 md:text-left">
                    <ul>
                        <li className="text-lg"><span className="font-bold">Qualidade:</span> Utilizamos apenas ingredientes
                            frescos e de origem conhecida, garantindo a excelência em cada prato servido.
                        </li>
                        <li className="text-lg"><span className="font-bold">Autenticidade:</span> Cada receita é preparada do
                            zero, respeitando o tempo e o processo de cada ingrediente.
                        </li>
                        <li className="text-lg"><span className="font-bold">Sustentabilidade:</span> Priorizamos práticas que
                            respeitem o meio ambiente e os produtores locais.
                        </li>
                        <li className="text-lg"><span className="font-bold">Acolhimento:</span> Cada cliente é recebido com
                            carinho e atenção, fazendo com que se sintam parte da nossa família.
                        </li>
                        <li className="text-lg"><span className="font-bold">Paixão pela Culinária:</span> Acreditamos no poder
                            transformador da comida feita com amor e dedicação.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
