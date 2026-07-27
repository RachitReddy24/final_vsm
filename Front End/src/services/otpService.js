import api from "./api";

const sendOTP = (mobileNumber) => {
  return api.post("/otp/send", {
    mobileNumber,
  });
};

const verifyOTP = (mobileNumber, otp) => {
  return api.post("/otp/verify", {
    mobileNumber,
    otp,
  });
};

export default {
  sendOTP,
  verifyOTP,
};