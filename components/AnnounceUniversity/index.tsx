import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/solid";

type AnnounceUniversityProps = {
    image: string;
    accessibility: string,
    title: string;
    location: string;
}


function AnnounceUniversity({image, accessibility, title, location}: AnnounceUniversityProps) {

    return (
        <>
            <div className="w-full max-w-sm bg-gray-200 my-4 rounded-lg drop-shadow-md text-center">
                <Image className="pb-4 rounded-t-lg" src={image} width="500" height={300} alt={accessibility} />
                <div className="p-4 flex flex-col items-center">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{title}</h5>
                    <div className="flex justify-between items-center text-center">
                    <div className="m-2 flex items-center font-bold text-center">
                        <MapPinIcon className="h-6 w-6 text-red-500 text-center" />
                        <h2 className="text-red-500 text-center">{location}</h2>
                    </div>
                    </div>
                </div>
            </div>
        </>)
}

export default AnnounceUniversity; 