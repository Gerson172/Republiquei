import Image from 'next/image';
import Link from 'next/link';
import {
	BsFacebook,
	BsInstagram,
	BsTwitter,
	BsLinkedin
}
	from "react-icons/bs"


function Footer() {
	return (
		<footer className="bg-white border-t-2">
			<div className='flex flex-wrap gap-8 flex-row justify-between w-full text-slate-950 px-16 pt-12 pb-20'>
				<div>
					<h2 className='font-semibold'>A Repúbliquei</h2>
					<Link href="sobre">
						<p>Sobre nós</p>
					</Link>
					<Link href="seja-um-proprietario">
						<p>Para Proprietários</p>
					</Link>
					<Link href="">
						<p>Para Universidades</p>
					</Link>
				</div>
				<div>
					<h2 className='font-semibold'>Central de Ajuda</h2>
					<Link href="">
						<p>Contato</p>
					</Link>
					<Link href="">
						<p>Perguntas Frequentes</p>
					</Link>
				</div>
				<div>
					<h2 className='font-semibold'>Juridico</h2>
					<Link href="">
						<p>Termos de Uso</p>
					</Link>
					<Link href="">
						<p>Pólitcas de Privacidade</p>
					</Link>
				</div>
				<div className='flex items-center justify-center gap-2 max-sm:w-full'>
					<Image
						src="./favicon.png"
						width={60}
						height={100}
						alt={''} />
					<span>
						<h2 className='text-4xl font-bold text-sky-500'>REPUBLIQUEI</h2>
						<p>Encontre a república que é a sua cara!</p>
					</span>

				</div>
			</div>
			<div className='bg-gray-100 text-slate-800 flex flex-row max-sm:flex-col max-sm:text-sm w-full h-12 justify-around items-center'>
				<p className='font-semibold'>Copyright 2023 Republiquei. Todos os direitos reservados</p>
				<span className='flex flex-row gap-4 m'>
					<BsFacebook />
					<BsInstagram />
					<BsTwitter />
					<BsLinkedin />
				</span>
			</div>
		</footer>

	);
}

export default Footer;
