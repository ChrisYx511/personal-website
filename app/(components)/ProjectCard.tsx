"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons"
import type { Project, ProjectLink } from "../(lib)/projects"
import type { RepoStats } from "../(lib)/github"
import TechBadge from "./TechBadge"
import GitHubStats from "./GitHubStats"

function getLinkIcon(type: ProjectLink["type"]) {
  switch (type) {
    case "github":
      return faGithub
    case "npm":
      return faNpm
    default:
      return faUpRightFromSquare
  }
}

interface ProjectCardProps {
  project: Project
  repoStats: Map<string, RepoStats>
}

export default function ProjectCard({ project, repoStats }: ProjectCardProps) {
  const primaryRepo = project.repos[0]
  const primaryStats = primaryRepo
    ? repoStats.get(`${primaryRepo.owner}/${primaryRepo.name}`)
    : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-sm text-gray-500 mt-0.5">{project.subtitle}</p>
          )}
        </div>
        <div className="flex flex-col items-end gap-1 ml-2 shrink-0">
          {project.winner && (
            <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 border border-amber-300/60 whitespace-nowrap">
              🏆 Winner
            </span>
          )}
          {project.hackathon && (
            <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200/60 whitespace-nowrap">
              {project.hackathon}
            </span>
          )}
        </div>
      </div>

      {project.winnerLabel && (
        <p className="text-xs text-amber-700 font-medium mb-2 -mt-1">
          {project.winnerLabel}
        </p>
      )}

      <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techStack.slice(0, 8).map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
        {project.techStack.length > 8 && (
          <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-500">
            +{project.techStack.length - 8}
          </span>
        )}
      </div>

      {primaryStats && (
        <div className="mb-3">
          <GitHubStats stats={primaryStats} compact />
        </div>
      )}

      <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100">
        {project.links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <FontAwesomeIcon icon={getLinkIcon(link.type)} className="h-3.5" />
            {link.label}
          </Link>
        ))}
      </div>
    </motion.div>
  )
}
