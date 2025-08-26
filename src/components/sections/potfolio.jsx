import { useState } from 'react';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const portfolioData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      description: "A full-stack e-commerce solution with modern UI and secure payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 2,
      title: "Fitness Mobile App",
      category: "Mobile App",
      tags: ["React Native", "Firebase", "Health Kit", "AI"],
      description: "Cross-platform fitness app with AI-powered workout recommendations.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 3,
      title: "Corporate Dashboard",
      category: "UI/UX Design",
      tags: ["Figma", "Analytics", "Dashboard", "Data Viz"],
      description: "Modern analytics dashboard design for enterprise data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 4,
      title: "Cloud Migration Project",
      category: "Cloud Solutions",
      tags: ["AWS", "Docker", "Kubernetes", "DevOps"],
      description: "Complete infrastructure migration from on-premise to cloud for scalability.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 5,
      title: "Brand Identity System",
      category: "UI/UX Design",
      tags: ["Branding", "Logo Design", "Style Guide", "Adobe"],
      description: "Complete brand identity and design system for a tech startup.",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 6,
      title: "Restaurant Booking App",
      category: "Mobile App",
      tags: ["Flutter", "Maps API", "Real-time", "Payment"],
      description: "Restaurant discovery and booking app with real-time availability.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    }
  ];

  const categories = ['All', ...new Set(portfolioData.map(project => project.category))];

  const filteredProjects = activeFilter === 'All' 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their digital goals through innovative solutions.
          </p>
        </div>


        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.link}
                    className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    View Project
                  </a>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700  shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}