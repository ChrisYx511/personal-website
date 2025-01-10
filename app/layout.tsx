import type { Metadata } from "next"
import { Arimo, Inter } from "next/font/google"
import "./globals.css"
import React from "react"
import NavBar from "@/app/(components)/NavBar"

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
    <html
      lang="en"
      className={
        " from-indigo-400 to-cyan-400 bg-gradient-to-tr bg-no-repeat h-screen"
      }
    >
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
