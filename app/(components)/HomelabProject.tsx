"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronDown,
  faUpRightFromSquare,
  faServer,
} from "@fortawesome/free-solid-svg-icons"
import type { Project } from "../(lib)/projects"

interface HomelabProjectProps {
  project: Project
}

export default function HomelabProject({ project }: HomelabProjectProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  if (!project.homelabCategories) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-2xl p-8 shadow-sm border border-cyan-100/50 relative overflow-hidden"
    >
      {/* Accent gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400" />

      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-400 flex items-center justify-center">
          <FontAwesomeIcon icon={faServer} className="h-5 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          {project.subtitle && (
            <p className="text-sm text-gray-500 mt-1">{project.subtitle}</p>
          )}
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed mb-3">
        {project.description}
      </p>

      {project.hardwareSpec && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 text-xs text-gray-500 font-mono mb-6">
          {project.hardwareSpec}
        </div>
      )}

      {/* Service categories */}
      <div className="space-y-3">
        {project.homelabCategories.map((category) => {
          const isExpanded = expandedCategory === category.title

          return (
            <div
              key={category.title}
              className="border border-gray-100 rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedCategory(isExpanded ? null : category.title)
                }
                className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors text-left"
              >
                <span className="text-sm font-medium text-gray-700">
                  {category.emoji} {category.title}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">
                    {category.services.length} services
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="h-3 text-gray-400"
                    />
                  </motion.div>
                </div>
              </button>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-3 pb-3 border-t border-gray-50">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                        {category.services.map((service) => (
                          <div
                            key={service.name}
                            className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-base flex-shrink-0 mt-0.5">
                              {service.emoji}
                            </span>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm font-medium text-gray-700">
                                  {service.name}
                                </span>
                                {service.url && (
                                  <Link
                                    href={service.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-indigo-500 transition-colors"
                                  >
                                    <FontAwesomeIcon
                                      icon={faUpRightFromSquare}
                                      className="h-2.5"
                                    />
                                  </Link>
                                )}
                              </div>
                              <p className="text-xs text-gray-400 leading-snug">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
