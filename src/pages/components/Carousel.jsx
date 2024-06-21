import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export function Carousel({slides}) {
    let [current, setCurrent] = useState(0);

    function previousSlide(){
        if(current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    }
    function nextSlide(){
        if(current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    }

    return (
        <div class="overflow-hidden relative mt-2 h-2/5 md:h-[450px] shadow-md w-full md:w-9/12 m-auto">
            <div 
                class={`flex transition ease-out duration-400 no-repeat object-top`}
                style={{transform: `translateX(-${current * 100}%)`}}>
                {slides.map((s, index) => {
                    return <img class="md:object-none md:object-bottom" src={s} key={index}/>
                })}
            </div>
            <div class="absolute top-0 h-full w-full justify-between items-center flex text-white px-2 md:px-10 text-xl md:text-3xl">
                <button onClick={previousSlide} class="bg-primary p-1 rounded-full">
                    <FaArrowLeft></FaArrowLeft>
                </button>
                <button onClick={nextSlide} class="bg-primary p-1 rounded-full">
                    <FaArrowRight></FaArrowRight>
                </button>
            </div>
            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((s, i) => {
                    return (
                    <div
                        onClick={() => {
                        setCurrent(i);
                        }}
                        key={"circle" + i}
                        className={`rounded-full w-3 md:w-5 h-3 md:h-5 cursor-pointer  ${
                        i == current ? "bg-secondary" : "bg-primary"
                        }`}
                    ></div>
                    );
                })}
            </div>
        </div>
    );
}