import { AboutDossier } from "@/components/about-dossier"
import { FeaturedProjects } from "@/components/featured-projects"
import { Hero } from "@/components/hero"
import { HitMeUp } from "@/components/hit-me-up"
import { ServicesCabinet } from "@/components/services-cabinet"
import { SiteHeader } from "@/components/site-header"
import { Github } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />

      <AboutDossier />

      <FeaturedProjects />

      <ServicesCabinet />

      <HitMeUp />

      {/* Footer */}
      <footer className="py-12 px-8 lg:px-16 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 text-center">
          <p className="text-muted-foreground">© 2026 Amanuel Asefa. All rights reserved.</p>
          <a
            href="https://github.com/manuel-spec"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline"
          >
            <Github size={16} aria-hidden />
            github.com/manuel-spec
          </a>
        </div>
      </footer>
    </div>
  )
}
