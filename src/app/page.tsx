/* eslint-disable @typescript-eslint/no-unused-vars */
import { Mail, Github, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import localFont from 'next/font/local'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import {Roboto_Mono} from "next/font/google"
import { WalletAddress } from '@/components/WalletAddress'

const roboto = Roboto_Mono({style: ["normal"], subsets: ["latin", "latin-ext"]})

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
      <div className="max-w-4xl mx-auto px-6 py-6 space-y-12">
        {/* Header */}
        <header className="flex justify-between items-start">
        <div className='flex flex-row items-center gap-x-4'>
          <h1 className={` text-3xl font-bold text-white ${supply.className}`}>SHIVA</h1>
          <WalletAddress address={"792FsxG2Co6rDAwudPCW1bJp8VwkzVThdSGPPZJpswE5"}/>
        </div>
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
        <section className={`space-y-4 ${montreal.className}`}>
          <p className="text-[1rem] tracking-[0.0175rem] text-white/60 max-w-3xl">
            Hi, I{"'"}m Shiva. I{"'"}m a full-stack solana engineer and a self-taught developer. Won{' '}
            <span className='text-white font-semibold hover:cursor-pointer'>2 Hackathons</span> previously, also a{' '}
            <span className='text-white font-semibold hover:cursor-pointer'>Solana Foundation</span> Grantee. Love to build, contribute to <span className='text-white font-semibold hover:cursor-pointer'>open source</span> occasionally.
          </p>
          <p className="text-[1rem] tracking-[0.0175rem] text-white/70">
            I like nerding about cryptography and the math behind DeFi. You can find me on <span className='text-white underline hover:cursor-pointer'><Link href={"https://github.com/Shiva953"}>github</Link></span>, or DM me on <span className='text-white underline hover:cursor-pointer'><Link href={"https://x.com/Neutron975"}>X</Link></span>.
          </p>
          <p className="text-[1rem] tracking-[0.0175rem] text-white font-extrabold">
            Member at @<span className='underline hover:cursor-pointer'>SuperteamIN</span>
          </p>
        </section>

        <h2 className={`text-2xl text-white font-extrabold tracking-wide mb--8 ${montreal.className}`}>Work</h2>

      {/* Experience */}
      <section className="space-y-2 text-sm tracking-wide">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src="/STINDIA.jpg"
                alt="Superteam"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className={`flex items-center justify-between ${montreal.className} cursor-pointer`}>
                <div>
                <Link href={"https://superteam.fun"}>
                  <div className="group flex items-center gap-2">
                    <h3 className="font-bold text-white">Superteam</h3>
                    <ChevronRight className="h-4 w-4 transform opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:opacity-100 text-white" />
                  </div>
                  </Link>
                  
                  <p className="text-white/60">
                    Member, Contributing to the Solana Ecosystem
                  </p>
                </div>
                <span className="text-gray-400">January 2025 - Present</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image src="/earn.jpg" alt="freelance" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <div className={`flex items-center justify-between ${montreal.className}`}>
                <div>
                <Link href={"https://earn.superteam.fun/t/shiva7343/"}>
                  <div className="group flex items-center gap-2">
                    <h3 className="font-bold text-white">Freelance | Superteam Earn & Gibwork</h3>
                    <ChevronRight className="h-4 w-4 transform opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:opacity-100 text-white" />
                  </div>
                  </Link>
                  <p className="text-white/60">Got numerous gigs from platforms like Superteam Earn and Gibwork</p>
                </div>
                <span className="text-gray-400">July 2024 - Present</span>
            </div>
          </div>
        </div>
      </div>
    </section>

      <h2 className={`text-2xl text-white font-extrabold tracking-wide ${montreal.className}`}>Projects</h2>

        {/* Projects */}
        <section className="space-y-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-16">
            <Link href="/projects/belzin" className="group w-full max-w-[30rem]">
              <div className="space-y-4">
                <div className="relative w-full h-[250px] overflow-hidden rounded-lg">
                  <Image
                    src="/belzin.png"
                    alt="Belzin"
                    fill
                    className="object-cover image-glow opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${montreal.className}`}>Belzin</h3>
                    <span className="text-gray-400">2025</span>
                  </div>
                  <p className={`text-white/65 tracking-tight font-[400] text-[0.8rem] ${roboto.className}`}>
                    AI-Agent Powered P2P Group Chat Betting. Received a <span className='text-white/90'>$3000 grant</span> from the <span className="text-white/90">Solana Foundation</span>.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/projects/univault" className="group w-full max-w-[30rem]">
              <div className="space-y-4">
                <div className="relative w-full h-[250px] overflow-hidden rounded-lg">
                  <Image
                    src="/univault.png"
                    alt="Univault"
                    fill
                    className="object-cover image-glow opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${montreal.className}`}>Univault</h3>
                    <span className="text-gray-400">2024</span>
                  </div>
                  <p className={`text-white/65 tracking-tight font-[400] text-[0.8rem] ${roboto.className}`}>
                    Squads Multi-sig Management using Solana Blinks and Actions
                  </p>
                </div>
              </div>
            </Link>
            <Link href="https://github.com/pulls?q=is%3Amerged+is%3Apr+author%3AShiva953+archived%3Afalse+" className="group w-full max-w-[30rem]">
              <div className="space-y-4">
                <div className="relative w-full h-[250px] overflow-hidden rounded-lg">
                  <Image
                    src="/oss.png"
                    alt="OSS"
                    fill
                    className="object-cover image-glow opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${montreal.className}`}>OSS Contributions</h3>
                    <span className="text-gray-400">2024-25</span>
                  </div>
                  <p className={`text-white/65 tracking-tight font-[400] text-[0.8rem] ${roboto.className}`}>
                    Some of my merged PRs in open source repositories, including the official anchor repo
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/projects/liquotic" className="group w-full max-w-[30rem]">
              <div className="space-y-4">
                <div className="relative w-full h-[250px] overflow-hidden rounded-lg">
                  <Image
                    src="/liquotic.jpg"
                    alt="Liquotic"
                    fill
                    className="object-cover image-glow opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${montreal.className}`}>Liquotic</h3>
                    <span className="text-gray-400">2024</span>
                  </div>
                  <p className={`text-white/65 tracking-tight font-[400] text-[0.8rem] ${roboto.className}`}>
                    Buy NFTs with any SPL-Token
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/projects/openvest" className="group w-full max-w-[30rem]">
              <div className="space-y-4">
                <div className="relative w-full h-[250px] overflow-hidden rounded-lg">
                  <Image
                    src="/openvest.png"
                    alt="OpenVest"
                    fill
                    className="object-cover image-glow opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${montreal.className}`}>OpenVest</h3>
                    <span className="text-gray-400">2024</span>
                  </div>
                  <p className={`text-white/65 tracking-tight font-[400] text-[0.8rem] ${roboto.className}`}>
                    Create Token Vesting Schedules for Company Employees
                  </p>
                </div>
              </div>
            </Link>
            <Link href="https://github.com/Shiva953/sol-clix" className="group w-full max-w-[30rem]">
              <div className="space-y-4">
                <div className="relative w-full h-[250px] overflow-hidden rounded-lg">
                  <Image
                    src="/solclix.png"
                    alt="solclix"
                    fill
                    className="object-cover image-glow opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${montreal.className}`}>SOL-CLIX</h3>
                    <span className="text-gray-400">2024</span>
                  </div>
                  <p className={`text-white/65 tracking-tight font-[400] text-[0.8rem] ${roboto.className}`}>
                    A minimal, terminal based solana CLI Wallet.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>

      <div className="fixed inset-0 -z-10 gradient-blur" />
    </main>
  )
}