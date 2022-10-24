import Image from "next/image";
import Link from "next/link";
import { type } from "os";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { FaMale, FaFemale, FaBed} from "react-icons/fa";
import { IoMaleFemale } from "react-icons/io5";

type AnnounceRepublicProps = {
    id: number,
    images: Array<string>
    accessibility: string,
    title: string;
    location: string;
    price: number;
    sex: string;
}

function AnnounceRepublic({id, images, accessibility, title, location, price, sex }: AnnounceRepublicProps) {

    return (
        <>
            <Link href={'republic/'+id}>
            <div className="transition ease-in-out delay-200 w-full max-w-sm bg-white border-2 mb-8 rounded-lg drop-shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
                <div className="carousel pb-4 rounded-t-lg">
                    <div className="carousel-item w-full h-64 rounded-t-lg">
                        <Image className="object-cover object-center" width={400} height={200} src={images[0]} alt={accessibility} />
                    </div>
                    <div className="carousel-item w-full h-64">
                        <Image className="object-cover object-center" width={400} height={200}src={images[1]} alt={accessibility} />
                    </div>
                    <div className="carousel-item w-full h-64">
                        <Image className="object-cover object-center" width={400} height={200} src={images[2]} alt={accessibility} />
                    </div>
                    <div className="carousel-item w-full h-64">
                        <Image className="object-cover object-center" width={400} height={200} src={images[3]} alt={accessibility} />
                    </div>
                </div>
                <div className="px-7 pb-5 text-center">
                    <a>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <div className="flex justify-between items-center px-3 mt-2.5 mb-5">
                        <div className="px-5 py-5 bg-gray-50 border-solid border rounded">
                            {sex == "Male" ? <FaMale className="text-blue-500" /> : sex == "Female" ? <FaFemale className="text-pink-500" /> : <IoMaleFemale className="text-green-900" />}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 border-solid border rounded">
                            {sex == "Male" ? <FaMale className="text-blue-500" /> : sex == "Female" ? <FaFemale className="text-pink-500" /> : <IoMaleFemale className="text-green-900" />}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 border-solid border rounded">
                            <FaBed className="text-blue-500" />
                        </div>
                        <div className="px-5 py-5 bg-gray-50 border-solid border rounded">
                            {sex == "Male" ? <FaMale className="text-blue-500" /> : sex == "Female" ? <FaFemale className="text-pink-500" /> : <IoMaleFemale className="text-green-900" />}
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                    <div className="flex items-center font-bold">
                        <MapPinIcon className="h-6 w-6 text-blue-500" />
                        <h2 className="text-blue-500">{location}</h2>
                    </div>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                    </div>
                </div>
            </div>
            </Link>
        </>)
}

export default AnnounceRepublic;