import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import localFont from 'next/font/local'
import { ExternalLink } from 'lucide-react'

const supply = localFont({
  src: '../../font/Supply-Regular.otf',
  display: 'swap',
})

const montreal = localFont({
  src: '../../font/NeueMontreal-Regular.otf',
  display: 'swap',
})

const projects = {
  'belzin': {
    title: 'Belzin',
    year: '2025',
    overview: 'AI-Agent Powered P2P Group Chat Betting platform built on Solana. The project leverages machine learning to provide intelligent betting suggestions and risk assessment.',
    'live': 'https://belzin.vercel.app',
    'url' : 'https://github.com/Shiva953/Belzin',
    image: '',
    tools: ['Next.js', 'TypeScript', 'Rust', 'Prisma', 'PostgreSQL']
  },
  'univault': {
    title: 'Univault',
    year: '2024',
    'live': 'https://univault.xyz',
    'url' : 'https://github.com/Shiva953/Univault',
    overview: 'Squads Multisig Management using Solana Blinks, providing a seamless and secure way to manage multi-signature wallets with enhanced UX.',
    image: '',
    tools: ['Typescript', 'NextJS', 'Solana Actions', 'Blinks']
  },
  'liquotic': {
    title: 'Liquotic',
    year: '2024',
    'live': 'https://liquotic.vercel.app',
    'url' : 'https://github.com/Shiva953/Liquotic',
    overview: 'Liquotic lets you buy an NFT with any SPL-token(like USDC) rather than only SOL.',
    image: '',
    tools: ['Typescript', 'NextJS', 'Solana Actions', 'Prisma', 'PostgresSQL']
  },
  'openvest': {
    title: 'Openvest',
    year: '2024',
    'live': 'https://openvest.vercel.app',
    'url' : 'https://github.com/Shiva953/openvest',
    overview: 'Lets you create token vesting schedules for your company employees. Lock the supply into the company vault, and then choose the vest duration per choice.',
    image: '',
    tools: ['Typescript', 'NextJS', 'Anchor', 'Rust']
  },
}

export default async function ProjectPage({ params }: { params: { slug: Promise<string> } }) {
  const slugF = await params.slug
  const project = projects[slugF as keyof typeof projects]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to projects
        </Link>

        {/* Project Header */}
        <div className="space-y-4 mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold ${montreal.className}`}>
            {project.title}
          </h1>
          <div className={`flex gap-6 text-gray-400 font-semibold ${supply.className}`}>
              <a 
                href={project.live}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <span>Live</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href={project.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <span>Github</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
        </div>

        {/* Project Content Grid */}
        <div className="grid md:grid-cols-[1fr,1fr] gap-12">
          {/* Left Column - Image */}
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-12">
            {/* Overview Section */}
            <div>
              <h2 className={`text-xl font-bold mb-4 ${supply.className}`}>Overview</h2>
              <div className={`prose prose-invert max-w-none ${montreal.className}`}>
                <p className="text-white/70 font-bold tracking-wide text-lg leading-relaxed">
                {project.title == 'Belzin' && (
                    <>
                      AI-Agent Powered P2P Group Chat Betting platform built using the solana agent kit. Received a $3000 Grant from the <span className='text-white underline font-extrabold'>Solana Foundation</span>.
                    </>
                  )}

                  {project.title == 'Univault' && (
                    <>
                      All-In-One Squads Multisig Management using solana blinks. Send Vault Transactions and Vote on them, directly through a blink. <span className='text-white underline hover:cursor-pointer'>Blinkathon 2024 Winner</span> under Squads Track
                    </>
                  )}
                  {project.title == 'Liquotic' && (
                    <>
                      Liquotic lets you buy an NFT with any SPL-token(like USDC) rather than only SOL.
                    </>
                  )}
                  {project.title == 'Openvest' && (
                    <>
                      Lets you create token vesting schedules for your company employees. Lock the supply into the company vault, and then choose the vest duration per choice.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Tools Section */}
            <div>
              <h2 className={`text-xl font-bold mb-4 ${supply.className}`}>Tools</h2>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className={`px-3 py-1 rounded-full bg-white/5 text-gray-300 ${montreal.className}`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Timeline Section */}
           
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="fixed inset-0 -z-10 gradient-blur" />
    </main>
  )
}