import Image from "next/image";
import { type } from "os";
import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";
import { FaMale, FaFemale } from "react-icons/fa";
import { IoMaleFemale} from "react-icons/io5";

type AnnounceRepublicProps = {
    image: string;
    accessibility: string,
    title: string;
    location: string;
    price: number;
    sex: string;
}
  

function AnnounceRepublic({image, accessibility, title, location, price, sex}: AnnounceRepublicProps){


    return (
        <>
        <div className="w-full max-w-sm bg-white border-2 mb-8 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="carousel">
            <div className="carousel-item w-full">
            <img className="pb-4 rounded-t-lg" src={image} alt={accessibility} />
            </div>
            <div className="carousel-item w-full">
            <img className="pb-4 rounded-t-lg" src={image} alt={accessibility} />
            </div>
            <div className="carousel-item w-full">
            <img className="pb-4 rounded-t-lg" src={image} alt={accessibility} />
            </div>
            <div className="carousel-item w-full">
            <img className="pb-4 rounded-t-lg" src={image} alt={accessibility} />
            </div>
            </div>
            <div className="px-5 pb-5">
                <a>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                <StarIcon className="w-5 h-5 text-yellow-300" />
                <StarIcon className="w-5 h-5 text-yellow-300" />
                <StarIcon className="w-5 h-5 text-yellow-300" />
                <StarIcon className="w-5 h-5 text-yellow-300" />
                <StarIcon className="w-5 h-5 text-yellow-300" />
                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
                </div>
                <div className="flex items-center mt-2.5 mb-5">
                    <MapPinIcon className="h-6 w-6 text-blue-500"/>
                    <h2>{location}</h2>
                </div>
                <div className="flex justify-between items-center mt-2.5 mb-5">
                    <div className="px-5 py-5 bg-gray-50 border-solid border rounded">
                        {sex == "Male" ? <FaMale className="text-blue-500"/> : sex == "Female" ? <FaFemale className="text-pink-500" /> : <IoMaleFemale className="text-green-900" /> }
                    </div>
                    <div className="px-5 py-5 bg-gray-50 border-solid border rounded">
                        {sex == "Male" ? <FaMale className="text-blue-500"/> : sex == "Female" ? <FaFemale className="text-pink-500" /> : <IoMaleFemale className="text-green-900" /> }
                    </div>
                    <div className="px-5 py-5 bg-gray-50 border-solid border rounded">
                        {sex == "Male" ? <FaMale className="text-blue-500"/> : sex == "Female" ? <FaFemale className="text-pink-500" /> : <IoMaleFemale className="text-green-900" /> }
                    </div>
                    <div className="px-5 py-5 bg-gray-50 border-solid border rounded">
                        {sex == "Male" ? <FaMale className="text-blue-500"/> : sex == "Female" ? <FaFemale className="text-pink-500" /> : <IoMaleFemale className="text-green-900" /> }
                    </div>
                    <div className="px-5 py-5 bg-gray-50 border-solid border rounded">
                        {sex == "Male" ? <FaMale className="text-blue-500"/> : sex == "Female" ? <FaFemale className="text-pink-500" /> : <IoMaleFemale className="text-green-900" /> }
                    </div>
                </div>
                <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">R${price}</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Visualizar</a>
        </div>
            </div>
        </div>
        </>)
}

export default AnnounceRepublic;