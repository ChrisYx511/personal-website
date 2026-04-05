"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronDown,
  faUpRightFromSquare,
  faRocket,
  faFileLines,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons"
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
    case "docs":
      return faFileLines
    default:
      return faUpRightFromSquare
  }
}

interface FeaturedProjectProps {
  project: Project
  repoStats: Map<string, RepoStats>
}

export default function FeaturedProject({
  project,
  repoStats,
}: FeaturedProjectProps) {
  const [expandedRepo, setExpandedRepo] = useState<string | null>(null)
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null)

  const otherLinks = project.links.filter(
    (l) => l.type !== "github" && l.type !== "docs",
  )

  // Aggregate stats across all repos
  const totalStars = project.repos.reduce((sum, repo) => {
    const stats = repoStats.get(`${repo.owner}/${repo.name}`)
    return sum + (stats?.stars ?? 0)
  }, 0)
  const totalForks = project.repos.reduce((sum, repo) => {
    const stats = repoStats.get(`${repo.owner}/${repo.name}`)
    return sum + (stats?.forks ?? 0)
  }, 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-sm border border-indigo-100/50 relative overflow-hidden"
    >
      {/* Accent gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400" />

      {/* Header section */}
      <div className="p-8 pb-0">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center">
            <FontAwesomeIcon icon={faRocket} className="h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
            {project.subtitle && (
              <p className="text-sm text-gray-500 mt-1">{project.subtitle}</p>
            )}
          </div>
          {(totalStars > 0 || totalForks > 0) && (
            <div className="flex items-center gap-3 text-sm text-gray-400">
              {totalStars > 0 && <span>⭐ {totalStars}</span>}
              {totalForks > 0 && <span>🔀 {totalForks}</span>}
            </div>
          )}
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      {/* Objectives section */}
      {project.objectives && project.objectives.length > 0 && (
        <div className="px-8 pb-6">
          <div className="flex items-center gap-2 mb-3">
            <FontAwesomeIcon
              icon={faBullseye}
              className="h-3.5 text-indigo-400"
            />
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Objectives
            </h4>
          </div>
          <ul className="space-y-2">
            {project.objectives.map((obj, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-gray-600"
              >
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-300 mt-1.5" />
                <span className="leading-relaxed">{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech stack */}
      <div className="px-8 pb-6">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Repositories section */}
      {project.repoDetails && project.repoDetails.length > 0 && (
        <div className="p-8 pb-6">
          <div className="flex items-center gap-2 mb-4">
            <FontAwesomeIcon icon={faGithub} className="h-4 text-gray-400" />
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Repositories
            </h4>
          </div>
          <div className="space-y-3">
            {project.repoDetails.map((repo) => {
              const stats = repoStats.get(`${repo.owner}/${repo.name}`)
              const key = `${repo.owner}/${repo.name}`
              const isExpanded = expandedRepo === key

              return (
                <div
                  key={key}
                  className="border border-gray-100 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedRepo(isExpanded ? null : key)}
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-semibold text-gray-800">
                        {repo.label}
                      </span>
                      <span className="text-xs text-gray-400 ml-2">
                        {repo.owner}/{repo.name}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-3"
                    >
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="h-3 text-gray-400"
                      />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-4 pb-4 border-t border-gray-50">
                          <p className="text-sm text-gray-500 leading-relaxed mt-3 mb-3">
                            {repo.description}
                          </p>
                          {stats && (
                            <div className="mb-3">
                              <GitHubStats stats={stats} />
                            </div>
                          )}
                          <Link
                            href={`https://github.com/${key}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                          >
                            View on GitHub
                            <FontAwesomeIcon
                              icon={faUpRightFromSquare}
                              className="h-2.5"
                            />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Design proposals section */}
      {project.docLinks && project.docLinks.length > 0 && (
        <div className="px-8 pb-6">
          <div className="flex items-center gap-2 mb-4">
            <FontAwesomeIcon
              icon={faFileLines}
              className="h-3.5 text-gray-400"
            />
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Design Proposals
            </h4>
          </div>
          <div className="space-y-3">
            {project.docLinks.map((doc) => {
              const isExpanded = expandedDoc === doc.url

              return (
                <div
                  key={doc.url}
                  className="border border-gray-100 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedDoc(isExpanded ? null : doc.url)}
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="text-sm font-semibold text-gray-800">
                      📝 {doc.label}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-3"
                    >
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="h-3 text-gray-400"
                      />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-4 pb-4 border-t border-gray-50">
                          <p className="text-sm text-gray-500 leading-relaxed mt-3 mb-3">
                            {doc.description}
                          </p>
                          <Link
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                          >
                            Open in Google Slides
                            <FontAwesomeIcon
                              icon={faUpRightFromSquare}
                              className="h-2.5"
                            />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Other links footer */}
      {otherLinks.length > 0 && (
        <div className="px-8 pb-6 pt-2 border-t border-gray-100">
          <div className="flex flex-wrap gap-3">
            {otherLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-indigo-600 transition-colors"
              >
                <FontAwesomeIcon
                  icon={getLinkIcon(link.type)}
                  className="h-3.5"
                />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}
