import axios from 'axios'; // Ensure Axios is imported

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'; // Default to localhost if not set

const ApplicationService = {
  // API call to submit form data
  submit: async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/applications/submit`, formData);
      return response.data; // Return the response data
    } catch (error) {
      console.error('Error submitting application:', error);
      throw error; // Re-throw error for further handling
    }
  },
};

export default ApplicationService; // Export the service for use in components
