import Image from 'next/image'
import { Inter } from 'next/font/google'

import Navbar from '../components/Navbar';
import LearnAnythingIcon from '../components/icons/LearnAnythingIcon';
import ArrowRightIcon from '../components/icons/ArrowRightIcon';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <main className={`${inter.className}`}>
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="mb-8">
            <LearnAnythingIcon className="w-14 h-14 text-white/75" />
          </div>
          <h2 className="text-4xl font-bold text-white/75 mb-4">
            What Hurdles Are You Facing?
          </h2>
          <form className="w-full max-w-md">
            <div className="flex items-center border border-2 rounded border-slate-500 bg-slate-500/50 py-2">
              <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Ask Anything..." aria-label="Ask Anything" />
              <button className="flex-shrink-0 bg-transparent text-sm text-white py-1 px-2 rounded flex items-center">
                <ArrowRightIcon />
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
