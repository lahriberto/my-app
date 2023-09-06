import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/login.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <form className=" space-y-4 md:space-y-6" action="#">
        <div className='text-left'>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Email</label>
          <input type="email" name="email" id="email" className="bg-indigo-50 border border-indigo-300 text-indigo-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
        </div>
        <div className='text-left'>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Senha</label>
          <input type="password" name="password" id="password" placeholder="••••••••" className="bg-indigo-50 border border-indigo-300 text-indigo-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-indigo-300 rounded bg-indigo-50 focus:ring-3 focus:ring-primary-300 dark:bg-indigo-700 dark:border-indigo-600 dark:focus:ring-primary-600 dark:ring-offset-indigo-800" required="" />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="remember" className="text-indigo-500 dark:text-indigo-300">Manter Conectado</label>
            </div>
          </div>
          <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Esqueceu sua Senha?</a>
        </div>
        <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
        <p className="text-sm font-light text-indigo-500 dark:text-indigo-400">
          Não tem uma conta? <Link href="/registrar" className="font-medium text-indigo-600 hover:underline dark:text-primary-500">Criar Conta</Link>
        </p>
      </form>
    </main>
  )
}
