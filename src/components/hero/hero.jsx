import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-auto bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden p-4">

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 bg-grid-white/10 bg-grid-16"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center max-w-5xl mx-auto">
         
         
          <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-blue-100 bg-blue-800/50 backdrop-blur-sm rounded-full border border-blue-700/50">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Trusted by over 50,000+ users worldwide
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Build Something
            <span className="block bg-gray-300 bg-clip-text text-transparent ">
              Extraordinary
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Transform your ideas into reality with our cutting-edge platform.
            Join thousands of creators who are already building the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 w-48 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700  shadow-lg hover:shadow-2xl">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group px-8 py-4 w-48 flex items-center justify-center gap-2 text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white/60 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <span>Pricing</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

          </div>

          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex justify-center items-center space-x-8 text-white/60 gap-5">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}