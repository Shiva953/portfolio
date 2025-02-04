'use client'

import { Copy } from "lucide-react"
import { toast } from "sonner"
import { Roboto_Mono } from "next/font/google"

const roboto = Roboto_Mono({style: ["normal"], subsets: ["latin", "latin-ext"]})

interface WalletAddressProps {
  address: string
}

export function WalletAddress({ address }: WalletAddressProps) {
  const truncateAddress = (address: string) => {
    if (address.length <= 9) return address
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }

  return (
    <div className={"flex gap-3 items-center rounded-lg bg-zinc-900 px-2 py-2 text-sm text-zinc-100"}>
      <div className="h-4 w-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-900" aria-hidden="true" />
      <span className={`font-medium text-[0.8125rem] ${roboto.className} tracking-tight hover:underline hover:cursor-pointer`} onClick={() => {window.open(`https://solscan.io/address/${address}`)}}>{truncateAddress(address)}</span>
      <button
        className="h-6 w-4 text-zinc-400 hover:text-zinc-100 focus:outline-none focus:ring-offset-zinc-900 rounded-full"
        aria-label="Copy address"
      >
        <Copy className="h-3 w-3" onClick={() => {toast.success("Copied Wallet Address")}}/>
      </button>
    </div>
  )
}

