import React from 'react';
import { 
  Users, 
  GraduationCap,  
  BookOpen, 
  Star, 
  Target, 
  Award,
  MapPin,
  TrendingUp
} from 'lucide-react';

const achievements = [
  { 
    icon: <Star className="text-blue-600 w-8 h-8 mb-2" />, 
    title: "International Tutoring", 
    description: "Successfully guided students from the UK, USA, Australia, and Hong Kong in Physics competitions." 
  },
  { 
    icon: <Target className="text-green-600 w-8 h-8 mb-2" />, 
    title: "Olympiad Expertise", 
    description: "Specialized in training students for prestigious Physics Olympiads like BPhO, SPhO, and F=ma Contest." 
  },
  { 
    icon: <TrendingUp className="text-purple-600 w-8 h-8 mb-2" />, 
    title: "Consistent Success", 
    description: "Achieved remarkable success rates with students winning awards in national and international Olympiads." 
  }
];

const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Hero Section with Subtle Animation */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-500 transform -skew-x-12 -translate-x-1/4"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-indigo-600 transform skew-x-12 translate-x-1/4"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Vinit: Your Physics Mentor
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-300">
            Empowering students across the globe to excel in physics through personalized, comprehensive learning.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-12 space-y-8">
        {/* Professional Journey and About Me Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Professional Journey Card */}
          <div className="bg-white shadow-2xl rounded-xl p-6 transform transition hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <GraduationCap className="mr-3 text-blue-600 animate-pulse" />
              Professional Journey
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Physics Educator",
                  company: "Unacademy",
                  period: "Jul 2023–Present",
                  description: "Teaching Physics for JEE Advanced and Olympiad, mentoring students to excel in competitive exams.",
                  icon: <Star className="text-yellow-500 mr-2" />
                },
                {
                  title: "Physics Teacher",
                  company: "Young Thinks (UK) Educational Institute",
                  period: "Jan 2023–Present",
                  description: "Teaching students for international curriculums and Physics Olympiads with a focus on conceptual understanding.",
                  icon: <Target className="text-green-500 mr-2" />
                },
                {
                  title: "Senior Physics Faculty",
                  company: "Allen Career Institute, Kota",
                  period: "Jan 2018–Jun 2023",
                  description: "Trained students for JEE Advanced and NEET, ensuring top-tier academic performance.",
                  icon: <Award className="text-purple-500 mr-2" />
                }
              ].map((experience, index) => (
                <div 
                  key={index} 
                  className="border-l-4 border-blue-500 pl-4 hover:bg-blue-50 transition duration-200 rounded-r-lg p-2 group"
                >
                  <div className="flex items-center mb-2">
                    {experience.icon}
                    <h3 className="font-semibold text-lg">{experience.title}</h3>
                  </div>
                  <p className="text-gray-600">{experience.company}</p>
                  <p className="text-sm text-gray-500">{experience.period}</p>
                  <p className="mt-2 text-gray-700 group-hover:text-blue-800 transition">
                    {experience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* About Me Card */}
          <div className="bg-white shadow-2xl rounded-xl p-6 transform transition hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Users className="mr-3 text-blue-600 animate-bounce" />
              About Me
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="relative pl-6 before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-blue-500 before:rounded-full">
                A graduate from IIT Madras, I've dedicated over 7 years to mentoring more than 1000 students 
                across online and offline platforms. My expertise spans multiple curriculums including 
                Olympiads, JEE, NEET, IGCSE, AP Physics, and more.
              </p>
              <p className="relative pl-6 before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-blue-500 before:rounded-full">
                My teaching philosophy centers on a student-friendly approach that encourages active 
                participation and personalized learning. I adapt my teaching pace to ensure each student 
                fully comprehends complex physics concepts.
              </p>
            </div>
          </div>
        </div>

        {/* Key Achievements Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <Award className="mr-3 text-green-600" /> Key Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center"
              >
                {achievement.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Teaching Approach Section */}
        <div className="bg-white shadow-2xl rounded-xl p-6 hover:shadow-3xl transition duration-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <BookOpen className="mr-3 text-blue-600" />
            Teaching Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-blue-800">What I Offer</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li className="hover:text-blue-600 transition">Comprehensive problem-solving explanations</li>
                <li className="hover:text-blue-600 transition">Crash courses for JEE and NEET</li>
                <li className="hover:text-blue-600 transition">Homework and exam assistance</li>
                <li className="hover:text-blue-600 transition">Online lessons via Zoom, Google Meet, Skype</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-indigo-800">My Mission</h3>
              <p className="text-gray-700">
                As the founder of AcadLeap Tutors, I'm committed to personalized education. 
                My goal is to transform physics into a highly scoring subject for every student.
              </p>
            </div>
          </div>
        </div>

        {/* Location and Contact Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-8 text-center shadow-2xl">
          <div className="flex justify-center items-center mb-4">
            <MapPin className="mr-3 text-white animate-bounce" />
            <h2 className="text-xl font-bold">Location and Contact</h2>
          </div>
          <p className="mb-2">Delhi, India</p>
          <p className="text-sm opacity-75 mb-4">*Currently offering online classes</p>
          
          <div className="mt-6">
            <a 
              href="tel:+918750038755" 
              className="bg-white text-blue-700 px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300 inline-flex items-center mx-auto shadow-lg"
            >
              Contact Me: +91 87500 38755
            </a>
          </div>
        </div>
      </div> 

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default About;