import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserCredentials {
    email: string;
    password: string;
}

interface RegistrationData extends UserCredentials {
    userType: 'business' | 'customer';
    // Add other registration fields
}

const mockUser = {
    email: "test@example.com",
    password: "password123",
};

const authService = {
    login: async (credentials: { email: string; password: string }) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    credentials.email === mockUser.email &&
                    credentials.password === mockUser.password
                ) {
                    resolve(mockUser);
                } else {
                    reject(new Error("Invalid credentials"));
                }
            }, 1000); // Simulate network delay
        });
    },

    register: async (data: RegistrationData) => {
        try {
            const response = await fetch('YOUR_API_ENDPOINT/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();
            if (response.ok) {
                await AsyncStorage.setItem('authToken', responseData.token);
                return responseData;
            }
            throw new Error(responseData.message || 'Registration failed');
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    },

    logout: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 500); // Simulate network delay
        });
    },

    getCurrentUser: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockUser); // Simulate getting the current user
            }, 500); // Simulate network delay
        });
    }
};

export default authService;