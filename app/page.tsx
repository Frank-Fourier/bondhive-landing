import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Code2, DollarSign, FileText, Phone, Globe, MapPin, Users, Building, Award, Hexagon } from "lucide-react"
import Link from "next/link"

export default function BondHiveLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden">
      {/* Flowing Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
            <path
              d="M-100 200C200 150 400 100 600 200C800 300 1000 250 1300 200V0H-100V200Z"
              fill="rgba(255, 255, 255, 0.1)"
            />
            <path
              d="M-100 400C200 350 400 300 600 400C800 500 1000 450 1300 400V200C1000 250 800 300 600 200C400 100 200 150 -100 200V400Z"
              fill="rgba(255, 255, 255, 0.05)"
            />
            <path
              d="M-100 600C200 550 400 500 600 600C800 700 1000 650 1300 600V400C1000 450 800 500 600 400C400 300 200 350 -100 400V600Z"
              fill="rgba(255, 255, 255, 0.08)"
            />
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* BondHive Logo */}
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Hexagon className="h-8 w-8 text-white fill-white/20" />
                  <Hexagon className="h-6 w-6 text-white absolute top-1 left-1 fill-white/40" />
                  <Hexagon className="h-4 w-4 text-white absolute top-2 left-2 fill-white" />
                </div>
                <span className="text-2xl font-bold text-white">BondHive</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-white/90 hover:text-white transition-colors font-medium">
                Home
              </Link>
              <Link href="#about" className="text-white/90 hover:text-white transition-colors font-medium">
                About
              </Link>
              <Link href="#services" className="text-white/90 hover:text-white transition-colors font-medium">
                Services
              </Link>
              <Link href="#contact" className="text-white/90 hover:text-white transition-colors font-medium">
                Contact
              </Link>
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-6 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center py-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Decentralized Strategy.
              <br />
              <span className="text-white/90">Centralized Vision.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Building secure blockchain-based solutions for the future of finance.
            </p>
            <Button
              size="lg"
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-6 bg-white relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Company Description Card */}
            <Card className="bg-gradient-to-br from-white to-orange-50 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Building className="h-6 w-6 text-orange-600 mr-3" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  BondHive Ltd. is a Web3-focused software development and strategic advisory firm. We specialize in
                  building blockchain-based applications, including DeFi platforms and smart contracts.
                </p>
              </CardContent>
            </Card>

            {/* Leadership Card */}
            <Card className="bg-gradient-to-br from-white to-orange-50 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Users className="h-6 w-6 text-orange-600 mr-3" />
                  Leadership Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-orange-50">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Francesco Filippo Tandoi</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-orange-50">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Jatin Bedi</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Business Details Card */}
          <Card className="bg-gradient-to-br from-white to-orange-50 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <MapPin className="h-6 w-6 text-orange-600 mr-3" />
                Business Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg bg-orange-50">
                  <h4 className="font-semibold text-gray-900 mb-2">Incorporation</h4>
                  <p className="text-gray-700">British Virgin Islands</p>
                </div>
                <div className="p-4 rounded-lg bg-orange-50">
                  <h4 className="font-semibold text-gray-900 mb-2">UK Operating Address</h4>
                  <p className="text-gray-700">30 Churchill Place, London, E14 5RE</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Code2 className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Blockchain App Development</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  Custom blockchain application development tailored to your business needs with cutting-edge technology
                  and security.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <DollarSign className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">DeFi Platform Design</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  Design and development of secure, scalable decentralized finance platforms for the modern digital
                  economy.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <FileText className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Smart Contract Consulting</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  Expert consulting and auditing services for smart contract development, security optimization, and
                  best practices.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 200" fill="none">
            <path d="M0 100C200 50 400 150 600 100C800 50 1000 150 1200 100V0H0V100Z" fill="rgba(255, 255, 255, 0.1)" />
          </svg>
        </div>
        <div className="container mx-auto relative z-10">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
            <CardContent className="p-8 text-center">
              <Award className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Funding</h3>
              <p className="text-white/90 text-lg">
                Currently funded through VC and grant agreements with strategic partners.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information Card */}
            <Card className="bg-gradient-to-br from-white to-orange-50 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Get in Touch</CardTitle>
                <CardDescription className="text-gray-600">
                  Ready to start your Web3 journey? Contact us today.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-orange-100 to-orange-50 hover:from-orange-200 hover:to-orange-100 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-900 font-medium text-lg">+44-7394187473</span>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-orange-100 to-orange-50 hover:from-orange-200 hover:to-orange-100 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-900 font-medium text-lg">https://bondhive.xyz</span>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-orange-100 to-orange-50 hover:from-orange-200 hover:to-orange-100 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium text-lg">30 Churchill Place</p>
                    <p className="text-gray-700">London, E14 5RE</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form Card */}
            <Card className="bg-gradient-to-br from-white to-orange-50 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300">
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
                      className="bg-white border-orange-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 h-12"
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
                      className="bg-white border-orange-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-900 font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      className="bg-white border-orange-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-12">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="relative">
                <Hexagon className="h-10 w-10 text-white fill-white/20" />
                <Hexagon className="h-8 w-8 text-white absolute top-1 left-1 fill-white/40" />
                <Hexagon className="h-6 w-6 text-white absolute top-2 left-2 fill-white" />
              </div>
              <span className="text-2xl font-bold text-white">BondHive Ltd.</span>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                Terms
              </Link>
              <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                Privacy Policy
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
