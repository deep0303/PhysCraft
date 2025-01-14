import React, { useState, } from "react";
import ApplicationService from "../../src/api/ApplicationService";
 

const Apply = () => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    gradeInFall: "",
    classesInterested: "",
    goals: "",
    physicsBackground: {
      mechanics: false,
      waves: false,
      thermodynamics: false,
      electricity: false,
      magnetism: false,
      modern: false,
    },
  });

  const handleCheckboxChange = (name) => {
    setFormData((prevState) => ({
      ...prevState,
      physicsBackground: {
        ...prevState.physicsBackground,
        [name]: !prevState.physicsBackground[name],
      },
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting form data:', formData);  // Add this line
      const response = await ApplicationService.submit(formData);
  
      if (!formData.firstName || !formData.lastName || !formData.emailAddress) {
        alert("Please fill in all required fields");
        return;
      }
  
      // Debug: Log the payload being sent
      console.log("Prepared form data:", formData);
   
      console.log("Submission response:", response);
      alert("Application submitted successfully!");
  
      // Reset form data
      setFormData({
        firstName: "",
        lastName: "",
        emailAddress: "",
        parentName: "",
        parentPhone: "",
        parentEmail: "",
        gradeInFall: "",
        classesInterested: "",
        goals: "",
        physicsBackground: {
          mechanics: false,
          waves: false,
          thermodynamics: false,
          electricity: false,
          magnetism: false,
          modern: false,
        },
      });
    } catch (error) {
      console.error("Form submission error:", error.response || error.message);
      alert(
        `Failed to submit application: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-indigo-900 text-center">
            Apply to PhysCraft
          </h1>
          <p className="text-gray-700 text-center text-lg">
            PhysCraft encourages students interested in physics and the
            AP/USAPhO Physics Olympiad exams to apply. Priority is given to
            those with strong math and science fundamentals and commitment to
            attendance.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-indigo-900 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                />
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-indigo-900 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="atext"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                />
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <label
                htmlFor="emailAddress"
                className="block text-sm font-semibold text-indigo-900 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
              />
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg space-y-6">
              <h3 className="text-lg font-semibold text-indigo-900 mb-4">
                Parent Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="parentName"
                    className="block text-sm font-semibold text-indigo-900 mb-2"
                  >
                    Parent Name (Full)
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="parentPhone"
                    className="block text-sm font-semibold text-indigo-900 mb-2"
                  >
                    Parent Phone Number
                  </label>
                  <input
                    type="tel"
                    id="parentPhone"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="parentEmail"
                  className="block text-sm font-semibold text-indigo-900 mb-2"
                >
                  Parent Email Address
                </label>
                <input
                  type="email"
                  id="parentEmail"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                />
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <label
                htmlFor="gradeInFall"
                className="block text-sm font-semibold text-indigo-900 mb-2"
              >
                Grade in Fall 2024
              </label>
              <select
                id="gradeInFall"
                name="gradeInFall"
                value={formData.gradeInFall}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
              >
                <option value="">Select grade</option>
                <option value="9">9th Grade</option>
                <option value="10">10th Grade</option>
                <option value="11">11th Grade</option>
                <option value="12">12th Grade</option>
              </select>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <label
                htmlFor="classesInterested"
                className="block text-sm font-semibold text-indigo-900 mb-2"
              >
                Class(es) Interested in Taking
              </label>
              <textarea
                id="classesInterested"
                name="classesInterested"
                value={formData.classesInterested}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                placeholder="List the classes you wish to apply to"
              />
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <label
                htmlFor="goals"
                className="block text-sm font-semibold text-indigo-900 mb-2"
              >
                Goals
              </label>
              <textarea
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                placeholder="Please state what you wish to gain from physics class"
              />
            </div>
            {/* <div className="bg-blue-50 p-4 rounded-lg">
              <label
                htmlFor="honorsAwards"
                className="block text-sm font-semibold text-indigo-900 mb-2"
              >
                Awards from Physics, Math or Science Competitions
              </label>
              <textarea
                id="honorsAwards"
                name="honorsAwards"
                value={formData.honorsAwards}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                placeholder="List any relevant awards or achievements (optional)"
              />
            </div> */}

            <div className="bg-indigo-50 p-6 rounded-lg">
              <label className="block text-lg font-semibold text-indigo-900 mb-4">
                Physics Background
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {formData.physicsBackground &&
                  Object.entries(formData.physicsBackground).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex items-center space-x-3 bg-white p-3 rounded-lg"
                      >
                        <input
                          type="checkbox"
                          id={key}
                          checked={value}
                          onChange={() => handleCheckboxChange(key)}
                          className="h-5 w-5 text-indigo-600 rounded border-indigo-300 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={key}
                          className="text-sm text-indigo-900 font-medium"
                        >
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </label>
                      </div>
                    )
                  )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 px-6 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
