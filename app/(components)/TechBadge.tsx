interface TechBadgeProps {
  name: string
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200/60">
      {name}
    </span>
  )
}
