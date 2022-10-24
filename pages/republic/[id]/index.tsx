import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import NavBar from '../../../components/NavBar'
import { AnnounceRepublicData } from '../../searchRepublic'
import { type } from 'os'


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

export default function Republic() {

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

  return (
    <>
    <NavBar/>
      <div>
        <div className="mx-auto mt-6 max-w-xl sm:px-6 lg:grid lg:max-w-4xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-4 aspect-auto aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={AnnounceRepublicData[0].images[0]}
              alt={AnnounceRepublicData[0].acessibility}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={AnnounceRepublicData[0].images[1]}
                alt={AnnounceRepublicData[0].acessibility}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={AnnounceRepublicData[0].images[2]}
                alt={AnnounceRepublicData[0].acessibility}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={AnnounceRepublicData[0].images[2]}
              alt={AnnounceRepublicData[0].acessibility}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{AnnounceRepublicData[0].title}</h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{AnnounceRepublicData[0].price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-yellow-500' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

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
                <p className="text-base text-gray-900">{description}</p>
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
