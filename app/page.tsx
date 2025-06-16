import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Code2, DollarSign, FileText, Phone, Globe, MapPin, Users, Building, Award, TrendingUp, Shield, Zap, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BondHiveLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden">
      {/* Enhanced Flowing Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="flow1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "rgba(255, 255, 255, 0.15)", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "rgba(255, 255, 255, 0.05)", stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="flow2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "rgba(255, 255, 255, 0.08)", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "rgba(255, 255, 255, 0.02)", stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <path
              d="M-100 200C200 150 400 100 600 200C800 300 1000 250 1300 200V0H-100V200Z"
              fill="url(#flow1)"
              className="animate-pulse"
            />
            <path
              d="M-100 400C200 350 400 300 600 400C800 500 1000 450 1300 400V200C1000 250 800 300 600 200C400 100 200 150 -100 200V400Z"
              fill="url(#flow2)"
            />
            <path
              d="M-100 600C200 550 400 500 600 600C800 700 1000 650 1300 600V400C1000 450 800 500 600 400C400 300 200 350 -100 400V600Z"
              fill="rgba(255, 255, 255, 0.06)"
            />
          </svg>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
        </div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Enhanced BondHive Logo */}
              <div className="flex items-center space-x-3 group">
                <div className="relative transform group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/bondhive-logo.png"
                    alt="BondHive Logo"
                    width={40}
                    height={40}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <span className="text-2xl font-bold text-white tracking-tight">BondHive</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#about" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#services" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#contact" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="relative py-20 px-6 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center py-20">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
                USDi
              </h1>
              <h2 className="text-3xl md:text-5xl font-semibold text-white/95 mb-8 leading-tight">
                A new layer
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Building the future of decentralized finance with secure blockchain-based solutions. 
              <br className="hidden md:block" />
              <span className="text-white/80">Decentralized Strategy. Centralized Vision.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                Explore USDi
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* New USDi/Yield Layer Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">USDi / The Yield Layer</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Strategic Partnerships */}
            <Card className="bg-gradient-to-br from-white to-orange-50 border-orange-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center mb-4">
                  <Target className="h-6 w-6 text-orange-600 mr-3" />
                  Strategic Partnerships
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm font-medium mb-4">Progress so far:</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-red-100 to-red-50 p-4 rounded-xl border border-red-200 flex items-center justify-center h-16">
                    <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-xl border border-blue-200 flex items-center justify-center h-16">
                    <div className="text-blue-600 font-bold text-lg">A</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-4 rounded-xl border border-gray-200 flex items-center justify-center h-16">
                    <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Collaborative Engagements */}
            <Card className="bg-gradient-to-br from-white to-orange-50 border-orange-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Users className="h-6 w-6 text-orange-600 mr-3" />
                  Collaborative Engagements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Stellar</h4>
                  <p className="text-gray-700 text-sm">Payments integration in LatAm & Africa</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Neutron</h4>
                  <p className="text-gray-700 text-sm">Integration partnerships with Mars, Astroport (DEX), and Drop for incentivizing adoption</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Funding & Support */}
          <Card className="bg-gradient-to-br from-white to-orange-50 border-orange-200 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Award className="h-6 w-6 text-orange-600 mr-3" />
                Funding & Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed">
                Secured funding from Draper, the Neutron Foundation, Stellar and other initial backers
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced About Us Section */}
      <section id="about" className="py-20 px-6 bg-white relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
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
                  Team
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
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 hover:from-orange-200 hover:to-orange-100 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      J
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Jatin Bedi</h4>
                      <p className="text-gray-600 text-sm">Co-founder / CEO</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
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

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
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
                <Image
                  src="/bondhive-logo.png"
                  alt="BondHive Logo"
                  width={40}
                  height={40}
                  className="rounded-lg shadow-lg"
                />
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
