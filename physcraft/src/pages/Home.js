import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Target, 
  Trophy, 
  Check, 
  Star, 
  Users, 
  ChevronRight,
  Atom,
  GraduationCap,
  Award
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
    <div className="mb-4 text-blue-600">
      <Icon className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
      {title}
    </h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HomePage = () => {
  const features = [
    {
      icon: Atom,
      title: "Comprehensive Physics Curriculum",
      description: "From mechanics to quantum physics, our structured learning paths cover all aspects of physics education."
    },
    {
      icon: Target,
      title: "Personalized Learning",
      description: "Individual attention and customized study plans designed to match your learning style and goals."
    },
    {
      icon: Trophy,
      title: "Proven Success Track",
      description: "Outstanding results in Physics Olympiads, board exams, and competitive entrances consistently."
    },
    {
      icon: GraduationCap,
      title: "Expert Instructors",
      description: "Learn from experienced educators with proven track records in physics education."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Resources",
      description: "Access to curated study materials, practice problems, and interactive learning tools."
    },
    {
      icon: Award,
      title: "International Recognition",
      description: "Success stories from students across the globe in various physics competitions."
    }
  ];

  const achievements = [
    { icon: Check, value: "95%", label: "Success Rate in Competitions" },
    { icon: Star, value: "500+", label: "Students Mentored" },
    { icon: Users, value: "20+", label: "Expert Physics Tutors" },
    { icon: Trophy, value: "100+", label: "International Medals" }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Excel in Physics,
                <br />
                Shape Your Future
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Join PhysCraft for comprehensive physics education that transforms complex concepts 
                into clear understanding, helping you achieve academic excellence.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/apply" 
                  className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center"
                >
                  Start Learning <ChevronRight className="ml-2" />
                </Link>
                <Link 
                  to="/classes" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/20 transition-colors duration-300 flex items-center justify-center"
                >
                  Explore Programs
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
  <img 
    src="img.png"
    alt="Physics Education"
    style={{ width: "250px", height: "250px" }}
    className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
  />
</div>

          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Choose PhysCraft?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Experience a revolutionary approach to physics education that combines 
            expert guidance, innovative teaching methods, and proven results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-16 text-center">
            Our Impact in Numbers
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map(({ icon: Icon, value, label }, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 text-center group"
              >
                <Icon className="w-12 h-12 text-blue-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-4xl font-bold text-blue-700 mb-3">{value}</h3>
                <p className="text-gray-600 text-lg">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Transform Your Physics Journey Today
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Join a community of dedicated learners and expert educators. 
            Turn your physics challenges into achievements with PhysCraft.
          </p>
          <Link 
            to="/apply" 
            className="bg-white text-blue-700 px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center"
          >
            Begin Your Journey <ChevronRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;