export default function AboutSection() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "We push the boundaries of what's possible, constantly exploring new technologies and methodologies to deliver cutting-edge solutions that drive progress."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership. By working closely with our clients and communities, we create solutions that truly make a difference."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Excellence",
      description: "Quality is at the heart of everything we do. We maintain the highest standards in our work, ensuring reliability, performance, and exceptional user experiences."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">TASK</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>


        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Founded with a vision to transform the digital landscape, TASK has been at the forefront of 
            technological innovation for over a decade. We specialize in creating powerful, user-centric 
            solutions that empower businesses and individuals to achieve their goals.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our team of passionate experts combines creativity with technical expertise to deliver 
            exceptional results. From startups to enterprise organizations, we've helped thousands 
            of clients turn their ideas into reality through cutting-edge technology and strategic thinking.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >

              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {value.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
              
            </div>
          ))}
        </div>

        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 ">50K+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 ">500+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 ">10+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 ">99%</div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}