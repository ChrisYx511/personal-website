import { Over_the_Rainbow } from "next/font/google"
const overTheRainbow = Over_the_Rainbow({
  subsets: ["latin"],
  weight: ["400"],
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
            My name is Chris and I am currently a 1B Software Engineering
            student at the University of Waterloo.
          </p>
          <p className="mb-2">
            Over the summer, I was employed at the Government of Canada, leading
            the development of full-stack internal apps for the Cadets and
            Junior Canadian Rangers program, automating flight qualification
            checks for thousands of flight instructors and staff across the
            country.
          </p>
          <p className="mb-2">
            In my spare time, I am an active contributor on the Waterloo
            Rocketry Software Subsystem, working to deliver mission critical
            software used to launch Canada's second ever liquid bipropellant
            rocket. I am also a elected member of the UWaterloo Engineering
            Society council, advocating for various student causes.
          </p>
          <p className="mb-2">Feel free to reach out!</p>
          <div className="flex flex-row text-gray-700">
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
