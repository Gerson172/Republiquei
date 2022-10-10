import Image from "next/image";
import { type } from "os";
import styles from '../../styles/post.module.css'

type AnnounceRepublicProps = {
    image: string;
    accessibility: string,
    title: string;
    location: string;
    price: number;
}

function AnnounceRepublic({image, accessibility, title, location, price}: AnnounceRepublicProps){
    return (
        <div className={styles.post}>
            <Image src={image} className={styles.image} width={400} height={250} alt={accessibility}  />
            <div className={styles.postCard}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.location}>
                <p>{location}</p>
            </div>
            <p className={styles.price}>R$ {price}</p>
            </div>

        </div>)
}

export default AnnounceRepublic;