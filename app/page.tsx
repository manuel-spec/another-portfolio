import { FeaturedProjects } from "@/components/featured-projects"
import { Hero } from "@/components/hero"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Mail } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />

      <section id="about" className="scroll-mt-20 py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-card border-border p-8">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-efd45a40ae94a781f9f6a6c6372e49b4-tohaRl3c9e8atzBeHZbMWMD0NAMKYm.webp"
                  alt="Profile"
                  className="w-48 h-48 object-cover rounded-lg grayscale"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-xl mb-4">
                  💡 My goal is to <span className="text-primary font-semibold">design & develop</span> powerful
                  applications that solve real-world problems
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate Full Stack Developer with a focus on mobile and web applications. I specialize in the
                  MERN stack, React Native, Flutter, and Laravel, building scalable and user-friendly solutions across
                  industries like education, telecom, logistics, healthcare, and fintech while delivering an excellent
                  user experience.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <FeaturedProjects />

      {/* Skills Section */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Frontend & Mobile</h3>
              <div className="space-y-2">
                {["React", "React Native", "Flutter", "React Router v7", "HTML5", "CSS3", "Sass"].map(
                  (skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Backend & Databases</h3>
              <div className="space-y-2">
                {["Node.js", "Express", "MongoDB", "Supabase", "Appwrite", "PHP", "Laravel"].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Other</h3>
              <div className="space-y-2">
                {["Web3 development", "Crypto simulation apps", "REST APIs", "Git", "SEO"].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "📱 Mobile App Development",
                description: "React Native & Flutter apps for iOS and Android platforms",
              },
              {
                title: "🌐 Full Stack Web Development",
                description: "MERN & Laravel stack for complete web solutions",
              },
              {
                title: "🛠 Custom Business Solutions",
                description: "Resource management, delivery apps, learning systems",
              },
              {
                title: "🔗 Web3 & Crypto Applications",
                description: "Blockchain-based projects and crypto simulations",
              },
              {
                title: "🎨 UI/UX Design Implementation",
                description: "Responsive & user-friendly interfaces",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-card border-border p-6 hover:border-primary transition-colors">
                <h3 className="font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Blog Ideas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              {
                title: "How to Build Scalable Mobile Apps with React Native",
                description: "Best practices and patterns for React Native development",
                image: "/react-development-tutorial.jpg",
              },
              {
                title: "The Future of Web3 and Crypto Applications",
                description: "Exploring blockchain technology and decentralized solutions",
                image: "/modern-css-design-patterns.jpg",
              },
              {
                title: "Lessons Learned from Building Full Stack Projects in MERN",
                description: "Real-world insights from MERN stack development",
                image: "/full-stack-web-development.png",
              },
              {
                title: "When to Choose Flutter vs React Native for Mobile Development",
                description: "A comprehensive comparison of mobile development frameworks",
                image: "/sports-multimedia-website-design.jpg",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-transform duration-300 bg-card border-border overflow-hidden"
              >
                <div className="aspect-video bg-muted">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm">{post.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 py-20 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border p-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold mb-4">💬 Got a project in mind?</CardTitle>
              <CardDescription className="text-muted-foreground">
                Let's build something amazing together. Share your project details and I'll get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input placeholder="Your name" className="bg-input border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-input border-border" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Project Details</label>
                <Textarea placeholder="Tell me about your project..." className="bg-input border-border min-h-32" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Mail size={16} className="mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

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
