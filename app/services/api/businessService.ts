interface Business {
    id: string;
    name: string;
    category: string;
    location: string;
    // Add other business properties
}

export const businessService = {
    getBusinesses: async (): Promise<Business[]> => {
        // Implement API call to get businesses
        try {
            // Replace with actual API call
            const response = await fetch('YOUR_API_ENDPOINT/businesses');
            return await response.json();
        } catch (error) {
            console.error('Error fetching businesses:', error);
            throw error;
        }
    },

    searchBusinesses: async (query: string): Promise<Business[]> => {
        try {
            // Replace with actual API call
            const response = await fetch(`YOUR_API_ENDPOINT/businesses/search?q=${query}`);
            return await response.json();
        } catch (error) {
            console.error('Error searching businesses:', error);
            throw error;
        }
    }
}; 