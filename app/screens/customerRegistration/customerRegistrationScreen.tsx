import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import { InputField } from "../../(auth)/InputField";
import { SocialIcon } from "../../(auth)/SocialIcon";
import { router } from "expo-router";
import {useState} from "react";

export const CustomerRegistrationScreen = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const socialIcons = [
        { imageUrl: "https://cdn.builder.io/api/v1/image/assets/0631d207b9dc4b438681345940ab050f/72a8d78a1e73eaa11351a74db6202965584e38f620089f89eac12ec47a6715b5?apiKey=0631d207b9dc4b438681345940ab050f&", alt: "Facebook signup" },
        { imageUrl: "https://cdn.builder.io/api/v1/image/assets/0631d207b9dc4b438681345940ab050f/8beed9c81cfa48d44e2b1c882c4edf5d2450f79bfa4014598f7d2d590721a3fc?apiKey=0631d207b9dc4b438681345940ab050f&", alt: "Google signup" },
        { imageUrl: "https://cdn.builder.io/api/v1/image/assets/0631d207b9dc4b438681345940ab050f/21ede2420fce4273cc87fa674d447dc67fddd5cec4c460b1769131d457267c01?apiKey=0631d207b9dc4b438681345940ab050f&", alt: "Apple signup" },
    ];

    const handleRegister = () => {
        // Add registration logic here
        router.push("/(auth)/onboarding1");
    };

    const handleLoginRedirect = () => {
        router.back();
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Create Your{'\n'}Account
            </Text>

            <Text style={styles.subtitle}>
                Fill your information below or register with your social account
            </Text>

            <View style={styles.formContainer}>
                <InputField
                    label="Full Name"
                    value={formData.fullName}
                    onChange={(text) => setFormData({...formData, fullName: text})}
                />

                <InputField
                    label="Email"
                    value={formData.email}
                    onChange={(text) => setFormData({...formData, email: text})}
                />

                <InputField
                    label="Password"
                    value={formData.password}
                    type="password"
                    onChange={(text) => setFormData({...formData, password: text})}
                />

                <InputField
                    label="Confirm Password"
                    value={formData.confirmPassword}
                    type="password"
                    onChange={(text) => setFormData({...formData, confirmPassword: text})}
                />
            </View>

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
                    {socialIcons.map((icon, index) => (
                        <SocialIcon key={index} {...icon} />
                    ))}
                </View>

                <Text style={styles.helpText}>
                    Need more info. Get help here
                </Text>
            </View>

            <View style={styles.bottomBar} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 40,
        maxWidth: 480,
        width: "100%",
        alignItems: "center",
        paddingBottom: 12,
        backgroundColor: "#222222",
    },
    header: {
        width: "100%",
        padding: 15,
        alignItems: "flex-start",
    },
    time: {
        fontFamily: "Roboto, sans-serif",
        fontSize: 15,
        color: "rgba(255, 255, 255, 1)",
        fontWeight: "900",
    },
    title: {
        color: "rgba(255, 255, 255, 1)",
        fontSize: 20,
        fontFamily: "Product Sans, sans-serif",
        lineHeight: 24,
        textAlign: "center",
        marginTop: 38,
    },
    subtitle: {
        color: "rgba(255, 255, 255, 1)",
        fontSize: 12,
        fontFamily: "Work Sans, sans-serif",
        textAlign: "center",
        marginTop: 23,
    },
    formContainer: {
        width: "100%",
        maxWidth: 331,
        marginTop: 40,
        gap: 20,
    },
    actionContainer: {
        width: "100%",
        maxWidth: 331,
        marginTop: 32,
        alignItems: "center",
    },
    registerButton: {
        width: "100%",
        borderRadius: 8,
        backgroundColor: "rgba(93, 45, 9, 1)",
        padding: 12,
        alignItems: "center",
    },
    registerButtonText: {
        fontFamily: "Poppins, sans-serif",
        fontSize: 16,
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
    socialIconsContainer: {
        flexDirection: "row",
        marginTop: 32,
        gap: 16,
    },
    helpText: {
        color: "rgba(255, 255, 255, 1)",
        fontSize: 11,
        fontFamily: "Work Sans, sans-serif",
        marginTop: 32,
    },
    bottomBar: {
        width: 165,
        height: 5,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 100,
        marginTop: 30,
    },
});