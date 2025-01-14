import React from "react";
import { Medal, Star, Award, BookOpen, Briefcase, School, Book, User, Code } from "lucide-react";

const ProfessionalProfile = () => {
  const keyAchievements = [
    {
      title: "International Training",
      detail: "Trained international students for Physics Olympiads and AP Physics exams",
      icon: Medal
    },
    {
      title: "Global Reach",
      detail: "Successfully guided students from UK, USA, Australia, and Hong Kong",
      icon: Star
    },
    {
      title: "Competition Success",
      detail: "Consistent success rates in national and international Olympiads",
      icon: Award
    },
    {
      title: "Custom Materials",
      detail: "Developed teaching materials for advanced Physics learners",
      icon: Book
    }
  ];

  const professionalExperience = [
    {
      role: "Online Physics Olympiad Tutor",
      period: "January 2021 – Present",
      organization: "Freelance",
      details: [
        "Delivered personalized lessons for BPhO, SPhO, F=ma Contest, and AP Physics",
        "Utilized engaging teaching tools and simulations",
        "Created comprehensive learning plans",
        "Mentored diverse international students"
      ],
      icon: BookOpen
    },
    {
      role: "JEE Advanced Faculty",
      period: "July 2023 – Present",
      organization: "Unacademy, Indore",
      details: [
        "Teaching advanced Physics topics",
        "Conducting interactive live online classes",
        "Emphasizing problem-solving and conceptual clarity"
      ],
      icon: Briefcase
    },
    {
      role: "JEE Advanced Faculty",
      period: "January 2022 – July 2023",
      organization: "Allen Career Institute, Kota",
      details: [
        "Specialized in Mechanics and Modern Physics",
        "Designed challenging assignments for competitive exams"
      ],
      icon: Briefcase
    },
    {
      role: "Associate Content Developer",
      period: "August 2021 – January 2022",
      organization: "BYJU's",
      details: [
        "Authored Physics content for Olympiad and JEE preparation",
        "Simplified complex concepts into engaging content"
      ],
      icon: Code
    }
  ];

  const education = [
    {
      degree: "M.Sc. in Physics",
      institution: "Indian Institute of Technology, Madras",
      year: "June 2021",
      score: "CGPA: 7.89",
      icon: School
    },
    {
      degree: "B.Sc. Hons. in Mathematics",
      institution: "Shivaji College, University of Delhi",
      year: "June 2019",
      score: "CGPA: 8.43",
      icon: School
    },
    {
      degree: "Higher Secondary School",
      institution: "Jawahar Navodaya Vidyalaya, Morena",
      year: "June 2016",
      score: "Percentage: 94%",
      icon: School
    }
  ];

  const personalAchievements = [
    {
      title: "IIT JAM Physics 2019",
      detail: "All India Rank 86",
      icon: Award
    },
    {
      title: "National Graduate Physics Examination 2019",
      detail: "Among Top 26 nationally",
      icon: Star
    },
    {
      title: "IIT Madras",
      detail: "Merit scholarship recipient",
      icon: Medal
    },
    {
      title: "National Qualifications",
      detail: "Qualified INJSO and NTSE",
      icon: Award
    }
  ];

  const skills = [
    "Advanced Physics Topics: Mechanics, Quantum Mechanics, Thermodynamics, Electromagnetism",
    "Online Teaching Tools: Zoom, Google Meet, MS Teams",
    "Content Creation for Olympiad-level Physics",
    "Communication and Mentoring",
    "International Curricula: A-level, AP, IB Physics"
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Physics Education Professional
          </h1>
          <p className="text-xl text-gray-600">
            Specialized in Olympiad Training and Advanced Physics Education
          </p>
        </div>

        {/* Key Achievements Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyAchievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <achievement.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {achievement.title}
                  </h3>
                </div>
                <p className="text-gray-600 pl-11">{achievement.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Professional Experience</h2>
          <div className="space-y-6">
            {professionalExperience.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <exp.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.role}
                    </h3>
                    <p className="text-gray-600">
                      {exp.organization} | {exp.period}
                    </p>
                  </div>
                </div>
                <ul className="pl-11 space-y-2">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-700">• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-2">
                  <edu.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600">{edu.institution}</p>
                  </div>
                </div>
                <div className="pl-11">
                  <p className="text-gray-600">{edu.year} | {edu.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Achievements Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Personal Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personalAchievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <achievement.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600">{achievement.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Skills</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <User className="w-5 h-5 text-blue-600 mr-3" />
                  <p className="text-gray-700">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;