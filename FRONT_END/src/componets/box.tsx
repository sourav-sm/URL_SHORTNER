import { FaArrowRight } from "react-icons/fa";

type BoxProps={
    heading:string,
    description:string,
}

export const Box=({heading,description}:BoxProps)=>{
    return(
        <div className="flex flex-col border border-gray-200 px-3 py-10 rounded-xl space-y-2">
            <div className="bg-indigo-300 rounded-lg p-3 w-fit">
                <FaArrowRight className="text-indigo-600"/>
            </div>
            <div className="text-xl font-bold">{heading}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    )
}
