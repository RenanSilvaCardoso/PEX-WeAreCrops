import React from 'react';
import { Carousel } from './components/Carousel';
import carousel from '../assets/img/carousel.jpg';
import carousel2 from '../assets/img/carousel2.jpg';
import carousel3 from '../assets/img/carousel3.jpg';
import carousel4 from '../assets/img/crops3.jpg';
import BtnMenu from './components/BtnMenu';

function Home() {
    let s = [carousel, carousel2, carousel3, carousel4];

    return (
        <div class="w-full">
            <div class="md:w-4/5 m-auto">
                <Carousel slides={s}/>
            </div>
            <div class="w-full text-center py-4">
                <h1 class="text-3xl font-bold mb-4">Quer conhecer nossos pratos?</h1>
                <BtnMenu />
            </div>
        </div>
    );
}

export default Home;
