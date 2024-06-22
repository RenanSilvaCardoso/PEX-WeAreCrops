export default function Location() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-items-start">
            <div className="w-11/12 py-4 space-y-2">
                <h1 className="text-2xl font-bold text-center mb-2">Venha nos conhecer!</h1>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.738289532715!2d-48.86220162394057!3d-26.302582877016107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb048633e9b39%3A0x6e90bd738bb1a635!2sCROPS%20%26%20Co%20Farmhouse!5e0!3m2!1spt-BR!2sbr!4v1719091726882!5m2!1spt-BR!2sbr"
                width="500" height="500" style={{border:0}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}
