import {
    View,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    StatusBar,
    Dimensions
} from "react-native";
import { Text, TextInput, HelperText } from 'react-native-paper';
import { router } from "expo-router";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';
import Animated, { 
    FadeIn,
    SlideInUp,
    FadeInUp 
} from 'react-native-reanimated';

const CustomerRegistrationScreen = () => {
    const theme = useTheme();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [secureTextEntry, setSecureTextEntry] = useState({
        password: true,
        confirmPassword: true,
    });

    const screenHeight = Dimensions.get('window').height;

    const socialIcons = [
        { name: 'facebook' as const, component: FontAwesome, color: '#3b5998' },
        { name: 'google' as const, component: FontAwesome, color: '#db4a39' },
        { name: 'apple' as const, component: FontAwesome, color: 'white' }
    ];

    const validateForm = () => {
        const newErrors = { ...errors };
        let isValid = true;

        if (!formData.fullName) {
            newErrors.fullName = 'Full name is required';
            isValid = false;
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
            isValid = false;
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
            isValid = false;
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setErrors(newErrors);
        return true;
    };

    const handleRegister = () => {
        if (validateForm()) {
            router.push("/home");
        }
    };

    const handleLoginRedirect = () => {
        router.back();
    };

    const customTheme = {
        ...theme,
        roundness: 12,
        colors: {
            ...theme.colors,
            primary: 'rgba(255, 255, 255, 0.7)',
            text: 'rgba(255, 255, 255, 1)',
            placeholder: 'rgba(255, 255, 255, 1)',
            error: 'rgba(255, 69, 58, 0.9)',
        },
    };

    return (
        <Animated.View 
            entering={FadeIn.duration(300)}
            style={styles.container}
        >
            <LinearGradient
                colors={["#4D2F0F", "black"]}
                locations={[0, 0.65]}
                style={styles.gradient}
            >
                <SafeAreaView style={[styles.safeArea, { minHeight: screenHeight }]}>
                    <Animated.View 
                        entering={FadeIn.duration(300)}
                        style={styles.content}
                    >
                        <Text style={styles.title}>
                            Start by setting up your account!
                        </Text>

                        <Text style={styles.subtitle}>
                            Fill your information below or register with your social account
                        </Text>

                        <Animated.View 
                            entering={FadeIn.duration(400)}
                            style={styles.formContainer}
                        >
                            <TextInput
                                label="Full Name"
                                value={formData.fullName}
                                onChangeText={(text) => {
                                    setFormData({ ...formData, fullName: text });
                                    if (errors.fullName) setErrors({ ...errors, fullName: '' });
                                }}
                                mode="outlined"
                                error={!!errors.fullName}
                                style={styles.input}
                                theme={customTheme}
                            />
                            <HelperText type="error" visible={!!errors.fullName}>
                                {errors.fullName}
                            </HelperText>

                            <TextInput
                                label="Email"
                                value={formData.email}
                                onChangeText={(text) => {
                                    setFormData({ ...formData, email: text });
                                    if (errors.email) setErrors({ ...errors, email: '' });
                                }}
                                mode="outlined"
                                error={!!errors.email}
                                style={styles.input}
                                theme={customTheme}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                            <HelperText type="error" visible={!!errors.email}>
                                {errors.email}
                            </HelperText>

                            <TextInput
                                label="Password"
                                value={formData.password}
                                onChangeText={(text) => {
                                    setFormData({ ...formData, password: text });
                                    if (errors.password) setErrors({ ...errors, password: '' });
                                }}
                                mode="outlined"
                                error={!!errors.password}
                                style={styles.input}
                                theme={customTheme}
                                secureTextEntry={secureTextEntry.password}
                                right={
                                    <TextInput.Icon
                                        icon={secureTextEntry.password ? "eye" : "eye-off"}
                                        onPress={() => setSecureTextEntry({
                                            ...secureTextEntry,
                                            password: !secureTextEntry.password
                                        })}
                                    />
                                }
                            />
                            <HelperText type="error" visible={!!errors.password}>
                                {errors.password}
                            </HelperText>

                            <TextInput
                                label="Confirm Password"
                                value={formData.confirmPassword}
                                onChangeText={(text) => {
                                    setFormData({ ...formData, confirmPassword: text });
                                    if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: '' });
                                }}
                                mode="outlined"
                                error={!!errors.confirmPassword}
                                style={styles.input}
                                theme={customTheme}
                                secureTextEntry={secureTextEntry.confirmPassword}
                                right={
                                    <TextInput.Icon
                                        icon={secureTextEntry.confirmPassword ? "eye" : "eye-off"}
                                        onPress={() => setSecureTextEntry({
                                            ...secureTextEntry,
                                            confirmPassword: !secureTextEntry.confirmPassword
                                        })}
                                    />
                                }
                            />
                            <HelperText type="error" visible={!!errors.confirmPassword}>
                                {errors.confirmPassword}
                            </HelperText>
                        </Animated.View>

                        <View style={styles.actionContainer}>
                            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                                <Text style={styles.registerButtonText}>Create Account</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleLoginRedirect}>
                                <Text style={styles.loginText}>
                                    Already have an account? Log in here
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.socialContainer}>
                            <View style={styles.divider}>
                                <View style={styles.dividerLine} />
                                <Text style={styles.dividerText}>Or sign up with</Text>
                                <View style={styles.dividerLine} />
                            </View>

                            <View style={styles.socialIconsContainer}>
                                {socialIcons.map((icon, index) => {
                                    const IconComponent = icon.component;
                                    return (
                                        <TouchableOpacity key={index} style={styles.iconButton}>
                                            <IconComponent name={icon.name} size={35} color={icon.color} />
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>

                            <Text style={styles.helpText}>
                                Need more info? Get help here
                            </Text>
                        </View>
                    </Animated.View>
                </SafeAreaView>
            </LinearGradient>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    safeArea: {
        flex: 1,
        width: "100%",
        padding: 20,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        backgroundColor: 'transparent',
        marginVertical: 4,
    },
    socialIconsContainer: {
        flexDirection: "row",
        marginTop: 32,
        gap: 16,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    iconButton: {
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        borderRadius: 8,
    },
    title: {
        color: "rgba(255, 255, 255, 1)",
        textAlign: "center",
        marginTop: 38,
    },
    subtitle: {
        color: "#ccc",
        textAlign: "center",
        marginTop: 23,
    },
    formContainer: {
        width: "100%",
        marginTop: 40,
        paddingHorizontal: 20,
    },
    actionContainer: {
        width: "100%",
        maxWidth: 331,
        marginTop: 32,
        alignItems: "center",
    },
    registerButton: {
        width: "100%",
        borderRadius: 25,
        backgroundColor: "rgba(93, 45, 9, 1)",
        padding: 15,
        alignItems: "center",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    registerButtonText: {
        fontFamily: "Poppins, sans-serif",
        fontSize: 18,
        color: "rgba(255, 255, 255, 1)",
        fontWeight: "600",
    },
    loginText: {
        color: "rgba(255, 255, 255, 1)",
        fontSize: 11,
        fontFamily: "Work Sans, sans-serif",
        marginTop: 16,
    },
    socialContainer: {
        width: "100%",
        maxWidth: 329,
        marginTop: 30,
        alignItems: "center",
    },
    divider: {
        flexDirection: "row",
        alignItems: "center",
        width: 231,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
    dividerText: {
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: 11,
        paddingHorizontal: 10,
    },
    helpText: {
        color: "rgba(255, 255, 255, 1)",
        fontSize: 11,
        fontFamily: "Work Sans, sans-serif",
        marginTop: 32,
    },
    gradient: {
        flex: 1,
        width: "100%",
    },
});

export default CustomerRegistrationScreen;