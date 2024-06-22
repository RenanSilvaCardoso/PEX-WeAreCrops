import historySvg from '../assets/img/pen-svgrepo-com.svg';
import missionSvg from '../assets/img/target-svgrepo-com.svg';
import visionSvg from '../assets/img/eye-show-svgrepo-com.svg';
import valuesSvg from '../assets/img/hearth-svgrepo-com.svg';

import React from 'react';

function About() {
    return (
        <div class="w-full space-y-4">
            <h1 class="font-bold text-3xl text-center mt-2">Sobre o Crops</h1>
            <div class="w-full flex flex-col justify-center items-center">
                <div class="w-full flex justify-center items-center gap-1">
                    <h2 class="font-bold text-2xl">História do Crops</h2>
                    <img src={historySvg} alt="caneta" class="size-7 animate-oscilation" />
                </div>
                <div class="w-[90%] text-pretty py-2" >
                    <p class="indent-8">
                        O CROPS & Co foi fundado em 2017, em Joinville, Santa Catarina, como uma saladaria no terceiro piso do Shopping Mueller. Durante os dois anos iniciais, conquistamos nossos clientes com saladas frescas e saudáveis, até que em 2019 decidimos transformar e expandir nossa identidade.
                    </p>
                    <p class="indent-8">
                        Assim nasceu o CROPS & Co Farmhouse, inspirado no conceito de casa de fazenda, onde a premissa principal é fazer tudo do zero. Nossa cozinha não utiliza produtos processados ou industrializados; cada ingrediente é selecionado com cuidado, e conhecemos cada fornecedor pessoalmente. Este compromisso garante que nossos pratos sejam sempre frescos e cheios de sabor.
                    </p>
                    <p class="indent-8">
                        Nosso ambiente rústico e acolhedor, que lembra um celeiro de fazenda, complementa a experiência gastronômica. Tocamos música country, rock dos anos 80, blues e folk, criando uma atmosfera descontraída e prazerosa. Nosso cardápio é diversificado, oferecendo desde saladas até hambúrgueres e carnes defumadas no estilo texano.
                    </p>
                    <p class="indent-8">
                        Estamos localizados em Joinville, Santa Catarina, e temos como princípio transformar clientes em amigos, proporcionando uma experiência única e memorável em cada visita.
                    </p>
                </div>
            </div>
            <div class="w-full flex flex-col justify-center items-center">
                <div class="w-full flex justify-center items-center gap-1">
                    <h2 class="font-bold text-2xl">Missão  do Crops</h2>
                    <img src={missionSvg} alt="caneta" class="size-7 animate-oscilation" />
                </div>
                <div class="w-[90%] text-pretty py-2" >
                    <p class="indent-8">
                        No CROPS & Co, nossa missão é proporcionar uma experiência gastronômica única e acolhedora, valorizando ingredientes frescos e de alta qualidade. Nos dedicamos a criar pratos autênticos e saborosos, preparados diariamente com amor e atenção aos detalhes. Nosso compromisso é com a saúde e bem-estar dos nossos clientes, garantindo que cada refeição seja uma celebração de sabores naturais e frescos.
                    </p>
                </div>
            </div>
            <div class="w-full flex flex-col justify-center items-center">
                <div class="w-full flex justify-center items-center gap-1">
                    <h2 class="font-bold text-2xl">Visão  do Crops</h2>
                    <img src={visionSvg} alt="caneta" class="size-7 animate-oscilation" />
                </div>
                <div class="w-[90%] text-pretty py-2" >
                    <p class="indent-8">
                    Ser reconhecido como o melhor restaurante farm-to-table em Joinville, destacando-nos pela qualidade excepcional dos nossos pratos e pelo atendimento caloroso e personalizado. Queremos ser referência em práticas sustentáveis e em verticalização de processos, inspirando outras empresas a adotarem uma abordagem mais consciente e responsável na culinária.
                    </p>
                </div>
            </div>
            <div class="w-full flex flex-col justify-center items-center">
                <div class="w-full flex justify-center items-center gap-1">
                    <h2 class="font-bold text-2xl">Valores  do Crops</h2>
                    <img src={valuesSvg} alt="caneta" class="size-7 animate-oscilation" />
                </div>
                <div class="w-[90%] text-pretty py-2 md:text-center" >
                    <ul>
                        <li><span class="font-bold">Qualidade:</span> Utilizamos apenas ingredientes frescos e de origem conhecida, garantindo a excelência em cada prato servido.</li>
                        <li><span class="font-bold">Autenticidade:</span> Cada receita é preparada do zero, respeitando o tempo e o processo de cada ingrediente.
                        </li>
                        <li><span class="font-bold">Sustentabilidade:</span> Priorizamos práticas que respeitem o meio ambiente e os produtores locais.
                        </li>
                        <li><span class="font-bold">Acolhimento:</span> Cada cliente é recebido com carinho e atenção, fazendo com que se sintam parte da nossa família.
                        </li>
                        <li><span class="font-bold">Paixão pela Culinária:</span> Acreditamos no poder transformador da comida feita com amor e dedicação.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
