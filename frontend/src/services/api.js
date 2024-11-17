import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = {
  // Get all contacts
  getContacts: async () => {
    try {
      const response = await axios.get(`${API_URL}/contacts`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Create a new contact
  createContact: async (contactData) => {
    try {
      const response = await axios.post(`${API_URL}/contacts`, contactData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Update a contact
  updateContact: async (id, contactData) => {
    try {
      const response = await axios.put(`${API_URL}/contacts/${id}`, contactData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Delete a contact
  deleteContact: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/contacts/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};

export default api;