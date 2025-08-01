"use client"

import { portfolioData } from "./constants"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { PixelArt } from "@/components/pixel-art.jsx"
import { MapPin, Mail, ExternalLink, Github, Calendar, Award, Code, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Pixelify_Sans } from "next/font/google"

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
});

export default function PixelatedPortfolio() {
  const { personal, workExperience, projects } = portfolioData

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 relative overflow-hidden">
      {/* Floating Pixel Art Decorations */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <PixelArt type="cloud" size="md" className="absolute top-10 left-10 opacity-60" />
        <PixelArt type="cloud" size="sm" className="absolute top-20 right-20 opacity-40" />
        <Image
          src="/pixelHeart.png"
          alt="Next.js logo"
          width={100}
          height={60}
          priority
          className="absolute top-32 left-1/4 opacity-50"
        />
        <PixelArt type="star" size="sm" className="absolute top-40 right-1/3 opacity-60" />
        <Image
          src="/pixelFlower.png"
          alt="Next.js logo"
          width={100}
          height={60}
          priority
          className="absolute top-80 right-10 opacity-40"
        />
        <PixelArt type="bunny" size="md" className="absolute bottom-40 left-10 opacity-60" />
        <PixelArt type="bee" size="sm" className="absolute bottom-60 right-1/4 opacity-50" />
        <PixelArt type="heart" size="md" className="absolute bottom-20 left-1/3 opacity-40" />
        <PixelArt type="star" size="lg" className="absolute bottom-32 right-20 opacity-50" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-blue-200 border-b-4 border-blue-300 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/pixelDogWalkingBlue.gif"
                alt="Next.js logo"
                width={100}
                height={60}
                priority
              />
              {/* <h1 className="text-2xl font-bold text-white font-mono">{personal.name}</h1> */}
            </div>
            <div className="hidden md:flex space-x-1">
              {["about", "experience", "projects"].map((section) => (
                <Button
                  key={section}
                  variant="ghost"
                  onClick={() => scrollToSection(section)}
                  className="text-white hover:bg-blue-400 hover:text-white font-mono text-lg border-2 border-transparent hover:border-blue-300 transition-all duration-200"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      {/* <section className="py-20 px-4 text-center relative z-10">
        <div className="container mx-auto relative">
          <div className="mb-8 relative">
            <Image
              src={personal.avatar || "/placeholder.svg"}
              alt={personal.name}
              width={120}
              height={120}
              className="mx-auto rounded-lg border-4 border-blue-600 shadow-lg"
            />
            
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-4 font-mono">{personal.name}</h1>
          <p className="text-xl md:text-2xl text-blue-700 mb-8 font-mono">{personal.title}</p>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="flex items-center text-blue-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="font-mono">{personal.location}</span>
            </div>
            <div className="flex items-center text-blue-600">
              <Mail className="h-5 w-5 mr-2" />
              <span className="font-mono">{personal.email}</span>
            </div>
          </div>
          <Button
            onClick={() => scrollToSection("about")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-mono text-lg px-8 py-3 border-4 border-blue-800 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <PixelArt type="star" size="sm" className="mr-2" />
            Explore My Garden
          </Button>
        </div>
      </section> */}

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 bg-white/50 relative z-10">
        <div className="container mx-auto">

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Card */}
            <div className="lg:col-span-1 hover:shadow-xl transition-shadow duration-300">
              <Card className="border-4 border-blue-300 shadow-lg bg-white relative sticky top-12">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 relative">
                    <Image
                      src={"/noorPortfolio.png"}
                      alt={personal.name}
                      width={200}
                      height={250}
                      className="mx-auto rounded-lg shadow-lg"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-blue-800 mb-2 font-mono">{personal.name}</h3>
                  <p className="text-lg text-blue-700 mb-6 font-mono">{personal.title}</p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-center text-blue-600">
                      <MapPin className="h-5 w-5 mr-3" />
                      <span className="font-mono">{personal.location}</span>
                    </div>
                    <div className="flex items-center justify-center text-blue-600">
                      <Mail className="h-5 w-5 mr-3" />
                      <span className="font-mono text-sm">{personal.email}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono border-2 border-blue-800"
                    >
                      <Link href={personal.github} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        View GitHub
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bio Section */}
            <div className="lg:col-span-2 flex flex-col justify-around">
              
              <div className="mb-8">
                <div className="flex mb-4">
                  <div className={`${pixelifySans.variable}`}>
                    <h1 className={`${pixelifySans.variable} text-8xl font-bold text-blue-800 mb-4`}>
                    Software
                  </h1>
                  <h1 className={`${pixelifySans.variable} text-8xl font-bold text-blue-600 mb-4`}>
                    Engineer
                  </h1>
                  </div>
                  <div>
                    <Image
                      src="/coolWorkingCat.png"
                      alt="Next.js logo"
                      width={200}
                      height={200}
                      priority
                    />
                  </div>
                </div>

              </div>

              {/* Bio Content */}
              <div className="flex flex-col items-center">
                <p className="text-gray-700 font-mono leading-relaxed mb-6">{personal.bio}</p>
              </div>
              <div className="flex flex-row justify-around items-center w-full">
                <div className="text-center mb-6">
                  <h1 className="text-6xl font-bold text-blue-800 mb-2 font-mono hover:text-blue-600">2+</h1>
                  <h3 className="text-lg text-blue-600 font-mono">Years of Experience</h3>
                </div>
                <div className="text-center mb-6">
                  <h1 className="text-6xl font-bold text-blue-800 mb-2 font-mono hover:text-blue-600">10+</h1>
                  <h3 className="text-lg text-blue-600 font-mono">Projects Completed</h3>
                </div>
                <div className="text-center mb-6">
                  <h1 className="text-6xl font-bold text-blue-800 mb-2 font-mono hover:text-blue-600">300+</h1>
                  <h3 className="text-lg text-blue-600 font-mono">Diet Coke Finished</h3>
                </div>
              </div>
            {/* Skills Section */}
            {/*<div className="lg:col-span-2">
              <Card className="border-4 border-blue-600 shadow-lg bg-white relative">
                <PixelArt type="star" size="sm" className="absolute -top-2 -right-2" />
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4 font-mono flex items-center">
                      <Zap className="h-6 w-6 mr-3" />
                      Skills & Technologies
                    </h3>
                    <p className="text-gray-700 font-mono leading-relaxed mb-6">{personal.bio}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-4 font-mono flex items-center">
                        <Code className="h-5 w-5 mr-2" />
                        Frontend Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {personal.skills.slice(0, 5).map((skill, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-blue-200 text-blue-800 font-mono border-2 border-blue-400 hover:bg-blue-300 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-800 mb-4 font-mono flex items-center">
                        <Award className="h-5 w-5 mr-2" />
                        Backend & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {personal.skills.slice(5).map((skill, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-blue-200 text-blue-800 font-mono border-2 border-blue-400 hover:bg-blue-300 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { icon: Code, label: "Clean Code", pixelArt: "star" },
                      { icon: Zap, label: "Fast Learning", pixelArt: "bee" },
                      { icon: Award, label: "Quality Focus", pixelArt: "heart" },
                      { icon: Mail, label: "Great Communication", pixelArt: "butterfly" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="text-center p-4 border-2 border-blue-300 rounded-lg hover:bg-blue-50 transition-colors relative"
                      >
                        <PixelArt type={item.pixelArt as any} size="sm" className="absolute -top-1 -right-1" />
                        <item.icon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                        <span className="text-sm font-mono text-blue-800 font-semibold">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            */}
            </div> 
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 px-4 bg-blue-50/50 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4 font-mono flex items-center justify-center">
              <PixelArt type="star" size="md" className="mr-3" />
              Work Experience
              <PixelArt type="heart" size="md" className="ml-3" />
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <Card
                key={job.id}
                className="border-4 border-blue-600 shadow-lg bg-white hover:shadow-xl transition-shadow relative"
              >
                <PixelArt type={index % 2 === 0 ? "flower" : "bunny"} size="sm" className="absolute -top-2 -right-2" />
                <CardHeader className="bg-blue-100 border-b-4 border-blue-600">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl text-blue-800 font-mono mb-2">{job.position}</CardTitle>
                      <CardDescription className="text-lg text-blue-700 font-mono font-semibold">
                        {job.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center text-blue-600 mt-2 md:mt-0">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span className="font-mono font-semibold">{job.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-6 font-mono leading-relaxed">{job.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-blue-800 mb-3 font-mono flex items-center">
                      <Code className="h-4 w-4 mr-2" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-blue-500 text-blue-700 font-mono hover:bg-blue-100 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3 font-mono flex items-center">
                      <Zap className="h-4 w-4 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-gray-700 font-mono">
                          <PixelArt type="star" size="sm" className="mr-2 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white/50 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4 font-mono flex items-center justify-center">
              <PixelArt type="bee" size="md" className="mr-3" />
              Personal Projects
              <PixelArt type="cloud" size="md" className="ml-3" />
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="border-4 border-blue-600 shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
              >
                <PixelArt
                  type={["heart", "butterfly", "flower", "bunny"][index % 4] as any}
                  size="sm"
                  className="absolute -top-2 -right-2 z-10"
                />
                <CardHeader className="p-0">
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover border-b-4 border-blue-600"
                    />
                    <Badge
                      className={`absolute top-4 right-4 font-mono ${
                        project.status === "Live"
                          ? "bg-green-600 text-white"
                          : project.status === "Beta"
                            ? "bg-yellow-500 text-white"
                            : "bg-blue-500 text-white"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl text-blue-800 mb-3 font-mono">{project.title}</CardTitle>
                  <CardDescription className="text-gray-700 mb-4 font-mono leading-relaxed">
                    {project.description}
                  </CardDescription>

                  <div className="mb-4">
                    <h4 className="font-semibold text-blue-800 mb-2 font-mono text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-blue-200 text-blue-800 font-mono text-xs border border-blue-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-blue-800 mb-2 font-mono text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600 font-mono">
                          <PixelArt type="star" size="sm" className="mr-2 mt-1 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <Button
                        asChild
                        className="bg-blue-600 hover:bg-blue-700 text-white font-mono text-sm border-2 border-blue-800 flex-1"
                      >
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    <Button
                      asChild
                      variant="outline"
                      className="border-2 border-blue-600 text-blue-700 hover:bg-blue-100 font-mono text-sm flex-1 bg-transparent"
                    >
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-12 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center mb-6">
            <PixelArt type="heart" size="md" className="mr-2" />
            <span className="text-xl font-mono font-bold">Thanks for visiting my digital garden!</span>
            <PixelArt type="flower" size="md" className="ml-2" />
          </div>
          <p className="font-mono mb-4">{"Let's grow something amazing together."}</p>
          <div className="flex justify-center space-x-6">
            <Link href={`mailto:${personal.email}`} className="hover:text-blue-300 transition-colors">
              <Mail className="h-6 w-6" />
            </Link>
            <Link href="https://github.com" className="hover:text-blue-300 transition-colors">
              <Github className="h-6 w-6" />
            </Link>
          </div>
          <Separator className="my-6 bg-blue-500" />
          <p className="text-sm font-mono text-blue-200">© 2024 {personal.name}. Crafted with 💙 and pixels.</p>
        </div>
      </footer>
    </div>
  )
}
