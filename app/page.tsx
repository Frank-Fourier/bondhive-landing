"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Code2, DollarSign, FileText, Phone, Globe, MapPin, Users, Building, Award } from "lucide-react"
import Link from "next/link"

// Smooth scroll function
const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function BondHiveLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden">
      {/* Enhanced Background with patterns similar to presentation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-orange-600 to-orange-400"></div>
        
        {/* Flowing wave patterns */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "rgba(255, 255, 255, 0.1)", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "rgba(255, 255, 255, 0.05)", stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "rgba(255, 255, 255, 0.08)", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "rgba(255, 255, 255, 0.02)", stopOpacity: 1}} />
              </linearGradient>
            </defs>
            
            {/* Large flowing curves similar to presentation */}
            <path
              d="M-200 100 Q300 50 600 150 Q900 250 1400 100 L1400 0 L-200 0 Z"
              fill="url(#wave1)"
              className="animate-pulse"
              style={{animationDuration: '8s'}}
            />
            <path
              d="M-200 300 Q200 200 500 280 Q800 360 1400 220 L1400 100 Q900 250 600 150 Q300 50 -200 100 Z"
              fill="url(#wave2)"
              style={{animationDuration: '12s'}}
            />
            <path
              d="M-200 500 Q400 400 700 480 Q1000 560 1400 400 L1400 220 Q800 360 500 280 Q200 200 -200 300 Z"
              fill="rgba(255, 255, 255, 0.04)"
            />
            
            {/* Elliptical patterns similar to presentation */}
            <ellipse cx="300" cy="200" rx="150" ry="80" fill="rgba(255, 255, 255, 0.05)" transform="rotate(-20 300 200)" />
            <ellipse cx="900" cy="400" rx="200" ry="100" fill="rgba(255, 255, 255, 0.03)" transform="rotate(15 900 400)" />
            <ellipse cx="600" cy="600" rx="180" ry="90" fill="rgba(255, 255, 255, 0.06)" transform="rotate(-10 600 600)" />
          </svg>
        </div>
        
        {/* Floating subtle particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce" style={{animationDelay: '3s', animationDuration: '4s'}}></div>
        </div>
      </div>

      {/* Static Navigation - No longer sticky */}
      <nav className="relative z-50 py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Correct BondHive Logo - SVG recreation */}
              <div className="flex items-center space-x-3 group">
                <div className="relative transform group-hover:scale-110 transition-transform duration-300">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="drop-shadow-lg">
                    {/* Stacked ovals/hexagons logo */}
                    <ellipse cx="20" cy="12" rx="18" ry="8" fill="rgba(255, 255, 255, 0.9)" />
                    <ellipse cx="20" cy="20" rx="16" ry="7" fill="rgba(255, 255, 255, 0.7)" />
                    <ellipse cx="20" cy="28" rx="18" ry="8" fill="rgba(255, 255, 255, 0.9)" />
                    {/* Inner details */}
                    <ellipse cx="20" cy="12" rx="12" ry="5" fill="rgba(255, 255, 255, 0.5)" />
                    <ellipse cx="20" cy="28" rx="12" ry="5" fill="rgba(255, 255, 255, 0.5)" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-white tracking-tight drop-shadow-lg">BondHive</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group drop-shadow-sm">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#about" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group drop-shadow-sm">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#services" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group drop-shadow-sm">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#contact" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group drop-shadow-sm">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-32 px-6 overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
              Decentralized Strategy.
              <br />
              <span className="text-white/95">Centralized Vision.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-sm">
              Building secure blockchain-based solutions for the future of finance.
              <br className="hidden md:block" />
              <span className="text-white/80">Expert Web3 development and strategic advisory services.</span>
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-6 bg-white relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Company Description Card */}
            <Card className="bg-gradient-to-br from-white via-orange-50 to-orange-100 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center group-hover:text-orange-600 transition-colors duration-300">
                  <Building className="h-6 w-6 text-orange-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  BondHive Ltd. is a Web3-focused software development and strategic advisory firm. We specialize in
                  building blockchain-based applications, including DeFi platforms and smart contracts for the next generation of finance.
                </p>
              </CardContent>
            </Card>

            {/* Enhanced Team Section */}
            <Card className="bg-gradient-to-br from-white via-orange-50 to-orange-100 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center group-hover:text-orange-600 transition-colors duration-300">
                  <Users className="h-6 w-6 text-orange-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Leadership Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 hover:from-orange-200 hover:to-orange-100 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      F
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Francesco Filippo Tandoi</h4>
                      <p className="text-gray-600 text-sm">Co-founder / CTO</p>
                      <p className="text-gray-500 text-xs">4 years full-stack engineering, Smart Contract engineer for hedge funds</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 hover:from-orange-200 hover:to-orange-100 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      J
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Jatin Bedi</h4>
                      <p className="text-gray-600 text-sm">Co-founder / CEO</p>
                      <p className="text-gray-500 text-xs">Expertise in systematic DeFi trading, Ex-Investment Banker at Nomura</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Business Details Card */}
          <Card className="bg-gradient-to-br from-white via-orange-50 to-orange-100 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <MapPin className="h-6 w-6 text-orange-600 mr-3" />
                Business Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Globe className="h-4 w-4 text-orange-600 mr-2" />
                    Incorporation
                  </h4>
                  <p className="text-gray-700">British Virgin Islands</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <MapPin className="h-4 w-4 text-orange-600 mr-2" />
                    UK Operating Address
                  </h4>
                  <p className="text-gray-700">30 Churchill Place, London, E14 5RE</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <Code2 className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Blockchain App Development</CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  Custom blockchain application development tailored to your business needs with cutting-edge technology
                  and security.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                  <DollarSign className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-orange-600 transition-colors duration-300">DeFi Platform Design</CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  Design and development of secure, scalable decentralized finance platforms for the modern digital
                  economy.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <FileText className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Smart Contract Consulting</CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  Expert consulting and auditing services for smart contract development, security optimization, and
                  best practices.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-6 bg-white relative">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-white via-orange-50 to-orange-100 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 flex items-center justify-center">
                <Award className="h-6 w-6 text-orange-600 mr-3" />
                Funding Information
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
                <p className="text-gray-700">Currently funded through VC and grant agreements with strategic partners.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Contact Us</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Information Card */}
            <Card className="bg-gradient-to-br from-white via-orange-50 to-orange-100 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Get in Touch</CardTitle>
                <CardDescription className="text-gray-600">
                  Ready to start your Web3 journey? Contact us today.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-orange-100 to-orange-50 hover:from-orange-200 hover:to-orange-100 transition-all duration-300 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-900 font-medium text-lg group-hover:text-orange-600 transition-colors duration-300">+44-7394187473</span>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-orange-100 to-orange-50 hover:from-orange-200 hover:to-orange-100 transition-all duration-300 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-900 font-medium text-lg group-hover:text-orange-600 transition-colors duration-300">https://bondhive.xyz</span>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-orange-100 to-orange-50 hover:from-orange-200 hover:to-orange-100 transition-all duration-300 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium text-lg group-hover:text-orange-600 transition-colors duration-300">30 Churchill Place</p>
                    <p className="text-gray-700">London, E14 5RE</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Contact Form Card */}
            <Card className="bg-gradient-to-br from-white via-orange-50 to-orange-100 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                <CardDescription className="text-gray-600">
                  Fill out the form below and we'll get back to you soon.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-900 font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      className="bg-white border-orange-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 h-12 transition-all duration-300 hover:border-orange-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-900 font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-white border-orange-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 h-12 transition-all duration-300 hover:border-orange-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-900 font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      className="bg-white border-orange-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 min-h-[120px] transition-all duration-300 hover:border-orange-300"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 h-12">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-600/5"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-4 md:mb-0 group">
              <div className="relative transform group-hover:scale-110 transition-transform duration-300">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="drop-shadow-lg">
                  <ellipse cx="20" cy="12" rx="18" ry="8" fill="rgba(255, 255, 255, 0.9)" />
                  <ellipse cx="20" cy="20" rx="16" ry="7" fill="rgba(255, 255, 255, 0.7)" />
                  <ellipse cx="20" cy="28" rx="18" ry="8" fill="rgba(255, 255, 255, 0.9)" />
                  <ellipse cx="20" cy="12" rx="12" ry="5" fill="rgba(255, 255, 255, 0.5)" />
                  <ellipse cx="20" cy="28" rx="12" ry="5" fill="rgba(255, 255, 255, 0.5)" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">BondHive Ltd.</span>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium relative group">
                Terms
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400 text-sm">
              BondHive Ltd. is not a DAO. It is a private limited company incorporated in the British Virgin Islands.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
