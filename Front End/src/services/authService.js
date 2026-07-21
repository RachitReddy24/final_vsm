import api from "./api";

const authService = {
  login: async (email, password) => {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    return response.data;
  },

  getProfile: async () => {
    const response = await api.get("/auth/profile");
    return response.data;
  },

  forgotPassword: async (email) => {
    const response = await api.post("/auth/forgot-password", {
      email,
    });

    return response.data;
  },

  resetPassword: async (token, password) => {
    const response = await api.post("/auth/reset-password", {
      token,
      password,
    });

    return response.data;
  },

  changePassword: async (currentPassword, newPassword) => {
    const response = await api.post("/auth/change-password", {
      currentPassword,
      newPassword,
    });

    return response.data;
  },
};

export default authService;