import menu from '../../assets/docs/MenuCrops.pdf';

export default function BtnMenu(){
    return(
        <div class="w-full text-center">
            <a href={menu} download='Menu' class="px-4 py-2 bg-primary font-bold text-white rounded-md text-xl">Cardápio</a>
        </div>
    )
}