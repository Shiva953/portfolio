'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

type CopyEmailProps = {
  email: string
  className?: string
  iconClassName?: string
  children?: React.ReactNode
}

export function CopyEmail({
  email,
  className,
  iconClassName = 'h-3.5 w-3.5 shrink-0',
  children,
}: CopyEmailProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      toast.success('Email copied')
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard access can be blocked; opening the mail client still gets them to you.
      window.location.href = `mailto:${email}`
    }
  }

  const Icon = copied ? Check : Copy

  return (
    <button type="button" onClick={copy} aria-label={`Copy email address ${email}`} className={className}>
      {children}
      <Icon className={iconClassName} aria-hidden />
    </button>
  )
}
