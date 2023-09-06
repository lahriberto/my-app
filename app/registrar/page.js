import React from 'react';
import Link from 'next/link';

export default function registrar() {
    return (
        <>
            <section className="bg-indigo-700 text-center">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-indigo-800 dark:border-indigo-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-indigo-700 md:text-2xl dark:text-white">
                                Criar Conta
                            </h1>
                            <form className=" space-y-4 md:space-y-6" action="#">
                                <div className='text-left'>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-indigo-700 dark:text-white">Nome</label>
                                    <input type="text" name="nome" id="nome" className="bg-indigo-50 border border-indigo-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abdullah Moiz" required="" />
                                </div>
                                <div className='text-left'>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-700 dark:text-white">Email</label>
                                    <input type="email" name="email" id="email" className="bg-indigo-50 border border-indigo-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div className='text-left'>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-indigo-700 dark:text-white">Senha</label>
                                    <input type="password" name="senha" id="senha" placeholder="••••••••" className="bg-indigo-50 border border-indigo-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>

                                <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Criar Conta</button>
                                <p className="text-sm font-light text-indigo-500 dark:text-indigo-400">
                                    Já tenho uma conta!  <Link href="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Entrar</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}