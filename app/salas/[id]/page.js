'use client'

import React, { useState } from 'react'
import SocketComponent from "../../components/socketComponent/socketComponent"
import Link from 'next/link'

export default function Sala({params}) {

const id_sala = params.id



  return (
  <>
            <section className="bg-indigo-700 text-center">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-indigo-800 dark:border-indigo-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-indigo-700 md:text-2xl dark:text-white">
                                {params.id}
                            </h1>
                            <SocketComponent />
                            <Link href="/pendentes" type="submit" className="w-100px text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Ver Pendentes</Link>
                        </div>
                    </div>
                </div>
            </section>
  </>)
}