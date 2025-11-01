/* eslint-disable @typescript-eslint/no-unused-vars */
import { Mail, Github, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import localFont from 'next/font/local'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import {Roboto_Mono} from "next/font/google"
import { Inter } from 'next/font/google'
import { WalletAddress } from '@/components/WalletAddress'

const roboto = Roboto_Mono({style: ["normal"], subsets: ["latin", "latin-ext"]})

const inter = Inter({style: ["normal", "italic"], subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"]})

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
          <h1 className={`text-3xl font-bold text-white tracking-tight ${supply.className}`}>SHIVA</h1>
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
        {/* Custom selection style for about section */}
        <style>
          {`
            .about-section *::selection, .about-section::selection {
              background: #fff !important;
              color: #000 !important;
            }
            .about-section *::-moz-selection, .about-section::-moz-selection {
              background: #fff !important;
              color: #000 !important;
            }
          `}
        </style>
        <section
          className="space-y-4 about-section"
          style={{
            fontFamily: 'Inter, -apple-system, "system-ui", sans-serif',
            fontSize: '14.6px',
            fontWeight: 400,
            lineHeight: '22.4px',
            color: 'rgb(153, 153, 153)',
          }}
        >
          <h1 className={`text-white tracking-tighter mb-4`} style={{
            fontFamily: 'Inter, -apple-system, "system-ui", sans-serif',
            fontSize: '28px',
            fontWeight: 600,
            lineHeight: '36px',
            color: 'rgb(255, 255, 255)',
          }}>about</h1>
          
          <p style={{ maxWidth: '48rem' }} className='tracking-tight'>
            hi, I{"'"}m <span style={{ color: 'rgb(153, 153, 153)', fontWeight: 400 }}>shiva</span>. i{"'"}m a full-stack solana engineer and a self-taught developer. won{' '}
            <span style={{ color: 'rgb(234, 234, 234)', cursor: 'pointer' }}>2 hackathons</span> previously, also a{' '}
            <span style={{ color: 'rgb(234, 234, 234)', cursor: 'pointer' }}>solana foundation</span> grantee. love to build, contribute to <span style={{ color: 'rgb(234, 234, 234)', cursor: 'pointer' }}>open source</span> occasionally.
          </p>
          <p>
            i like nerding about cryptography and the math behind DeFi. you can find me on{' '}
            <span style={{ cursor: 'pointer', color: 'rgb(234, 234, 234)' }}>
              <Link href={"https://github.com/Shiva953"}>github</Link>
            </span>
            , or dm me on{' '}
            <span style={{ cursor: 'pointer', color: 'rgb(234, 234, 234)' }}>
              <Link href={"https://x.com/Neutron975"}>X</Link>
            </span>
            .
          </p>
          <p>
            member at{'  '}
            <span style={{ cursor: 'pointer', color: 'white' }} className='tracking-tigher'>
              @superteamIN
            </span>
            .
          </p>
        </section>
        
      {/* Experience */}
      <section className="space-y-2 text-sm tracking-wide">
      <h1 className={`text-white tracking-tighter mb-6`} style={{
        fontFamily: 'Inter, -apple-system, "system-ui", sans-serif',
        fontSize: '28px',
        fontWeight: 600,
        lineHeight: '36px',
        color: 'rgb(255, 255, 255)',
        }}>work</h1>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src="/glympse.png"
                alt="GlympseDotFun"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className={`flex items-center justify-between ${montreal.className} cursor-pointer`}>
                <div>
                <Link href={"https://glympse.fun"}>
                  <div className="group flex items-center gap-2">
                    <h3 className="font-bold text-white">GlympseDotFun</h3>
                    <ChevronRight className="h-4 w-4 transform opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:opacity-100 text-white" />
                  </div>
                  </Link>
                  
                  <p className="text-white/60 tracking-tight custom-selection" 
                  style={{ fontFamily: 'Inter, -apple-system, "system-ui", sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '22.4px',
                  color: 'rgb(153, 153, 153)',
                }}>
                    <style>
                    {`
                      .custom-selection::selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                      .custom-selection::-moz-selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                    `}
                    </style>
                    product engineering & solana protocol development
                  </p>
                </div>
                <span className="text-gray-400">Aug to Nov 2025</span>
              </div>
            </div>
          </div>
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
                  
                  <p className="text-white/60 tracking-tight custom-selection" 
                  style={{ fontFamily: 'Inter, -apple-system, "system-ui", sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '22.4px',
                  color: 'rgb(153, 153, 153)',
                }}>
                    <style>
                    {`
                      .custom-selection::selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                      .custom-selection::-moz-selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                    `}
                    </style>
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
                  <p className="text-white/60 tracking-tight custom-selection" 
                  style={{ fontFamily: 'Inter, -apple-system, "system-ui", sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '22.4px',
                  color: 'rgb(153, 153, 153)',
                }}>
                    <style>
                    {`
                      .custom-selection::selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                      .custom-selection::-moz-selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                    `}
                    </style>
                  Got numerous gigs from platforms like Superteam Earn and Gibwork</p>
                </div>
                <span className="text-gray-400">July 2024 - Present</span>
            </div>
          </div>
        </div>
      </div>
    </section>

        {/* Projects */}
        <section className="space-y-2">
        <h1 className={`text-white tracking-tighter mb-6`} style={{
        fontFamily: 'Inter, -apple-system, "system-ui", sans-serif',
        fontSize: '28px',
        fontWeight: 600,
        lineHeight: '36px',
        color: 'rgb(255, 255, 255)',
        }}>projects</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-16">
            <Link href="https://gorclash.fun" className="group w-full max-w-[30rem]">
              <div className="space-y-4">
                <div className="relative w-full h-[250px] overflow-hidden rounded-lg">
                  <video
                    src="/gorclash-preview.mp4"
                    className="object-cover w-full h-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/gorclash.png"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${montreal.className}`}>Gorclash</h3>
                    <span className="text-gray-400 text-sm">2025</span>
                  </div>
                  <p className="text-white/65 tracking-tight custom-selection" 
                  style={{ fontFamily: 'Inter, -apple-system, "system-ui", sans-serif',
                  fontSize: '12.8px',
                  fontWeight: 400,
                  lineHeight: '22.4px',
                  color: 'rgb(153, 153, 153)',
                  }}>
                    <style>
                    {`
                      .custom-selection::selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                      .custom-selection::-moz-selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                    `}
                    </style>
                    a mini-multiplayer arcade styled game built on gorbagana, a solana L2. <br/>
                  </p>
                </div>
              </div>
            </Link>
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
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${montreal.className}`}>belzin</h3>
                    <span className="text-gray-400 text-sm">2025</span>
                  </div>
                  <p className="text-white/65 tracking-tight custom-selection" 
                  style={{ fontFamily: 'Inter, -apple-system, "system-ui", sans-serif',
                  fontSize: '12.8px',
                  fontWeight: 400,
                  lineHeight: '22.4px',
                  color: 'rgb(153, 153, 153)',
                }}>
                    <style>
                    {`
                      .custom-selection::selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                      .custom-selection::-moz-selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                    `}
                    </style>
                    ai-agent powered p2p group chat betting. received a <span className='text-white/90'>$3000 grant</span> from the <span className="text-white/90">solana foundation</span>.
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
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${montreal.className}`}>univault</h3>
                    <span className="text-gray-400 text-sm">2024</span>
                  </div>
                  <p className="text-white/65 tracking-tight custom-selection" 
                  style={{ fontFamily: 'Inter, -apple-system, "system-ui", sans-serif',
                  fontSize: '12.8px',
                  fontWeight: 400,
                  lineHeight: '22.4px',
                  color: 'rgb(153, 153, 153)',
                }}>
                    <style>
                    {`
                      .custom-selection::selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                      .custom-selection::-moz-selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                    `}
                    </style>
                    squads multi-sig management using solana blinks and actions
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
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${montreal.className}`}>oss contributions</h3>
                    <span className="text-gray-400 text-sm">2024-25</span>
                  </div>
                  <p className="text-white/65 tracking-tight custom-selection" 
                  style={{ fontFamily: 'Inter, -apple-system, "system-ui", sans-serif',
                  fontSize: '12.8px',
                  fontWeight: 400,
                  lineHeight: '22.4px',
                  color: 'rgb(153, 153, 153)',
                }}>
                    <style>
                    {`
                      .custom-selection::selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                      .custom-selection::-moz-selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                    `}
                    </style>
                    some of my merged prs in open source repositories, including the official anchor repo
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
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${montreal.className}`}>liquotic</h3>
                    <span className="text-gray-400 text-sm">2024</span>
                  </div>
                  <p className="text-white/65 tracking-tight custom-selection" 
                  style={{ fontFamily: 'Inter, -apple-system, "system-ui", sans-serif',
                  fontSize: '12.8px',
                  fontWeight: 400,
                  lineHeight: '22.4px',
                  color: 'rgb(153, 153, 153)',
                }}>
                    <style>
                    {`
                      .custom-selection::selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                      .custom-selection::-moz-selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                    `}
                    </style>
                    buy NFTs with any SPL token
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
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${montreal.className}`}>openvest</h3>
                    <span className="text-gray-400 text-sm">2024</span>
                  </div>
                  <p className="text-white/65 tracking-tight custom-selection" 
                  style={{ fontFamily: 'Inter, -apple-system, "system-ui", sans-serif',
                  fontSize: '12.8px',
                  fontWeight: 400,
                  lineHeight: '22.4px',
                  color: 'rgb(153, 153, 153)',
                }}>
                    <style>
                    {`
                      .custom-selection::selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                      .custom-selection::-moz-selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                    `}
                    </style>
                    create token vesting schedules for company employees
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
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${montreal.className}`}>sol-clix</h3>
                    <span className="text-gray-400 text-sm">2024</span>
                  </div>
                  <p className="text-white/65 tracking-tight custom-selection" 
                  style={{ fontFamily: 'Inter, -apple-system, "system-ui", sans-serif',
                  fontSize: '12.8px',
                  fontWeight: 400,
                  lineHeight: '22.4px',
                  color: 'rgb(153, 153, 153)',
                  }}>
                    <style>
                    {`
                      .custom-selection::selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                      .custom-selection::-moz-selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                    `}
                    </style>
                    a minimal, terminal based solana cli wallet.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="https://github.com/Shiva953/Picovault" className="group w-full max-w-[30rem]">
              <div className="space-y-4">
                <div className="relative w-full h-[250px] overflow-hidden rounded-lg">
                  <Image
                    src="/solclix.png"
                    alt="picovault"
                    fill
                    className="object-cover image-glow opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${montreal.className}`}>picovault</h3>
                    <span className="text-gray-400 text-sm">2024</span>
                  </div>
                  <p className="text-white/65 tracking-tight custom-selection" 
                  style={{ fontFamily: 'Inter, -apple-system, "system-ui", sans-serif',
                  fontSize: '12.8px',
                  fontWeight: 400,
                  lineHeight: '22.4px',
                  color: 'rgb(153, 153, 153)',
                  }}>
                    <style>
                    {`
                      .custom-selection::selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                      .custom-selection::-moz-selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                    `}
                    </style>
                    a redis-like key-value store implementation in rust.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="https://github.com/Shiva953/ecdsa-rust" className="group w-full max-w-[30rem]">
              <div className="space-y-4">
                <div className="relative w-full h-[250px] overflow-hidden rounded-lg">
                  <Image
                    src="/ECC.png"
                    alt="ecdsa"
                    fill
                    className="object-cover image-glow opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${montreal.className}`}>ECDSA</h3>
                    <span className="text-gray-400 text-sm">2024</span>
                  </div>
                  <p className="text-white/65 tracking-tight custom-selection" 
                  style={{ fontFamily: 'Inter, -apple-system, "system-ui", sans-serif',
                  fontSize: '12.8px',
                  fontWeight: 400,
                  lineHeight: '22.4px',
                  color: 'rgb(153, 153, 153)',
                  }}>
                    <style>
                    {`
                      .custom-selection::selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                      .custom-selection::-moz-selection {
                        background: #fff !important;
                        color: #000 !important;
                      }
                    `}
                    </style>
                    elliptic curve digital signature algorithm(ECDSA) implementation for signing and verifying messages
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