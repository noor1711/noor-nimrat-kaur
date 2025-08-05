"use client"

import React from "react";
import { portfolioData } from "./constants"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { PixelArt } from "@/components/pixel-art.jsx"
import { MapPin, Mail, ExternalLink, Github, Calendar, Code, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Animator from "@/components/Animator"
import JokeModal from "@/components/JokeModal.jsx"
// import Blinker from "@/components/Blinker.jsx";

export default function PixelatedPortfolio() {
  const { personal, workExperience, projects } = portfolioData

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Example breakpoint for mobile
    };

    checkScreenSize(); // Check on initial render
    window.addEventListener('resize', checkScreenSize); // Add event listener for resizing

    return () => window.removeEventListener('resize', checkScreenSize); // Clean up
  }, []);

  const [isDogActive, setIsDogActive] = React.useState(true)
  const [isWateringPlant, setIsWateringPlant] = React.useState(true)
  const [isJokeCatActive, setIsJokeCatActive] = React.useState(true)
  const [showJoke, setShowJoke] = React.useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 relative overflow-hidden">
      {/* Floating Pixel Art Decorations - Responsive positioning */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <PixelArt type="cloud" size="md" className="absolute top-10 left-2 sm:left-10 opacity-60" />
        <PixelArt type="cloud" size="sm" className="absolute top-20 right-2 sm:right-20 opacity-40" />
        <Image
          src="/pixelHeart.png"
          alt="Pixel Heart"
          width={60}
          height={40}
          priority
          className="absolute top-32 left-1/4 opacity-50 w-12 h-8 sm:w-16 sm:h-10"
        />
        <PixelArt type="star" size="sm" className="absolute top-40 right-1/3 opacity-60" />
        <Image
          src="/pixelFlower.png"
          alt="Pixel Flower"
          width={60}
          height={40}
          priority
          className="absolute top-60 sm:top-80 right-2 sm:right-10 opacity-40 w-12 h-8 sm:w-16 sm:h-10"
        />
        <PixelArt type="bunny" size="md" className="absolute bottom-40 left-2 sm:left-10 opacity-60" />
        <PixelArt type="bee" size="sm" className="absolute bottom-60 right-1/4 opacity-50" />
        <PixelArt type="heart" size="md" className="absolute bottom-20 left-1/3 opacity-40" />
        <PixelArt type="star" size="lg" className="absolute bottom-32 right-2 sm:right-20 opacity-50" />
      </div>

      {/* Header - Responsive */}
      <header className="sticky top-0 z-50 bg-blue-200 border-b-4 border-blue-300 shadow-lg">
        <div className="container mx-auto px-2 sm:px-4 py-2">
          <nav className="flex items-center justify-between">
            <div
              onMouseEnter={() => setIsDogActive(true)}
              onMouseLeave={() => setIsDogActive(false)}
              className="flex items-center space-x-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <Animator dimensions={{ width: 100, height: 100 }} isActive={isDogActive} spriteSheetPath={undefined} />
            </div>
            <div className="hidden sm:flex space-x-1">
              {["about", "experience", "projects"].map((section) => (
                <Button
                  key={section}
                  variant="ghost"
                  onClick={() => scrollToSection(section)}
                  className="text-white hover:bg-blue-400 hover:text-white font-mono text-sm sm:text-lg border-2 border-transparent hover:border-blue-300 transition-all duration-200"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              ))}
            </div>
            {/* Mobile menu button */}
            <div className="sm:hidden">
              <Button
                variant="ghost"
                className="text-white hover:bg-blue-400 font-mono text-sm"
                onClick={() => scrollToSection("about")}
              >
                About
              </Button>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-12">
            {/* Contact Card - Responsive */}
            <div className="lg:col-span-1 hover:shadow-xl transition-shadow duration-300">
              <Card className="border-4 border-blue-300 shadow-lg bg-white relative lg:sticky lg:top-12">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="mb-6 relative">
                    <Image
                      src={"/noorPortfolio.png"}
                      alt={personal.name}
                      height={150}
                      width={150}
                      className="mx-auto rounded-lg shadow-lg w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2 font-mono">{personal.name}</h3>
                  <p className="text-base sm:text-lg text-blue-700 mb-6 font-mono">{personal.title}</p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-center text-blue-600">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-3" />
                      <span className="font-mono text-sm sm:text-base">{personal.location}</span>
                    </div>
                    <div className="flex items-center justify-center text-blue-600">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-3" />
                      <span className="font-mono text-xs sm:text-sm break-all">{personal.email}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono border-2 border-blue-800 text-sm sm:text-base"
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

            {/* Bio Section - Responsive */}
            <div className="lg:col-span-2 flex flex-col justify-around">
              <div className="mb-8">
                <div className="flex flex-col lg:flex-row justify-around items-center mb-4 space-y-4 lg:space-y-0">
                  <div className="text-center lg:text-left">
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-blue-800 mb-2 sm:mb-4">Software</h1>
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-blue-600 mb-4">Engineer</h1>
                  </div>
                  <div>
                    <div
                      onMouseEnter={() => setIsJokeCatActive(true)}
                      onMouseLeave={() => setIsJokeCatActive(false)}
                      className="flex items-center space-x-3 hover:cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => setShowJoke(true)}
                    >
                      <Animator dimensions={{height: 200, width: 200}} spriteSheetPath="/clickMeJokeCat.png" isActive={isJokeCatActive} />
                    </div>
                  </div>
                  <JokeModal showJoke={showJoke} closeJoke={() => setShowJoke(false)} />
                </div>
              </div>

              {/* Bio Content - Responsive */}
              <div className="flex flex-col items-center">
                <p className="text-gray-700 font-mono leading-relaxed mb-6 text-sm sm:text-base text-center lg:text-left">
                  {personal.bio}
                </p>
              </div>

              {/* Stats Section - Responsive */}
              <div className="flex flex-col sm:flex-row justify-around items-center w-full space-y-4 sm:space-y-0">
                <div className="text-center mb-6">
                  <h1 className="text-4xl sm:text-6xl font-bold text-blue-800 mb-2 font-mono hover:text-blue-600">
                    2+
                  </h1>
                  <h3 className="text-sm sm:text-lg text-blue-600 font-mono">Years of Experience</h3>
                </div>
                <div className="text-center mb-6">
                  <h1 className="text-4xl sm:text-6xl font-bold text-blue-800 mb-2 font-mono hover:text-blue-600">
                    10+
                  </h1>
                  <h3 className="text-sm sm:text-lg text-blue-600 font-mono">Projects Completed</h3>
                </div>
                <div className="text-center mb-6">
                  <h1 className="text-4xl sm:text-6xl font-bold text-blue-800 mb-2 font-mono hover:text-blue-600">
                    300+
                  </h1>
                  <h3 className="text-sm sm:text-lg text-blue-600 font-mono">Diet Coke Finished</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section - Responsive */}
      <section id="experience" className="py-10 sm:py-20 px-2 sm:px-4 bg-blue-50/50 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-6 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0">
            <div
              onMouseEnter={() => setIsWateringPlant(true)}
              onMouseLeave={() => setIsWateringPlant(false)}
                className="flex items-center space-x-3 hover:cursor-pointer">
                  <Animator dimensions={{ width: 200, height: 200 }} spriteSheetPath="/bigFlowerWatering.png" isActive={isWateringPlant} />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-blue-800 mb-4 font-mono">Work Experience</h2>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <Card
                key={job.id}
                className="border-4 py-0 border-blue-600 shadow-lg bg-white hover:shadow-xl transition-shadow relative"
              >
                <CardHeader className="bg-blue-100 py-4 sm:py-6 border-b-4 border-blue-600">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-lg sm:text-2xl text-blue-800 font-mono mb-2">{job.position}</CardTitle>
                      <CardDescription className="text-base sm:text-lg text-blue-700 font-mono font-semibold">
                        {job.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center text-blue-600 mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      <span className="font-mono font-semibold text-sm sm:text-base">{job.duration}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-4 sm:p-6 py-0">
                  {job?.roles?.map((role, roleIndex) => (
                    <div key={roleIndex} className="flex flex-col md:flex-row md:items-center md:justify-between py-2">
                      <CardDescription className="text-sm sm:text-md text-blue-700 font-mono font-semibold">
                        {role.role}
                      </CardDescription>
                      <div className="flex items-center text-blue-600 mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="font-mono font-semibold text-sm">{role.time}</span>
                      </div>
                    </div>
                  ))}

                  <p className="text-gray-700 mb-6 top-6 mt-6 font-mono leading-relaxed text-sm sm:text-base">
                    {job.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-blue-800 mb-3 font-mono flex items-center text-sm sm:text-base">
                      <Code className="h-4 w-4 mr-2" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-blue-500 text-blue-700 font-mono hover:bg-blue-100 transition-colors text-xs sm:text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-blue-800 mb-3 font-mono flex items-center text-sm sm:text-base">
                      <Zap className="h-4 w-4 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-gray-700 font-mono text-sm sm:text-base">
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

      {/* Projects Section - Responsive */}
      <section id="projects" className="py-10 sm:py-20 px-2 sm:px-4 bg-white/50 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-blue-800 mb-4 font-mono flex items-center justify-center">
              <PixelArt type="bee" size="md" className="mr-3" />
              Personal Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="border-4 border-blue-600 shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
              >
                <CardHeader className="p-0">
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-32 sm:h-48 object-cover border-b-4 border-blue-600"
                    />
                    <Badge
                      className={`absolute top-4 right-4 font-mono text-xs sm:text-sm ${
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

                <CardContent className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl text-blue-800 mb-3 font-mono">{project.title}</CardTitle>
                  <CardDescription className="text-gray-700 mb-4 font-mono leading-relaxed text-sm sm:text-base">
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
                      {project.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600 font-mono">
                          <PixelArt type="star" size="sm" className="mr-2 mt-1 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
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

      {/* Footer - Responsive */}
      <footer className="bg-blue-600 text-white py-8 sm:py-12 px-2 sm:px-4 relative z-10">
        <div className="container mx-auto text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-6 space-y-2 sm:space-y-0">
            <PixelArt type="heart" size="md" className="mr-0 sm:mr-2" />
            <span className="text-lg sm:text-xl font-mono font-bold">Thanks for visiting my digital garden!</span>
            <PixelArt type="flower" size="md" className="ml-0 sm:ml-2" />
          </div>
          <p className="font-mono mb-4 text-sm sm:text-base">{"Let's grow something amazing together."}</p>
          <div className="flex justify-center space-x-6">
            <Link href={`mailto:${personal.email}`} className="hover:text-blue-300 transition-colors">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
            <Link href="https://github.com" className="hover:text-blue-300 transition-colors">
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
          </div>
          <Separator className="my-6 bg-blue-500" />
          <p className="text-xs sm:text-sm font-mono text-blue-200">
            © 2025 {personal.name}. Crafted with love and pixels.
          </p>
        </div>
      </footer>
    </div>
  )
}
