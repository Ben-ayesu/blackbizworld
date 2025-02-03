import React from "react";
import { View, TouchableOpacity, SafeAreaView, Dimensions } from "react-native";
import { Text } from "react-native-paper";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeIn } from "react-native-reanimated";
import { CustomInput } from "../components/registration/CustomInput";
import { SocialLoginSection } from "../components/registration/SocialLoginSection";
import { useRegistrationForm } from "../hooks/useRegistrationForm";
import { styles } from "../styles/registration.styles";
import { useAuth } from "../context/AuthContext";
import authService from "../services/auth/authService";

const CustomerRegistrationScreen = () => {
  const {
    formData,
    setFormData,
    errors,
    setErrors,
    secureTextEntry,
    setSecureTextEntry,
    validateForm,
  } = useRegistrationForm();

  const { login, user } = useAuth();
  const screenHeight = Dimensions.get("window").height;

  const handleRegister = async () => {
    if (validateForm()) {
      try {
        await authService.register({
          email: formData.email,
          password: formData.password,
          userType: "customer",
        });
        await login({ email: formData.email, password: formData.password });
        router.push("./home");
      } catch (error: any) {
        console.error("Registration failed:", error);
        setErrors({ ...errors, email: error.message });
      }
    }
  };

  const handleLoginRedirect = () => {
    router.push("/login");
  };

  return (
    <Animated.View entering={FadeIn.duration(300)} style={styles.container}>
      <LinearGradient
        colors={["#4D2F0F", "black"]}
        locations={[0, 0.65]}
        style={styles.gradient}
      >
        <SafeAreaView style={[styles.safeArea, { minHeight: screenHeight }]}>
          <Animated.View entering={FadeIn.duration(300)} style={styles.content}>
            <Text style={styles.title}>Start by setting up your account!</Text>

            <Text style={styles.subtitle}>
              Fill your information below or register with your social account
            </Text>

            <Animated.View
              entering={FadeIn.duration(400)}
              style={styles.formContainer}
            >
              <CustomInput
                label="Full Name"
                value={formData.fullName}
                onChangeText={(text) => {
                  setFormData({ ...formData, fullName: text });
                  if (errors.fullName) setErrors({ ...errors, fullName: "" });
                }}
                error={errors.fullName}
              />

              <CustomInput
                label="Email"
                value={formData.email}
                onChangeText={(text) => {
                  setFormData({ ...formData, email: text });
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                error={errors.email}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <CustomInput
                label="Password"
                value={formData.password}
                onChangeText={(text) => {
                  setFormData({ ...formData, password: text });
                  if (errors.password) setErrors({ ...errors, password: "" });
                }}
                error={errors.password}
                secureTextEntry={secureTextEntry.password}
                onToggleSecureEntry={() =>
                  setSecureTextEntry({
                    ...secureTextEntry,
                    password: !secureTextEntry.password,
                  })
                }
              />

              <CustomInput
                label="Confirm Password"
                value={formData.confirmPassword}
                onChangeText={(text) => {
                  setFormData({ ...formData, confirmPassword: text });
                  if (errors.confirmPassword)
                    setErrors({ ...errors, confirmPassword: "" });
                }}
                error={errors.confirmPassword}
                secureTextEntry={secureTextEntry.confirmPassword}
                onToggleSecureEntry={() =>
                  setSecureTextEntry({
                    ...secureTextEntry,
                    confirmPassword: !secureTextEntry.confirmPassword,
                  })
                }
              />
            </Animated.View>

            <View style={styles.actionContainer}>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={handleRegister}
              >
                <Text style={styles.registerButtonText}>Create Account</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleLoginRedirect}>
                <Text style={styles.loginText}>
                  Already have an account? Log in here
                </Text>
              </TouchableOpacity>
            </View>

            <SocialLoginSection />
          </Animated.View>
        </SafeAreaView>
      </LinearGradient>
    </Animated.View>
  );
};

export default CustomerRegistrationScreen;
