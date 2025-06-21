import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Shield, MapPin, Bell, Users, Smartphone, Headphones, ChevronRight, Play, Menu } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold">SafeGuardian</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link to="#" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link to="#app1" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Smart SOS
            </Link>
            <Link to="#app2" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Guardian AI
            </Link>
            <Link to="#features" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Features
            </Link>
            <Link to="#testimonials" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Testimonials
            </Link>
          </nav>
          <div className="hidden md:flex gap-4">
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Log In
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white py-20 md:py-32">
        <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex flex-col gap-6 md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 animate-fade-in">
              Empowering Safety Through Technology
            </h1>
            <p className="text-xl text-gray-600 max-w-md animate-fade-in animation-delay-200">
              AI-powered tools for real-time protection and prevention, designed specifically for women's safety.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8">Try Now</Button>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6">
                <Play className="mr-2 h-4 w-4" /> Watch Demo
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-float">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Woman using safety app on phone"
                className="object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Protection Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* App 1: Smart SOS */}
      <section id="app1" className="py-20 container">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative">
              <div className="relative z-10 border-8 border-white rounded-[2.5rem] shadow-xl overflow-hidden max-w-xs mx-auto">
                <img
                  src="/placeholder.svg?height=600&width=300"
                  alt="Smart SOS App Interface"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-1/4 -left-8 w-16 h-16 bg-purple-100 rounded-full"></div>
              <div className="absolute bottom-1/4 -right-8 w-24 h-24 bg-pink-100 rounded-full"></div>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Bell className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Smart SOS</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Instant Help When You Need It Most</h3>
            <p className="text-gray-600 mb-8">
              Our Smart SOS app uses AI to detect emergency situations and automatically alerts your trusted contacts
              with your precise location. With just one tap or voice command, help is on the way.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-lg mt-1">
                  <MapPin className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Live Location Tracking</h4>
                  <p className="text-gray-600">
                    Share your real-time location with trusted contacts during emergencies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-lg mt-1">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Trusted Circle Alerts</h4>
                  <p className="text-gray-600">Automatically notify your pre-selected emergency contacts.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-lg mt-1">
                  <Smartphone className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Voice-Activated SOS</h4>
                  <p className="text-gray-600">
                    Trigger alerts hands-free with voice commands when you can't reach your phone.
                  </p>
                </div>
              </div>
            </div>
            <Button className="mt-8 bg-purple-600 hover:bg-purple-700">
              Learn More <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* App 2: Guardian AI */}
      <section id="app2" className="py-20 bg-purple-50">
        <div className="container flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-pink-100 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-pink-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Guardian AI</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proactive Protection & Threat Detection
            </h3>
            <p className="text-gray-600 mb-8">
              Guardian AI works silently in the background, analyzing your surroundings and identifying potential
              threats before they become dangers. It's like having a personal security expert with you at all times.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-pink-100 p-2 rounded-lg mt-1">
                  <Bell className="h-5 w-5 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Threat Detection</h4>
                  <p className="text-gray-600">AI-powered analysis of surroundings to identify suspicious behavior.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-pink-100 p-2 rounded-lg mt-1">
                  <MapPin className="h-5 w-5 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Safe Route Planning</h4>
                  <p className="text-gray-600">Get recommendations for the safest routes based on real-time data.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-pink-100 p-2 rounded-lg mt-1">
                  <Headphones className="h-5 w-5 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">24/7 Virtual Companion</h4>
                  <p className="text-gray-600">
                    AI assistant that monitors your safety and provides guidance when needed.
                  </p>
                </div>
              </div>
            </div>
            <Button className="mt-8 bg-pink-600 hover:bg-pink-700">
              Learn More <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="relative z-10 border-8 border-white rounded-[2.5rem] shadow-xl overflow-hidden max-w-xs mx-auto">
                <img
                  src="/placeholder.svg?height=600&width=300"
                  alt="Guardian AI App Interface"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-1/3 -right-8 w-16 h-16 bg-purple-100 rounded-full"></div>
              <div className="absolute bottom-1/3 -left-8 w-24 h-24 bg-pink-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Safety Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our apps are packed with features designed to keep you safe in any situation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Bell className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Alerts</h3>
            <p className="text-gray-600">
              Customizable alert system that adapts to your specific safety needs and concerns.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Safe Zones</h3>
            <p className="text-gray-600">
              Define safe areas and receive notifications when entering or leaving these zones.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community Support</h3>
            <p className="text-gray-600">Connect with a network of users to share safety tips and report concerns.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Offline Mode</h3>
            <p className="text-gray-600">Essential safety features that work even without an internet connection.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Privacy Protection</h3>
            <p className="text-gray-600">
              Advanced encryption and privacy controls to keep your data secure and private.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Headphones className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Access to professional support team whenever you need assistance or guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-purple-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from women who feel safer and more confident with our apps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Sarah J."
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah J.</h4>
                  <p className="text-gray-500 text-sm">College Student</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The Smart SOS app has been a game-changer for my late-night walks across campus. My parents and I both
                sleep better knowing I have this protection."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Maya R."
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Maya R.</h4>
                  <p className="text-gray-500 text-sm">Business Traveler</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As someone who travels frequently for work, Guardian AI has become my essential companion. The safe
                route planning feature is incredibly helpful in unfamiliar cities."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Priya K."
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Priya K.</h4>
                  <p className="text-gray-500 text-sm">Working Mother</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I've set up both apps for my teenage daughter. The peace of mind knowing she has this level of
                protection is worth every penny."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Safety Is Our Priority</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
            Join thousands of women who have taken control of their safety with our AI-powered apps.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg">Download Now</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold">SafeGuardian</span>
              </div>
              <p className="text-gray-400">Empowering women with AI-powered safety solutions.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    Smart SOS
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    Guardian AI
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    Enterprise Solutions
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    Safety Tips
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} SafeGuardian. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

