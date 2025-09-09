import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Twitter, Facebook, Youtube, Github, Linkedin, ExternalLink, Mail, MapPin } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Floating geometric elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-16 h-16 bg-primary/20 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-12 h-12 bg-accent/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-primary/40 rounded-sm rotate-12"></div>
      </div>

      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        <a href="https://www.instagram.com/_amanuel_a/" className="p-2 text-muted-foreground hover:text-primary transition-colors">
          <Instagram size={20} />
        </a>
        <a href="https://github.com/manuel-spec" className="p-2 text-muted-foreground hover:text-primary transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/amanuel-asefa-03904a24a/" className="p-2 text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={20} />
        </a>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-between px-8 lg:px-16 relative">
        <div className="flex-1 max-w-2xl">
          <div className="mb-6">
            <p className="text-muted-foreground mb-2">👋 Hello</p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              I'm <span className="text-primary">Amanuel Asefa</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 flex items-center gap-2">
              <MapPin size={20} />A Mobile & Web Full Stack Developer specializing in MERN, React Native, Flutter, and
              Laravel.
            </p>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            👉 View My Work
          </Button>
        </div>

        <div className="hidden lg:block flex-1 flex justify-center">
          <div className="relative">
            <img
              src="/amanuel-cyberpunk-portrait.jpeg"
              alt="Amanuel Asefa - Cyberpunk Portrait"
              className="w-96 h-96 object-cover"
              style={{
                borderRadius: "60px 20px 80px 30px",
              }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 lg:px-16">
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

      {/* Featured Works */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "📱 Sammanware",
                description:
                  "E-Learning App built with React Native. A mobile-first e-learning platform designed to make online education accessible.",
                image: "/Screenshot 2025-09-09 133237.png",
              },
              {
                title: "📡 Telecom Tower Resource Management",
                description:
                  "React Native + Supabase. Managed resources, operations, and data for telecom towers at Safaricom Ethiopia.",
                image: "Screenshot 2025-09-09 133839.png",
              },
              {
                title: "🚚 Tater Delivery",
                description:
                  "Flutter app for construction apparatus delivery. Enabled smooth ordering and delivery of construction tools and materials.",
                image: "https://www.upwork.com/att/download/portfolio/persons/uid/1664902301463535616/profile/projects/files/e70e1c5c-c2da-4da9-affd-18895f6b220a",
              },
              {
                title: "🔬 Tadas",
                description:
                  "Laboratory Management System. Full-stack web application that streamlined lab data management and operational workflows.",
                image: "/react-development-tutorial.jpg",
              },
              {
                title: "⚠️ Scam Reporting Platform",
                description:
                  "React Router v7 + Appwrite. A public reporting tool to flag online scams and fraudulent activities.",
                image: "/modern-css-design-patterns.jpg",
              },
              {
                title: "🌍 Web3 Crypto Trade Simulation",
                description:
                  "Built 3 platforms for crypto trade simulation and experimentation. Exploring decentralized solutions and blockchain-based applications.",
                image: "/full-stack-web-development.png",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-transform duration-300 bg-card border-border overflow-hidden"
              >
                <div className="aspect-video bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    View Project
                    <ExternalLink size={14} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      {/* Get a Quote */}
      <section className="py-20 px-8 lg:px-16">
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
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Amanuel Asefa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
