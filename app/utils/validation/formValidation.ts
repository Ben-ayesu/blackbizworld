export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
};

export const validateBusinessRegistration = (data: any) => {
    const errors: Record<string, string> = {};

    if (!data.businessName?.trim()) {
        errors.businessName = 'Business name is required';
    }

    if (!validateEmail(data.email)) {
        errors.email = 'Invalid email address';
    }

    if (!validatePassword(data.password)) {
        errors.password = 'Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}; 