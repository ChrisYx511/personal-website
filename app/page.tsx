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
    <div className=" h-screen w-screen flex flex-col justify-center align-middle">
      <div className="flex flex-row justify-center align-middle">
        <div className="flex flex-col bg-white p-8 rounded-lg max-w-2xl">
          <h2 className={overTheRainbow.className + " " + "text-2xl mb-4"}>
            chris yang
          </h2>
          <p className="mb-2">
            Builder of thingamajigs, eater of food. 2A Software Engineering
            student at the University of Waterloo, graduating in 2029.
          </p>
          <p className="mb-2">
            Currently, I will be continuing my work at Shopify as a full-stack
            Software Engineering Intern, having previously worked on Core {">"}{" "}
            Deliver {">"} Inventory team, where I helped deliver a new inventory
            transfer experience for merchants. Before that, worked for the
            Canadian Department of National Defense, building applications for
            the Canadian Cadets Organization.
          </p>
          <p className="mb-2">
            In my spare time, I lead the Waterloo Rocketry Software Subsystem,
            working to deliver mission critical software used to propel Canadian
            aerospace forward.
          </p>
          <p className="mb-2">Feel free to reach out!</p>
          <div className="flex flex-col lg:flex-row text-gray-700">
            <Link
              href={"mailto:chrisyx511@gmail.com"}
              className=" flex flex-col justify-center h-6 mr-4 hover:underline hover:text-gray-500"
            >
              <span>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="inline h-4"
                ></FontAwesomeIcon>{" "}
                chrisyx511@gmail.com{" "}
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  className="inline h-3"
                ></FontAwesomeIcon>
              </span>
            </Link>
            <Link
              href={"https://github.com/ChrisYx511"}
              className=" flex flex-col justify-center h-6 mr-4 hover:underline hover:text-gray-500"
            >
              <span>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="inline h-4"
                ></FontAwesomeIcon>{" "}
                ChrisYx511{" "}
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  className="inline h-3"
                ></FontAwesomeIcon>
              </span>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/chris-yang-b01a871bb/"}
              className=" flex flex-col justify-center h-6 mr-4 hover:underline hover:text-gray-500"
            >
              <span>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="inline h-4"
                ></FontAwesomeIcon>{" "}
                Chris Yang{" "}
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  className="inline h-3"
                ></FontAwesomeIcon>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
