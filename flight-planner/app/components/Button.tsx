'use client'

import Link from 'next/link'

type Props = {
  onClick?: () => void
  text?: string
  link?: string
}

export default function Button({onClick, text, link}: Props) {
  const baseClass = `border-2 border-white rounded-none p-2 m-2 cursor-pointer`

  if (link) {
    return (
      <Link href={link}>
        <div className={baseClass}>
          {text || 'button'}
        </div>
      </Link>
    )
  }

  return (
    <button 
      onClick={onClick}
      className={baseClass}
    >
      {text || 'button'}
    </button>
  )
}