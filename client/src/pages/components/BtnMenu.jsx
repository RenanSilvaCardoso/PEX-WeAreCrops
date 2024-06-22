import menu from '../../assets/docs/MenuCrops.pdf';

export default function BtnMenu(){
    return(
        <div className="w-full text-center">
            <a href={menu} download='Menu' className="px-4 py-2 bg-primary font-bold text-white rounded-md text-xl">Cardápio</a>
        </div>
    )
}
