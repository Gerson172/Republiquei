import Image from 'next/image'
import Link from 'next/link'

const Welcome = () => {
  return (
    <>
      <div className="flex flex-col space-y-80">
        <div className="flex flex-wrap ">
          <div className="w-full lg:w-10/12 px-4">
            <p className="pt-20 pb-12 pl-32 font-bold text-6xl w-1/2 mb-4">
              ENCONTRE A SUA REPÚBLICA IDEAL
            </p>
          </div>
          <div className='pb-20 pl-40 w-1/2'>
            <q className="text-lg italic  ">
              Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.
              - Roberto Shinyashiki
            </q>
            <span className="pt-10">
              <Link href="https://uliving.com.br/blog/republica-estudantil-o-que-e-e-como-funciona/"> 
              <a className="text-blue-800 no-underline hover:underline">
                O que é uma república, e porque eu precisaria de uma?
              </a>
              </Link>
            </span>
            </div>
            </div>
        </div>
        <div className="absolute top-40 right-0 h-96 w-4/12  shadow-2xl rounded-lg blur-2xl">
        <Image alt='img' layout='responsive' width={10} height={10} src="https://i.pinimg.com/736x/b4/c0/ff/b4c0ff611b5bd34fcbd241e9e4ca76ce.jpg" />
        </div>
        <div className="absolute top-36 right-20 h-96 w-4/12  shadow-2xl rounded-lg">
        <Image alt='img' layout='responsive' width={10} height={10} src="https://i.pinimg.com/736x/b4/c0/ff/b4c0ff611b5bd34fcbd241e9e4ca76ce.jpg" />
      </div>
    </>
  )
}

export default Welcome;