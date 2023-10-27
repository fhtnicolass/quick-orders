// api.js
import axios from 'axios';
import { Dish } from '../interfaces/Dish';
import { Order } from '../interfaces/Order';

const api = axios.create({
  baseURL: 'http://localhost:3004',
});

export const createOrder = async (orderData: Order) => {
  try {
    const response = await api.post('/orders', orderData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchOrders = async () => {
  try {
    const response = await api.get('/orders');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMenuItems = async (): Promise<Dish[]> => {
    try {
      const response = await api.get('/menu');
      return response.data;
    } catch (error) {
      throw error;
    }
  };
