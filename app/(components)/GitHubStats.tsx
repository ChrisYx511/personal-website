import { RepoStats, getLanguageColor } from "../(lib)/github"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faCodeBranch } from "@fortawesome/free-solid-svg-icons"

interface GitHubStatsProps {
  stats: RepoStats
  compact?: boolean
}

export default function GitHubStats({
  stats,
  compact = false,
}: GitHubStatsProps) {
  const updatedDate = stats.updatedAt
    ? new Date(stats.updatedAt).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : null

  return (
    <div
      className={`flex items-center gap-3 text-gray-500 ${compact ? "text-xs" : "text-sm"}`}
    >
      {stats.language && (
        <span className="flex items-center gap-1">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: getLanguageColor(stats.language) }}
          />
          {stats.language}
        </span>
      )}
      {stats.stars > 0 && (
        <span className="flex items-center gap-1">
          <FontAwesomeIcon icon={faStar} className="h-3" />
          {stats.stars}
        </span>
      )}
      {stats.forks > 0 && (
        <span className="flex items-center gap-1">
          <FontAwesomeIcon icon={faCodeBranch} className="h-3" />
          {stats.forks}
        </span>
      )}
      {updatedDate && (
        <span className="text-gray-400">Updated {updatedDate}</span>
      )}
    </div>
  )
}
