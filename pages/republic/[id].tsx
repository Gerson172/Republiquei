import NavBar from '../../components/NavBar'
import Image from 'next/image'
import { Imovel } from '../../types/Imovel'
import AnnounceRepublic from '../../components/AnnounceRepublic'
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { useRouter } from 'next/router';
import { useFetch } from '../../hooks/useFetch';

export default function Republic() {


  const {id} = useRouter().query

  const { data: imovel } = useFetch<Imovel>('/Imovel/ObterImovelPorId?IdImovel='+id)

  return (
    <>
      <NavBar />
      <div className='bg-white h-screen md:h-full'>
        <div>
          <div>
            <img alt='' src={imovel?.midia} />
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{imovel?.descricao}</h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{imovel?.valor}</p>

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
                <p className="text-base text-gray-900">{imovel?.descricao}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">O que esse lugar oferece</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
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
