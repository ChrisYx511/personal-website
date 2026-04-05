export type ProjectTier = "featured" | "standard" | "compact"
export type ProjectCategory = "rocketry" | "homelab" | "hackathon" | "personal"

export interface RepoInfo {
  owner: string
  name: string
  label: string
}

export interface ProjectLink {
  url: string
  label: string
  type: "github" | "devpost" | "demo" | "docs" | "npm"
}

export interface HomelabService {
  name: string
  description: string
  url?: string
  emoji: string
}

export interface HomelabCategory {
  title: string
  emoji: string
  services: HomelabService[]
}

export interface RepoDetail {
  owner: string
  name: string
  label: string
  description: string
}

export interface DocLink {
  url: string
  label: string
  description: string
}

export interface Project {
  id: string
  title: string
  subtitle?: string
  description: string
  tier: ProjectTier
  category: ProjectCategory
  techStack: string[]
  repos: RepoInfo[]
  links: ProjectLink[]
  hackathon?: string
  winner?: boolean
  winnerLabel?: string
  // Featured-specific: richer detail
  objectives?: string[]
  repoDetails?: RepoDetail[]
  docLinks?: DocLink[]
  // Homelab-specific
  homelabCategories?: HomelabCategory[]
  hardwareSpec?: string
}

export const projects: Project[] = [
  {
    id: "omnibus",
    title: "Waterloo Rocketry — Omnibus DAQms & Rms",
    subtitle:
      "Leading Waterloo Rocketry's modernization of its entire launch control and monitoring software stack for the 2026 design cycle 🚀",
    description:
      "A complete overhaul of the ground support software stack — replacing aging PyQT-based tools with a modern, maintainable architecture built for real-time telemetry during cold flows and static fires.",
    tier: "featured",
    category: "rocketry",
    objectives: [
      "TypeScript, D3.js, and React dashboards to replace aging PyQT code",
      "Socket.IO + msgpack based messaging framework for real-time sensor data routing",
      "uv tooling for Python projects across the organization",
      "Infrastructure-as-code deployment of the full stack to launch computer using Docker & Ansible",
      "Raspberry Pi 5 hardware to replace a disassembled Framework laptop in a Pelican case as the primary ground support monitoring device",
      "Integration with a new LabJack T-series ADC for sensor data acquisition",
    ],
    techStack: [
      "TypeScript",
      "React 19",
      "Python",
      "Socket.IO",
      "D3.js",
      "Docker",
      "Ansible",
      "Vite",
      "Recharts",
      "shadcn/ui",
      "Tailwind CSS",
      "msgpack",
      "Zustand",
    ],
    repoDetails: [
      {
        owner: "waterloo-rocketry",
        name: "omnibus",
        label: "Omnibus Messaging Framework",
        description:
          "The core monorepo — a unified data bus system for managing sensor data from multiple sources (DAQ, RLCS, telemetry) and routing to multiple sinks (plotting, logging, dashboards). Python 3.11, WebSocket transport, server/dashboard/source-sink architecture.",
      },
      {
        owner: "waterloo-rocketry",
        name: "omnibus-ts",
        label: "Omnibus TypeScript Library",
        description:
          "TypeScript/JavaScript port of the Omnibus messaging protocol, published as @waterloorocketry/omnibus-ts on npm. Provides Socket.IO client bindings with Zod schema validation for type-safe real-time communication between the Python backend and web frontends.",
      },
      {
        owner: "waterloo-rocketry",
        name: "omnibus-DAQms",
        label: "New DAQms Dashboard",
        description:
          "Real-time data acquisition dashboard frontend built with React 19, Vite, and Recharts. Features live WebSocket streaming for 6+ concurrent sensor channels, a mock backend for independent testing, and reusable chart components. Styled with shadcn/ui and Tailwind CSS.",
      },
    ],
    docLinks: [
      {
        url: "https://docs.google.com/presentation/d/1qzdC9M6uhbC2X48Uy1Y4FIG845XbK9Z9qN-m8ID8JEI/edit?usp=sharing",
        label: "Architecture Update — Preliminary",
        description:
          "Design proposal for the overall Omnibus architecture modernization, covering messaging transport, deployment strategy, and hardware integration plans.",
      },
      {
        url: "https://docs.google.com/presentation/d/1TX2LfdeTNTOXr89_NnvpKVGQEP2s6IqvGbC4si2ezQ0/edit?usp=sharing",
        label: "DAQms Dashboard — Preliminary",
        description:
          "Design proposal for the new DAQms dashboard, covering UI/UX requirements, real-time data visualization approach, and component architecture.",
      },
    ],
    repos: [
      {
        owner: "waterloo-rocketry",
        name: "omnibus",
        label: "Omnibus Messaging Framework",
      },
      {
        owner: "waterloo-rocketry",
        name: "omnibus-ts",
        label: "Omnibus TypeScript Library",
      },
      {
        owner: "waterloo-rocketry",
        name: "omnibus-DAQms",
        label: "New DAQms Dashboard",
      },
    ],
    links: [
      {
        url: "https://github.com/waterloo-rocketry/omnibus",
        label: "Omnibus Monorepo",
        type: "github",
      },
      {
        url: "https://github.com/waterloo-rocketry/omnibus-ts",
        label: "Omnibus TS",
        type: "github",
      },
      {
        url: "https://github.com/waterloo-rocketry/omnibus-DAQms",
        label: "DAQms Dashboard",
        type: "github",
      },
      {
        url: "https://www.npmjs.com/package/@waterloorocketry/omnibus-ts",
        label: "npm: omnibus-ts",
        type: "npm",
      },
      {
        url: "https://docs.google.com/presentation/d/1qzdC9M6uhbC2X48Uy1Y4FIG845XbK9Z9qN-m8ID8JEI/edit?usp=sharing",
        label: "Architecture Proposal",
        type: "docs",
      },
      {
        url: "https://docs.google.com/presentation/d/1TX2LfdeTNTOXr89_NnvpKVGQEP2s6IqvGbC4si2ezQ0/edit?usp=sharing",
        label: "DAQms Proposal",
        type: "docs",
      },
    ],
  },
  {
    id: "potatoserver",
    title: "PotatoServer — My Homelab",
    subtitle: "Self-hosted infrastructure running on Unraid",
    description:
      "A comprehensive self-hosted server environment running Unraid 6.12.4 with a single parity 12 TB array + 512 GB Btrfs NVMe cache. Features centralized SSO via Keycloak + OpenLDAP, reverse proxy through SWAG/Nginx, WireGuard VPN, and a suite of self-hosted services. HomeAssistant runs on a separate Dell thin client host.",
    tier: "featured",
    category: "homelab",
    techStack: [
      "Unraid",
      "Docker",
      "Docker Compose",
      "OpenWRT",
      "WireGuard",
      "Nginx",
      "OAuth2",
      "SAML",
      "OpenLDAP",
      "Keycloak",
    ],
    repos: [],
    links: [],
    hardwareSpec:
      "Unraid 6.12.4 · 12 TB parity array · 512 GB NVMe cache · TP-Link Archer C7 v2 (OpenWRT)",
    homelabCategories: [
      {
        title: "Networking",
        emoji: "🌐",
        services: [
          {
            name: "OpenWRT",
            description:
              "TP-Link Archer C7 v2 flashed with OpenWRT for advanced routing",
            emoji: "📡",
          },
          {
            name: "DDNS + WireGuard",
            description: "Dynamic DNS and VPN for remote access",
            emoji: "🔒",
          },
          {
            name: "Omada",
            description: "Managed switches and access points",
            emoji: "📶",
          },
        ],
      },
      {
        title: "Infrastructure",
        emoji: "🖥️",
        services: [
          {
            name: "Keycloak",
            description:
              "SSO identity provider for all OAuth2/SAML services, backed by OpenLDAP",
            url: "https://github.com/keycloak/keycloak",
            emoji: "🔑",
          },
          {
            name: "OpenLDAP",
            description:
              "User federation and authentication for non-OAuth2 clients",
            url: "https://github.com/turnkeylinux-apps/openldap",
            emoji: "📂",
          },
          {
            name: "oauth2-proxy",
            description: "OAuth2 support for single-user applications",
            url: "https://github.com/oauth2-proxy/oauth2-proxy",
            emoji: "🛡️",
          },
          {
            name: "SWAG (Nginx)",
            description: "Reverse proxy and load balancer",
            url: "https://github.com/linuxserver/docker-swag",
            emoji: "🌐",
          },
          {
            name: "WireGuard",
            description: "VPN tunnel for remote access",
            emoji: "🔐",
          },
        ],
      },
      {
        title: "Services",
        emoji: "🪄",
        services: [
          {
            name: "Nextcloud",
            description: "Personal cloud storage",
            url: "https://github.com/nextcloud/server",
            emoji: "☁️",
          },
          {
            name: "PhotoPrism",
            description: "AI-powered photo management",
            url: "https://github.com/photoprism/photoprism",
            emoji: "📸",
          },
          {
            name: "Jellyfin",
            description: "TV shows & movies streaming",
            url: "https://github.com/jellyfin/jellyfin",
            emoji: "🎬",
          },
          {
            name: "HomeAssistant",
            description:
              "IoT device management with custom ESPHome integrations",
            url: "https://github.com/home-assistant/core",
            emoji: "🏠",
          },
          {
            name: "Minecraft Servers",
            description: "Game servers for friends",
            emoji: "⛏️",
          },
        ],
      },
    ],
  },
  {
    id: "blobfilter",
    title: "FIHLTER",
    subtitle: "Stationary Water Garbage Collector",
    description:
      "A stationary water garbage collector that uses tides to push floating debris toward a motor-driven conveyor belt, which picks up trash and drops it into a collection bin. Sensors track water level and bin status, while a live dashboard lets you monitor everything in real time. Full pipeline from Arduino firmware reading ultrasonic sensors, to a Go service pushing over serial to a REST API, to a Next.js + Prisma + SQLite dashboard.",
    tier: "standard",
    category: "hackathon",
    hackathon: "StarHacks 2026",
    winner: false,
    techStack: [
      "Arduino",
      "Go",
      "Next.js",
      "TypeScript",
      "Prisma",
      "SQLite",
      "Tailwind CSS",
      "PlatformIO",
    ],
    repos: [
      {
        owner: "ChrisYx511",
        name: "starhacks-2026",
        label: "Monorepo (firmware + agent + backend + frontend)",
      },
    ],
    links: [
      {
        url: "https://github.com/ChrisYx511/starhacks-2026",
        label: "GitHub",
        type: "github",
      },
      {
        url: "https://devpost.com/software/blobfihlter",
        label: "Devpost",
        type: "devpost",
      },
    ],
  },
  {
    id: "stray-sender",
    title: "Stray Sender",
    subtitle: "Roast responsibly 🔥😇",
    description:
      'Send your "strays" (playful jabs), let AI rate the spice, and watch the crowd react. Every stray gets a 0–100 score across Wit, Wordplay, Spice, and Vibe using Cohere Command A and Rerank 3.5. Features a live leaderboard updated with AI scores and community reactions, a Persona 5-inspired Battle Bars UI with comic-book pop-out bubbles and zippy motion, and thread-based replay and counterattack.',
    tier: "standard",
    category: "hackathon",
    hackathon: "Hack the North",
    winner: false,
    techStack: [
      "React Native",
      "Expo",
      "Django",
      "Python",
      "Cohere Command A",
      "Cohere Rerank 3.5",
      "SQLite",
    ],
    repos: [
      {
        owner: "jennnniferkuang",
        name: "Stray-Sender",
        label: "App Repository",
      },
    ],
    links: [
      {
        url: "https://github.com/jennnniferkuang/Stray-Sender",
        label: "GitHub",
        type: "github",
      },
      {
        url: "https://devpost.com/software/stray-sender",
        label: "Devpost",
        type: "devpost",
      },
    ],
  },
  {
    id: "deskbuddy",
    title: "DeskBuddy",
    subtitle: "Your desktop companion that locks in with you",
    description:
      "A desktop study companion that lives in the corner of your screen. Your avatar reflects your state — studying, doomscrolling, or napping — and friends can opt in to sit at the same virtual desk. Everything is consent-based and low-distraction, designed to make studying together feel calm even when remote.",
    tier: "standard",
    category: "hackathon",
    hackathon: "McHacks 13",
    winner: true,
    winnerLabel: "People's Choice",
    techStack: ["Electron", "React", "TypeScript", "Ruby on Rails", "SQLite"],
    repos: [
      {
        owner: "ChrisYx511",
        name: "mchacks13-desktop-companion",
        label: "Desktop App",
      },
      {
        owner: "ChrisYx511",
        name: "mchacks13-desktop-companion-backend",
        label: "Backend API",
      },
    ],
    links: [
      {
        url: "https://github.com/ChrisYx511/mchacks13-desktop-companion",
        label: "Frontend",
        type: "github",
      },
      {
        url: "https://github.com/ChrisYx511/mchacks13-desktop-companion-backend",
        label: "Backend",
        type: "github",
      },
      {
        url: "https://devpost.com/software/skibidi-y1fbqp",
        label: "Devpost",
        type: "devpost",
      },
    ],
  },
  {
    id: "bobux-bargains",
    title: "BOBUX BARGAINS",
    subtitle: "AI-powered economic simulation on Roblox",
    description:
      "Simulates a real-world economy on Roblox with AI buyer and seller agents that negotiate prices using OpenRouter LLMs. Each agent retains memory of past deals to inform future negotiations, enabling realistic supply-and-demand dynamics. Fully customizable agent personalities and models allow testing the reasoning and negotiation capabilities of different LLMs at scale.",
    tier: "standard",
    category: "hackathon",
    hackathon: "HackNYU Fall 2025",
    winner: true,
    winnerLabel: "Best Funny Haha Hack · Most Cutting-Edge AI Agent",
    techStack: ["Luau", "Roblox Studio", "OpenRouter", "LLM Agents"],
    repos: [
      {
        owner: "jennnniferkuang",
        name: "Bobux-Bargains",
        label: "Game Repository",
      },
    ],
    links: [
      {
        url: "https://github.com/jennnniferkuang/Bobux-Bargains",
        label: "GitHub",
        type: "github",
      },
      {
        url: "https://devpost.com/software/bobux-bargains",
        label: "Devpost",
        type: "devpost",
      },
    ],
  },
  {
    id: "learnloop",
    title: "LearnLoop",
    subtitle: "Empower Learning, One Swipe at a Time",
    description:
      "A mobile app that transforms PDF course notes into TikTok-style educational videos using a custom fine-tuned llama-3.2-1b model with sentence-transformers for RAG. Uses the SuperMemo2 spaced repetition algorithm to determine the most relevant topic for each video in an algorithmic feed, maximizing retention over time.",
    tier: "standard",
    category: "hackathon",
    hackathon: "BrébeufHx 8.0",
    winner: true,
    winnerLabel: "Coup de coeur du jury",
    techStack: [
      "Flutter",
      "Dart",
      "Python",
      "FastAPI",
      "Ollama",
      "llama-3.2-1b",
      "sentence-transformers",
      "Ngrok",
    ],
    repos: [
      {
        owner: "ChrisYx511",
        name: "brebeufhx-learnloop-app",
        label: "Mobile App",
      },
      {
        owner: "billxby",
        name: "learn_loop",
        label: "Compute API",
      },
    ],
    links: [
      {
        url: "https://github.com/ChrisYx511/brebeufhx-learnloop-app",
        label: "App",
        type: "github",
      },
      {
        url: "https://github.com/billxby/learn_loop",
        label: "API",
        type: "github",
      },
      {
        url: "https://devpost.com/software/learnloop-0smr4t",
        label: "Devpost",
        type: "devpost",
      },
    ],
  },
  {
    id: "spinich",
    title: "Spinich",
    subtitle: "AI-powered career tool for cold outreach",
    description:
      "Helps professionals send mass cold emails through AI-generated, editable templates while monitoring incoming mail with sentiment analysis to prioritize responses. Built with OpenAI for tone detection and summarization, and the Google Cloud Gmail API for seamless inbox integration.",
    tier: "standard",
    category: "hackathon",
    hackathon: "BrébeufHx 7.0",
    winner: true,
    winnerLabel: "3rd Place Advanced · Best Use of Google Cloud",
    techStack: [
      "React",
      "Next.js",
      "Python",
      "Flask",
      "MongoDB",
      "OpenAI API",
      "Gmail API",
    ],
    repos: [
      {
        owner: "justinbax",
        name: "brebeufhx",
        label: "App Repository",
      },
    ],
    links: [
      {
        url: "https://github.com/justinbax/brebeufhx",
        label: "GitHub",
        type: "github",
      },
      {
        url: "https://devpost.com/software/spinich",
        label: "Devpost",
        type: "devpost",
      },
    ],
  },
  {
    id: "crooked-labs",
    title: "Crooked Labs",
    subtitle: "Automated mentor-mentee matching for Marianopolis College",
    description:
      "A full-stack web application that automates the Marianopolis Student Affairs Mentorship Program's pairing process. Uses weighted scoring for structured factors (program, gender, language) combined with OpenAI-powered heuristic matching for qualitative traits like hobbies and preferences. Role: bridging frontend/backend integration, authentication, and code quality.",
    tier: "standard",
    category: "hackathon",
    hackathon: "MariHacks 7.0",
    winner: true,
    winnerLabel: "3rd Place Advanced",
    techStack: [
      "SvelteKit",
      "Svelte",
      "TypeScript",
      "Firebase",
      "OpenAI API",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    repos: [
      {
        owner: "ChrisYx511",
        name: "marihacks-2024-msa",
        label: "App Repository",
      },
    ],
    links: [
      {
        url: "https://github.com/ChrisYx511/marihacks-2024-msa",
        label: "GitHub",
        type: "github",
      },
      {
        url: "https://devpost.com/software/crooked-labs-marianopolis-mentorship-program",
        label: "Devpost",
        type: "devpost",
      },
    ],
  },
  {
    id: "magicmirror",
    title: "MagicMirror Dashboard",
    subtitle: "Personal Dashboard with Spotify & AI",
    description:
      "An interactive personal dashboard built for SE 101, featuring Spotify playback integration via the Web API SDK, OpenAI-powered features, and MongoDB data persistence. Deployed live on Vercel.",
    tier: "standard",
    category: "personal",
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Spotify Web API",
      "OpenAI API",
      "MongoDB",
      "Vercel",
    ],
    repos: [
      {
        owner: "ChrisYx511",
        name: "nextjs-magicmirror",
        label: "Dashboard Repository",
      },
    ],
    links: [
      {
        url: "https://github.com/ChrisYx511/nextjs-magicmirror",
        label: "GitHub",
        type: "github",
      },
    ],
  },
]
