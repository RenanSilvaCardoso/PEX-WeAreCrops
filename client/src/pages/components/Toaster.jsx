import useGlobalState from "../../store.js";
import { FaCircleCheck, FaCircleExclamation, FaCircleXmark, FaXmark } from "react-icons/fa6";

export default function Toaster(){
    const { show, text, status, toggleShow } = useGlobalState();

    const types = {
        success: ["bg-green-600 border-green-300", (color) => <FaCircleCheck color={color}/>],
        error: ["bg-red-600 border-red-300", (color) => <FaCircleXmark color={color}/>],
        warning: ["bg-yellow-500 border-yellow-200", (color) => <FaCircleExclamation color={color}/>]
    }

    return(
        <div className={`z-40 absolute flex justify-between items-center w-72 h-12 px-6 py-4 rounded-md border-2 -top-20 ${show ? "block animate-slide-in top-20" : "hidden animate-slide-out"} ${types[status][0]}`}>
            {types[status][1]("white")}
            <p className="font-medium text-white">
                {text}
            </p>
            <FaXmark
                onClick={() => toggleShow()}
                className="cursor-pointer"
                color="white"
            />
        </div>
    )
}
