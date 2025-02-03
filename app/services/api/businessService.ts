import axios from 'axios';
import { Business } from '@/app/types/types';

// Define a base URL for your API
const API_BASE_URL = 'http://192.168.1.136:3001/api';

const businessService = {
    getBusinesses: async (): Promise<Business[]> => {
        try {
            console.log('Fetching businesses...');
            const response = await axios.get<Business[]>(`${API_BASE_URL}/businesses`);
            console.log('Data fetched:', response.data);
            return response.data;
        } catch (error: any) {
            console.error('Error fetching businesses:', error);
            // Handle specific error cases
            if (axios.isAxiosError(error)) {
                // You can access error.response.status, error.response.data, etc.
                if (error.response?.status === 404) {
                    throw new Error('Businesses not found.');
                } else {
                    throw new Error('Failed to fetch businesses. Please try again.');
                }
            } else {
                throw new Error('An unexpected error occurred.');
            }
        }
    },

    searchBusinesses: async (query: string): Promise<Business[]> => {
        try {
            const response = await axios.get<Business[]>(`${API_BASE_URL}/businesses/search`, {
                params: { q: query },
            });
            return response.data;
        } catch (error: any) {
            console.error('Error searching businesses:', error);
             // Handle specific error cases
            if (axios.isAxiosError(error)) {
                // You can access error.response.status, error.response.data, etc.
                if (error.response?.status === 404) {
                    throw new Error('No businesses found matching your search.');
                } else {
                    throw new Error('Failed to search businesses. Please try again.');
                }
            } else {
                throw new Error('An unexpected error occurred.');
            }
        }
    }
};

export default businessService;