// Shell prompt in front of a heading, with the command dimmed so the heading text leads.
// Only the heading text itself is read by screen readers.
export function Prompt({ command, children }: { command?: string; children?: React.ReactNode }) {
  return (
    <>
      <span aria-hidden className="select-none">
        <span className="text-live">$</span>{' '}
        {command && <span className="text-muted">{command} </span>}
      </span>
      {children}
    </>
  )
}

