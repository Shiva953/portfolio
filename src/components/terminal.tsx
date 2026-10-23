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

