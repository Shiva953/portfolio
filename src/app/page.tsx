import { Mail, Github, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'

const supply = localFont({
  src: './font/Supply-Regular.otf',
  display: 'swap',
})

const montreal = localFont({
  src: './font/NeueMontreal-Regular.otf',
  display: 'swap',
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-6 space-y-24">
        {/* Header */}
        <header className="flex justify-between items-start">
          <h1 className={` text-3xl font-bold text-white ${supply.className}`}>SHIVA</h1>
          <div className="flex gap-4">
            <Link href="https://github.com/Shiva953" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://x.com/Neutron975" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="mailto:shivaset2@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className={`space-y-4 tracking-wide ${montreal.className}`}>
          <p className="text-[1.12rem] text-white/75 max-w-3xl">
            Full-Stack Solana Engineer and a self-taught developer. Won{' '}
            <span className='text-white underline hover:cursor-pointer'>2 Hackathons</span> previously, also a{' '}
            <span className='text-white underline hover:cursor-pointer'>Solana Foundation</span> Grantee. Love to build, contribute to <span className='text-white underline hover:cursor-pointer'>open source</span> occasionally.
          </p>
          <p className="text-[1.12rem] text-white/70">
            You can find me on <span className='text-white underline hover:cursor-pointer'>github</span>, or DM me on <span className='text-white underline hover:cursor-pointer'>X</span>.
          </p>
          <p className="text-[1.25rem] text-white font-semibold">
            Member at @<span className='underline hover:cursor-pointer'>SuperteamIN</span>
          </p>
        </section>

        {/* Projects */}
        <section className="space-y-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-16">
            <Link href="/projects/belzin" className="group w-full max-w-xl">
              <div className="space-y-4">
                <div className="relative w-full h-[360px] overflow-hidden rounded-lg">
                  <Image
                    src=""
                    alt="Sandbox Project"
                    fill
                    className="object-cover image-glow"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${supply.className}`}>BELZIN</h3>
                    <span className="text-gray-400">2025</span>
                  </div>
                  <p className={`opacity-65 font-medium ${montreal.className}`}>
                    AI-Agent Powered P2P Group Chat Betting
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/projects/univault" className="group w-full max-w-xl">
              <div className="space-y-4">
                <div className="relative w-full h-[360px] overflow-hidden rounded-lg">
                  <Image
                    src=""
                    alt="Arceus Project"
                    fill
                    className="object-cover image-glow"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${supply.className}`}>UNIVAULT</h3>
                    <span className="text-gray-400">2024</span>
                  </div>
                  <p className={`opacity-65 font-medium ${montreal.className}`}>
                    Squads Multisig Management using Solana Blinks
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/projects/liquotic" className="group w-full max-w-xl">
              <div className="space-y-4">
                <div className="relative w-full h-[360px] overflow-hidden rounded-lg">
                  <Image
                    src=""
                    alt="Sandbox Project"
                    fill
                    className="object-cover image-glow"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${supply.className}`}>LIQUOTIC</h3>
                    <span className="text-gray-400">2024</span>
                  </div>
                  <p className={`opacity-65 font-medium ${montreal.className}`}>
                    Buy NFTs with any SPL-Token
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/projects/openvest" className="group w-full max-w-xl">
              <div className="space-y-4">
                <div className="relative w-full h-[360px] overflow-hidden rounded-lg">
                  <Image
                    src=""
                    alt="Arceus Project"
                    fill
                    className="object-cover image-glow"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${supply.className}`}>OPENVEST</h3>
                    <span className="text-gray-400">2024</span>
                  </div>
                  <p className={`opacity-65 font-medium ${montreal.className}`}>
                    Create Token Vesting Schedules for Company Employees
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>

      {/* Background gradient */}
      <div className="fixed inset-0 -z-10 gradient-blur" />
    </main>
  )
}