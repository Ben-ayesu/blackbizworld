import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    StatusBar,
    Dimensions
} from "react-native";
import InputField from "@/app/components/ui/InputField";
import { FontAwesome } from '@expo/vector-icons';
import { router } from "expo-router";
import {useState} from "react";
import {LinearGradient} from "expo-linear-gradient";

const CustomerRegistrationScreen = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const screenHeight = Dimensions.get('window').height;

    const socialIcons = [
        { name: 'facebook' as const, component: FontAwesome, color: '#3b5998' },
        { name: 'google' as const, component: FontAwesome, color: '#db4a39' },
        { name: 'apple' as const, component: FontAwesome, color: 'white' }
    ];

    const handleRegister = () => {
        router.push("/home/home");
    };

    const handleLoginRedirect = () => {
        router.back();
    };

    return (
        <LinearGradient
            colors={["#4D2F0F", "black"]}
            locations={[0, 0.65]}
            style={styles.container}
        >
            <SafeAreaView style={[styles.safeArea, { minHeight: screenHeight }]}>
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Start by setting up your account!
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
                            Need more info. Get help here
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    },
    safeArea: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: 'space-between',
        padding: 20,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between', // Distribute space evenly
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
    },
    title: {
        color: "rgba(255, 255, 255, 1)",
        fontSize: 20,
        fontFamily: "Product Sans, sans-serif",
        lineHeight: 32,
        textAlign: "center",
        marginTop: 38,
    },
    subtitle: {
        color: "#ccc",
        fontSize: 14,
        fontFamily: "Work Sans, sans-serif",
        textAlign: "center",
        marginTop: 23,
    },
    formContainer: {
        width: "100%",
        marginTop: 40,
        paddingHorizontal: 20,
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
        borderRadius: 25,
        backgroundColor: "rgba(93, 45, 9, 1)",
        padding: 15, // More padding
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
    bottomBar: {
        width: 165,
        height: 5,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 100,
        marginTop: 30,
    },
});

export default CustomerRegistrationScreen;