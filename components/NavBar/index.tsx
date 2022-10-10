import styles from '../../styles/Navbar.module.css'
import Image from "next/image";
import pallete from "../../styles/pallete.module.scss"

import Link from "next/link";

const NavBar = () => {
    return (
        <div className={`${styles.navbar}`}>
            <div className={styles.logo}>
                <Image src="/favicon.png" width={40} height={40} alt="logo-republiquei" />
                <Link href='/'><a className={pallete.logo}>Republiquei</a></Link>
            </div>
            <div className={`${styles.navigation} ${pallete.link}`}>
                <Link href='/searchRepublic'><a>Buscar Republica</a></Link>
                <Link href='/owner'><a>Para Proprietarios</a></Link>
                <Link href='/about'><a>Sobre</a></Link>
                <Link href='/help'><a>Ajuda</a></Link>
            </div>
            <div className={styles.acess}>
                <Link href='announce'><a className={pallete.btnGray}>Anunciar</a></Link>
                <Link href='auth'><a className={pallete.btnBlue}>Entrar</a></Link>
            </div>
        </div>
    )
}

export default NavBar;
