interface UserCredentials {
    email: string;
    password: string;
}

interface RegistrationData extends UserCredentials {
    userType: 'business' | 'customer';
    // Add other registration fields
}

export const authService = {
    login: async (credentials: UserCredentials) => {
        try {
            // Replace with actual API call
            const response = await fetch('YOUR_API_ENDPOINT/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
            return await response.json();
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },

    register: async (data: RegistrationData) => {
        try {
            // Replace with actual API call
            const response = await fetch('YOUR_API_ENDPOINT/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    }
}; 