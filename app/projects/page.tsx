import { Over_the_Rainbow } from "next/font/google"
import { projects } from "../(lib)/projects"
import { fetchMultipleRepoStats, type RepoStats } from "../(lib)/github"
import FeaturedProject from "../(components)/FeaturedProject"
import HomelabProject from "../(components)/HomelabProject"
import ProjectCard from "../(components)/ProjectCard"
import AnimatedSection from "../(components)/AnimatedSection"

const overTheRainbow = Over_the_Rainbow({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  fallback: ["serif"],
})

export const metadata = {
  title: "Projects — Chris Yang",
  description: "Chris Yang's project portfolio",
}

export default async function ProjectsPage() {
  // Collect all repos for batch fetching
  const allRepos = projects.flatMap((p) =>
    p.repos.map((r) => ({ owner: r.owner, name: r.name })),
  )
  const repoStats: Map<string, RepoStats> =
    await fetchMultipleRepoStats(allRepos)

  const featured = projects.filter((p) => p.tier === "featured")
  const standard = projects.filter((p) => p.tier === "standard")

  const omnibus = featured.find((p) => p.id === "omnibus")
  const homelab = featured.find((p) => p.id === "potatoserver")

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Page header */}
      <AnimatedSection>
        <h1
          className={
            overTheRainbow.className + " text-4xl md:text-5xl text-white mb-2"
          }
        >
          projects
        </h1>
        <p className="text-white/70 text-lg mb-12">
          A collection of things I&apos;ve built, broken, and rebuilt.
        </p>
      </AnimatedSection>

      {/* Featured projects */}
      <section className="mb-16">
        <AnimatedSection>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-6">
            Featured
          </h2>
        </AnimatedSection>
        <div className="space-y-6">
          {omnibus && (
            <FeaturedProject project={omnibus} repoStats={repoStats} />
          )}
          {homelab && <HomelabProject project={homelab} />}
        </div>
      </section>

      {/* Standard project cards */}
      <section>
        <AnimatedSection>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-6">
            Hackathons &amp; Apps
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standard.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} repoStats={repoStats} />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  )
}
