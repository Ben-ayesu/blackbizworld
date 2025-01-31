import { auth } from '../../firebase/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    User,
    onAuthStateChanged
} from 'firebase/auth';

interface UserCredentials {
    email: string;
    password: string;
}

interface RegistrationData extends UserCredentials {
    userType: 'business' | 'customer';
    // Add other registration fields if needed
}

const authService = {
    login: async (credentials: UserCredentials) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
            return userCredential.user;
        } catch (error: any) {
            throw new Error(error.message || "Login failed");
        }
    },

    register: async (data: RegistrationData) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            return userCredential.user;
        } catch (error: any) {
            console.error('Registration error:', error);
            throw new Error(error.message || 'Registration failed');
        }
    },

    logout: async () => {
        try {
            await signOut(auth);
        } catch (error: any) {
            console.error('Logout error:', error);
            throw new Error(error.message || 'Logout failed');
        }
    },

    getCurrentUser: (): Promise<User | null> => {
        return new Promise((resolve, reject) => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                unsubscribe();
                resolve(user);
            }, reject);
        });
    }
};

export default authService;