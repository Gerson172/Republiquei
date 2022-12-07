import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import NavBar from '../../../components/NavBar'
import { type } from 'os'
import Image from 'next/image'
import { Imovel } from '../../../types/Imovel'


type AnnounceRepublicDataProps = {
    images: Array<string>
    accessibility: string,
    title: string;
    location: string;
    price: number;
    sex: string;
}


function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Republic( imovel: Imovel) {

    const reviews = { href: '#', average: 4, totalCount: 117 }
    const description = "Studio localizado na região central da Praia do Gonzaguinha em São Vicente. Próximo aos melhores bares, restaurantes. Fica a 3 quadras do shopping e região comercial da cidade onde conta com mais opções de alimentação, bancos, lojas e demais serviços."
    const highlights = [ 'Vista para a baía',
    'Vista para o mar',
    'Acesso Públicas ou compartilhadas à praia (à beira-mar)',
    'Cozinha',
    'Wi-Fi',
    'Estacionamento gratuito na rua',
    'HDTV de 50" com Netflix',
    'Elevador']

    const customLoader = ({ src }:any) => {
      return src
    }
  

  return (
    <>
    <NavBar/>
      <div className='bg-white h-screen md:h-full'>
        <div className="mx-auto pt-8 max-w-xl sm:px-6 lg:grid lg:max-w-4xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-4 aspect-auto aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
            <Image
              loader={customLoader}
              src={imovel.midia}
              alt={imovel.descricao}
              layout="responsive"
              width="100%"
              height="215%"
              objectFit="cover"
              className="object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <Image
                loader={customLoader}
                src={imovel.midia}
                alt={imovel.descricao}
                layout="responsive"
                width="100%"
                height="100%"
                objectFit="cover"
                className="object-center"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <Image
                loader={customLoader}
                src={imovel.midia}
                alt={imovel.descricao}
                layout="responsive"
                width="100%"
                height="100%"
                objectFit="cover"
                className="object-center"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
            <Image
              loader={customLoader}
              src={imovel.midia}
              alt={imovel.descricao}
              layout="responsive"
              width="100%"
              height="215%"
              objectFit="cover"
              className="object-center"
            />
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{imovel.descricao}</h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{imovel.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>

            <form className="mt-10">
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Falar com o Proprietario 
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{imovel.descricao}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">O que esse lugar oferece</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
