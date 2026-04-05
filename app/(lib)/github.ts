export interface RepoStats {
  stars: number
  language: string | null
  description: string | null
  updatedAt: string
  forks: number
  openIssues: number
}

export async function fetchRepoStats(
  owner: string,
  name: string,
): Promise<RepoStats | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${name}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
      next: { revalidate: 3600 },
    })

    if (!res.ok) return null

    const data = await res.json()
    return {
      stars: data.stargazers_count ?? 0,
      language: data.language ?? null,
      description: data.description ?? null,
      updatedAt: data.updated_at ?? "",
      forks: data.forks_count ?? 0,
      openIssues: data.open_issues_count ?? 0,
    }
  } catch {
    return null
  }
}

export async function fetchMultipleRepoStats(
  repos: { owner: string; name: string }[],
): Promise<Map<string, RepoStats>> {
  const results = await Promise.allSettled(
    repos.map(async (repo) => {
      const stats = await fetchRepoStats(repo.owner, repo.name)
      return { key: `${repo.owner}/${repo.name}`, stats }
    }),
  )

  const map = new Map<string, RepoStats>()
  for (const result of results) {
    if (result.status === "fulfilled" && result.value.stats) {
      map.set(result.value.key, result.value.stats)
    }
  }
  return map
}

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Dockerfile: "#384d54",
}

export function getLanguageColor(language: string): string {
  return languageColors[language] ?? "#8b8b8b"
}
