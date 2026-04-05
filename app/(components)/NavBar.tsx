"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Over_the_Rainbow } from "next/font/google"

const overTheRainbow = Over_the_Rainbow({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  fallback: ["serif"],
})

function NavBar() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
  ]

  return (
    <nav className="max-w-5xl mx-auto flex flex-row items-center px-6 py-5">
      <div className="flex-none mr-8">
        <Link href="/">
          <h2
            className={
              overTheRainbow.className +
              " text-xl text-white hover:text-white/80 transition-colors"
            }
          >
            chris yang
          </h2>
        </Link>
      </div>
      <div className="flex flex-row gap-5">
        {links.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                isActive
                  ? "text-white font-medium"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              {link.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default NavBar
