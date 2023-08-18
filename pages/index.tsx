import Image from 'next/image'
import { Inter } from 'next/font/google'

import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div id="root" className='bg-indigo-950'>
      <Navbar />
      <main className={`${inter.className}`}>
        Main content
      </main>
    </div>
  )
}
