import type { Metadata } from "next"
import { Arimo, Inter } from "next/font/google"
import "./globals.css"
import React from "react"

const arimo = Arimo({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Chris Yang",
  description: "Chris's Personal Website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " from-indigo-400 to-cyan-400 bg-gradient-to-tr bg-no-repeat h-screen"
        }
      >
        <main>{children}</main>
      </body>
    </html>
  )
}
