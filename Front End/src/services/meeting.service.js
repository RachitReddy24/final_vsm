import api from "./api";

// Get meeting details using booking token
export const getMeetingByToken = async (token) => {
  const response = await api.get(`/meetings/booking/${token}`);
  return response.data;
};

// Register visitor
export const registerVisitor = async (token, formData) => {
  const response = await api.post(
    `/meetings/booking/${token}/register`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};