// Shell prompt in front of a heading. Only the heading text itself is read by screen readers.
export function Prompt({ command, children }: { command?: string; children?: React.ReactNode }) {
  return (
    <>
      <span aria-hidden className="select-none">
        <span className="text-live">$</span> {command && `${command} `}
      </span>
      {children}
    </>
  )
}

// Fixed page background: soft corner glow plus a dot grid.
export function Backdrop() {
  return (
    <>
      <div className="gradient-blur pointer-events-none fixed inset-0 -z-10" />
      <div className="dot-grid pointer-events-none fixed inset-0 -z-10" />
    </>
  )
}
