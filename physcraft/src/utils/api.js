import axios from "axios";

// Create a base URL for your backend
const BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api";

// Create an axios instance with base configuration
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Generic API service with CRUD operations
export const ApiService = {
  // Create a new resource
  create: async (endpoint, data) => {
    try {
      const response = await apiClient.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error(`Error creating resource at ${endpoint}:`, error);
      throw error;
    }
  },
};

// Example specific services
export const ApplicationService = {
  // Submit application
  submit: (applicationData) => {
    return ApiService.create("/applications", applicationData);
  },
};
