import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Change if your backend uses a different port
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT token automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Handle expired token or unauthorized responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Optional: Redirect to login
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;