import Image from "next/image";
import Link from "next/link";
import { Imovel } from "../../types/Imovel";

function AnnounceRepublic(props: Imovel) {
    return (
        <>
            <Link href={'republic/' + props.idImovel}>
                <div>
                    {props.tipoImovel}
                </div>
            </Link>
        </>)
}

export default AnnounceRepublic;