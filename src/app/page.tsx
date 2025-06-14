"use client"

import React from "react"

import {useRef} from "react"
import Image from "next/image"
import Link from "next/link"
import {ArrowDown, Github, Linkedin, Mail, Menu, X} from "lucide-react"

import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"

export default function Portfolio() {
    // Refs for scrolling
    const aboutRef = useRef<HTMLDivElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    // Scroll to section function
    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({behavior: "smooth"})
        setIsMenuOpen(false) // Close menu after clicking
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Navigation */}
            <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
                <div className="container mx-auto px-6 md:px-8 lg:px-12 flex h-16 items-center justify-between">
                    <div className="font-bold text-xl">Kian K</div>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-6">
                        <button
                            onClick={() => scrollToSection(aboutRef)}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection(projectsRef)}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => scrollToSection(contactRef)}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Contact
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>

                    <Button onClick={() => scrollToSection(contactRef)} className="hidden md:flex">
                        Get in Touch
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t">
                        <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
                            <button
                                onClick={() => scrollToSection(aboutRef)}
                                className="text-muted-foreground hover:text-foreground transition-colors text-left"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection(projectsRef)}
                                className="text-muted-foreground hover:text-foreground transition-colors text-left"
                            >
                                Projects
                            </button>
                            <button
                                onClick={() => scrollToSection(contactRef)}
                                className="text-muted-foreground hover:text-foreground transition-colors text-left"
                            >
                                Contact
                            </button>
                            <Button onClick={() => scrollToSection(contactRef)} className="w-full">
                                Get in Touch
                            </Button>
                        </nav>
                    </div>
                )}
            </header>

            <main className="container mx-auto px-4">
                {/* Hero Section */}
                <section className="min-h-screen flex flex-col justify-center pt-16">
                    <div className="grid gap-8 md:grid-cols-2 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                                Hi, I&apos;m <span className="text-primary">Kian K</span>
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                Computer Science student passionate about building innovative web applications and
                                solving complex
                                problems.
                            </p>
                            <div className="flex gap-4">
                                <Button onClick={() => scrollToSection(projectsRef)}>View My Work</Button>
                                <Button variant="outline" onClick={() => scrollToSection(contactRef)}>
                                    Contact Me
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div
                                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                                <Image 
                                    src="/images/profile.jpg" 
                                    alt="Kian K" 
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-16">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="animate-bounce rounded-full"
                            onClick={() => scrollToSection(aboutRef)}
                        >
                            <ArrowDown className="h-6 w-6"/>
                            <span className="sr-only">Scroll down</span>
                        </Button>
                    </div>
                </section>

                {/* About Section */}
                <section ref={aboutRef} className="py-20">
                    <div className="space-y-4 text-center mb-12">
                        <h2 className="text-3xl font-bold">About Me</h2>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <p className="text-lg">
                                Hi! I&apos;m Kian, an aspiring application developer with a strong
                                interest in web development, databases, and cloud technologies. Currently,
                                I&apos;m in training and gaining practical experience with languages like
                                Python, JavaScript, and SQL, as well as tools like MongoDB, AWS, and Next.js.
                            </p>
                            <p className="text-lg">
                                I enjoy working on projects where technology meets real-world problems,
                                whether it&apos;s creating web applications, building databases, or developing
                                smart solutions. I learn quickly, enjoy working in teams, and am always
                                open to new challenges.

                                Feel free to check out my projects!
                            </p>
                            <div className="pt-4">
                                <h3 className="text-xl font-semibold mb-4">Education</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-medium">Software Engineer</h4>
                                        <p className="text-muted-foreground">Bildungszentrum Zürichsee • 2023 - 2027</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-xl font-semibold">Technical Skills</h3>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium">Frontend Development</span>
                                        <span>90%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full" style={{width: "90%"}}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium">Backend Development</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full" style={{width: "85%"}}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium">Data Structures & Algorithms</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full" style={{width: "80%"}}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium">Databases</span>
                                        <span>75%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full" style={{width: "75%"}}></div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "JavaScript",
                                        "Java",
                                        "React",
                                        "Next.js",
                                        "Node.js",
                                        "Python",
                                        "TailwindCSS",
                                        "Git",
                                        "SQL",
                                        "MongoDB",
                                    ].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm">
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section ref={projectsRef} className="py-20">
                    <div className="space-y-4 text-center mb-12">
                        <h2 className="text-3xl font-bold">My Projects</h2>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Here are some of the projects I&apos;ve worked on. Each project represents my skills and
                            passion for creating meaningful applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Swiss Pharma Website Project */}
                        <Card className="overflow-hidden">
                            <div className="h-48 overflow-hidden">
                                <Image
                                    src="/images/swiss-pharma.jpg"
                                    alt="Swiss Pharma Website"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle>Swiss Pharma Website</CardTitle>
                                <CardDescription>
                                    A website for Swiss Pharma that provides information about the
                                    company and its products.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-muted rounded-md text-xs">HTML</span>
                                    <span className="px-2 py-1 bg-muted rounded-md text-xs">CSS</span>
                                    <span className="px-2 py-1 bg-muted rounded-md text-xs">JavaScript</span>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-center gap-4">
                                <Button variant="outline" size="sm" asChild>
                                    <Link href="https://github.com/IM23a-tutkuno/SwissPharmaWebsite" target="_blank">
                                        <Github className="mr-2 h-4 w-4"/>
                                        Code
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        {/* Payment System Project */}
                        <Card className="overflow-hidden">
                            <div className="h-48 overflow-hidden">
                                <Image
                                    src="/images/payment-system.jpg"
                                    alt="Payment System"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle>Payment System</CardTitle>
                                <CardDescription>
                                    A simple payment function for experimenting with payment processing.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-muted rounded-md text-xs">HTML</span>
                                    <span className="px-2 py-1 bg-muted rounded-md text-xs">CSS</span>
                                    <span className="px-2 py-1 bg-muted rounded-md text-xs">JavaScript</span>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-center gap-4">
                                <Button variant="outline" size="sm" asChild>
                                    <Link href="https://github.com/IM23a-karimik/Payment-system" target="_blank">
                                        <Github className="mr-2 h-4 w-4"/>
                                        Code
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>

                    <div className="text-center mt-12">
                        <Button variant="outline" asChild>
                            <Link href="https://github.com/IM23a-karimik" target="_blank">
                                <Github className="mr-2 h-4 w-4"/>
                                View More on GitHub
                            </Link>
                        </Button>
                    </div>
                </section>

                {/* Contact Section */}
                <section ref={contactRef} className="py-20">
                    <div className="space-y-4 text-center mb-12">
                        <h2 className="text-3xl font-bold">Get In Touch</h2>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Have a question or want to work together? Feel free to contact me through my
                            social media.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <Mail className="h-5 w-5 text-primary"/>
                                        <span>kian_karimi@icloud.com</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                                <div className="flex gap-4">
                                    <Button variant="outline" size="icon" asChild>
                                        <Link href="https://github.com/IM23a-karimik" target="_blank">
                                            <Github className="h-5 w-5"/>
                                            <span className="sr-only">GitHub</span>
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="icon" asChild>
                                        <Link href="https://www.linkedin.com/in/kian-K-5a8313357/" target="_blank">
                                            <Linkedin className="h-5 w-5"/>
                                            <span className="sr-only">LinkedIn</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t py-8">
                <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <p className="text-muted-foreground">© {new Date().getFullYear()} Kian. All rights reserved.</p>
                        <Link 
                            href="/impressum" 
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Impressum
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}