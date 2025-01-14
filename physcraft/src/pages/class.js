import React, { useState } from "react";
import { Atom, BookOpen, FileText, Download } from "lucide-react";

const ClassCard = ({ classItem, isSelected, onMouseEnter, onMouseLeave }) => (
  <div
    className={`bg-white rounded-lg shadow p-6 transition-all duration-300 ${
      isSelected ? "shadow-xl" : "shadow-md"
    }`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="text-5xl mb-6">{classItem.icon}</div>
    <h3 className="text-xl font-semibold text-indigo-800 mb-4">{classItem.title}</h3>
    <div className="flex gap-2 mb-4">
      <span className="bg-indigo-100 px-3 py-1 rounded text-sm text-indigo-700">
        {classItem.duration}
      </span>
      <span className="bg-purple-100 px-3 py-1 rounded text-sm text-purple-700">
        {classItem.level}
      </span>
    </div>
    <p className="text-gray-600 mb-4">{classItem.description}</p>
    <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors">
      Learn More
    </button>
  </div>
);

const TestSeriesCard = ({ test }) => (
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-indigo-100 p-3 rounded-full">
        <FileText className="h-6 w-6 text-indigo-600" />
      </div>
      <h3 className="text-lg font-semibold text-indigo-800">{test.title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{test.description}</p>
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-500">{test.questions} questions</span>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
        Start Test
      </button>
    </div>
  </div>
);

const ResourceCard = ({ resource }) => (
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-purple-100 p-3 rounded-full">
        <BookOpen className="h-6 w-6 text-purple-600" />
      </div>
      <h3 className="text-lg font-semibold text-indigo-800">{resource.title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{resource.description}</p>
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-500">{resource.type}</span>
      <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
        <Download className="h-4 w-4" />
        Download PDF
      </button>
    </div>
  </div>
);

const PhysCraftAcademy = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [activeTab, setActiveTab] = useState('courses');

  const classes = [
    {
      title: "National and International Physics Olympiads",
      duration: "X weeks",
      level: "Advanced",
      description:
        "A specialized program for F=Ma, USAPHO, BPHO, and IPHO students, focusing on mastering physics concepts for Olympiads.",
      icon: "🏆",
    },
    {
      title: "International Curriculums (IB, IGCSE, Edexcel)",
      duration: "X weeks",
      level: "Intermediate to Advanced",
      description:
        "Comprehensive physics courses designed for students following IB, IGCSE, and Edexcel curriculums.",
      icon: "🌍",
    },
    {
      title: "AP Physics 1, 2, and C",
      duration: "X weeks",
      level: "Advanced",
      description:
        "A complete course covering AP Physics topics with a focus on problem-solving and conceptual understanding.",
      icon: "📚",
    },
    {
      title: "As and A-Level Physics",
      duration: "X weeks",
      level: "Advanced",
      description:
        "Detailed physics courses tailored for As and A-Level students to excel in their exams.",
      icon: "🎓",
    },
    {
      title: "Physics for JEE Mains and Advanced",
      duration: "X weeks",
      level: "Advanced",
      description:
        "A rigorous program to help students ace physics in JEE Mains and Advanced examinations.",
      icon: "⚡",
    },
    {
      title: "Physics for NEET",
      duration: "X weeks",
      level: "Intermediate",
      description:
        "Specialized physics classes focusing on NEET syllabus to strengthen conceptual clarity and problem-solving skills.",
      icon: "🔬",
    },
    {
      title: "Physics, Chemistry, and Mathematics for IGCSE and ICSE",
      duration: "X weeks",
      level: "Intermediate",
      description:
        "An integrated program covering physics, chemistry, and mathematics for IGCSE and ICSE students.",
      icon: "⚗️",
    },
    {
      title: "Physics, Chemistry, and Mathematics for CBSE",
      duration: "X weeks",
      level: "Intermediate",
      description:
        "Comprehensive courses covering physics, chemistry, and mathematics as per the CBSE curriculum.",
      icon: "📐",
    },
    {
      title: "Crash Courses for JEE and NEET Aspirants",
      duration: "Short-term",
      level: "Intensive",
      description:
        "Fast-paced crash courses designed to help JEE and NEET aspirants prepare in a limited time.",
      icon: "⚡",
    },
    {
      title: "IIT and NEET Foundation Physics",
      duration: "X weeks",
      level: "Foundation",
      description:
        "Foundation-level courses to build strong physics fundamentals for future IIT and NEET aspirants.",
      icon: "🎯",
    },
    {
      title: "Newtonian Mechanics",
      duration: "X weeks",
      level: "Intermediate",
      description:
        "An in-depth course covering all aspects of Newtonian Mechanics with practical examples and problem-solving.",
      icon: "🎪",
    },
  ];


  const testSeries = [
    {
      title: "F=ma Mock Test Series",
      description: "Comprehensive mock tests following F=ma exam pattern with detailed solutions",
      questions: 25
    },
    {
      title: "AP Physics 1 Mock Tests",
      description: "Practice tests covering all AP Physics 1 topics with explanatory answers",
      questions: 40
    },
    {
      title: "Senior Physics Challenge",
      description: "Challenge yourself with advanced physics problems",
      questions: 30
    },
    {
      title: "F=ma Previous Year Solutions",
      description: "Detailed solutions to past F=ma examination questions",
      questions: 100
    },
    {
      title: "AP Physics 2 Practice Tests",
      description: "Topic-wise tests for AP Physics 2 preparation",
      questions: 35
    },
    {
      title: "Revised Assignments",
      description: "Weekly revised assignments covering various physics topics",
      questions: 20
    }
  ];

  // New resources data
  const resources = [
    {
      title: "vinit_tyagi_olympiad_resume.pdf",
      description: "Comprehensive study material for F=ma exam preparation",
      type: "PDF Guide"
    },
    {
      title: "AP Physics Formula Sheet",
      description: "Complete formula reference for AP Physics 1 & 2",
      type: "Quick Reference"
    },
    {
      title: "Physics Olympiad Handbook",
      description: "Essential handbook for physics olympiad preparation",
      type: "Study Material"
    },
    {
      title: "Topic-wise Problem Sets",
      description: "Curated problem sets organized by topics",
      type: "Practice Material"
    },
    {
      title: "Previous Year Solutions",
      description: "Detailed solutions to past year questions",
      type: "Solutions Guide"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Atom className="h-8 w-8 text-indigo-600" />
            <h1 className="text-4xl font-bold text-indigo-900">PhysCraft Academy</h1>
          </div>
          <p className="text-lg text-gray-600">
            Comprehensive physics education for competitive exam preparation
          </p>
        </div>

        {/* Custom tabs without external dependency */}
        <div className="mb-8">
          <div className="flex justify-center gap-4 border-b border-gray-200">
            {['courses', 'tests', 'resources'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 text-sm font-medium transition-colors capitalize
                  ${activeTab === tab 
                    ? 'border-b-2 border-indigo-600 text-indigo-600' 
                    : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="space-y-8">
          {activeTab === 'courses' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classes.map((classItem, index) => (
                <ClassCard
                  key={index}
                  classItem={classItem}
                  isSelected={selectedClass === index}
                  onMouseEnter={() => setSelectedClass(index)}
                  onMouseLeave={() => setSelectedClass(null)}
                />
              ))}
            </div>
          )}

          {activeTab === 'tests' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testSeries.map((test, index) => (
                <TestSeriesCard key={index} test={test} />
              ))}
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhysCraftAcademy;