import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Change this for deployment

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/users/register`, userData);
};

export const loginUser = async (userData) => {
  return await axios.post(`${API_URL}/users/login`, userData);
};

export const getUserProfile = async (token) => {
  return await axios.get(`${API_URL}/users/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createCase = async (caseData, token) => {
  return await axios.post(`${API_URL}/cases`, caseData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getCases = async () => {
  return await axios.get(`${API_URL}/cases`);
};

export const placeBid = async (caseId, bidData, token) => {
  return await axios.post(`${API_URL}/bids/${caseId}`, bidData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getBidsForCase = async (caseId) => {
  return await axios.get(`${API_URL}/bids/${caseId}`);
};
