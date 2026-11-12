import { Over_the_Rainbow } from "next/font/google"
const overTheRainbow = Over_the_Rainbow({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  fallback: ["serif"],
})

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[calc(100vh-68px)]">
      <div className="bg-white rounded-2xl p-10 md:p-14 shadow-sm max-w-2xl w-full">
        <h2 className={overTheRainbow.className + " " + "text-2xl mb-6"}>
          chris yang
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          building cool things, some of which that fly 🌐 🚀 🪄✨
        </p>
        <p className="mb-6 text-gray-700">Feel free to reach out!</p>
        <div className="flex flex-col lg:flex-row gap-3 text-gray-600">
          <Link
            href={"mailto:chrisyx511@gmail.com"}
            className="flex items-center gap-1.5 text-sm hover:text-indigo-600 transition-colors"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-4" />
            chrisyx511@gmail.com
            <FontAwesomeIcon icon={faUpRightFromSquare} className="h-2.5" />
          </Link>
          <Link
            href={"https://github.com/ChrisYx511"}
            className="flex items-center gap-1.5 text-sm hover:text-indigo-600 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} className="h-4" />
            ChrisYx511
            <FontAwesomeIcon icon={faUpRightFromSquare} className="h-2.5" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/chris-yang-b01a871bb/"}
            className="flex items-center gap-1.5 text-sm hover:text-indigo-600 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-4" />
            Chris Yang
            <FontAwesomeIcon icon={faUpRightFromSquare} className="h-2.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
