import um from '../assets/img/crops1.jpg';
import dois from '../assets/img/crops2.jpg';
import tres from '../assets/img/crops3.jpg';
import quatro from '../assets/img/crops4.jpg';

export default function Location() {
    return (
        <div className="w-full">
            <div className="w-11/12 m-auto py-4 space-y-2">
                <h1 className="text-2xl font-bold text-center mb-2">Venha nos conhecer!</h1>
                <div className="w-full md:w-10/12 flex flex-wrap gap-1 m-auto">
                    <img src={um} className="w-2/5 m-auto md:w-1/3 hover:scale-125 duration-300 shadow-md"/>
                    <img src={dois} className="w-2/5 m-auto md:w-1/3 hover:scale-125 duration-300 shadow-md"/>
                    <img src={tres} className="w-2/5 m-auto md:w-1/3 hover:scale-125 duration-300 shadow-md"/>
                    <img src={quatro} className="w-2/5 m-auto md:w-1/3 hover:scale-125 duration-300 shadow-md"/>
                </div>
                <div className="w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14306.95315529407!2d-48.8596267!3d-26.3025829!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb048633e9b39%3A0x6e90bd738bb1a635!2sCROPS%20%26%20Co%20Farmhouse!5e0!3m2!1spt-BR!2sbr!4v1718545519808!5m2!1spt-BR!2sbr"
                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-44 md:w-3/5 m-auto"></iframe>
                </div>
            </div>
        </div>
    )
}
