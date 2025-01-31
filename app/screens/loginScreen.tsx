import React from "react";
import { View, TouchableOpacity, SafeAreaView, Dimensions } from "react-native";
import { Text } from "react-native-paper";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeIn } from "react-native-reanimated";
import { CustomInput } from "../components/registration/CustomInput";
import { styles } from "../styles/registration.styles";
import { useAuth } from "../context/AuthContext";
import { useRegistrationForm } from "../hooks/useRegistrationForm";

const LoginScreen = () => {
  const {
    formData,
    setFormData,
    errors,
    setErrors,
    secureTextEntry,
    setSecureTextEntry,
    validateForm,
  } = useRegistrationForm(true);

  const { login } = useAuth();
  const screenHeight = Dimensions.get("window").height;

  const handleLogin = async () => {
    if (validateForm()) {
      try {
        await login({ email: formData.email, password: formData.password });
        router.push("/home");
      } catch (error: any) {
        console.error("Login failed:", error);
        setErrors({ ...errors, form: error.message });
      }
    }
  };

  const handleRegisterRedirect = () => {
    router.push("./customerRegistration");
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
            <Text style={styles.title}>Welcome Back!</Text>

            <Text style={styles.subtitle}>
              Log in with your email and password
            </Text>

            <Animated.View
              entering={FadeIn.duration(400)}
              style={styles.formContainer}
            >
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
            </Animated.View>

            <View style={styles.actionContainer}>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={handleLogin}
              >
                <Text style={styles.registerButtonText}>Log In</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleRegisterRedirect}>
                <Text style={styles.loginText}>
                  Don't have an account? Register here
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </SafeAreaView>
      </LinearGradient>
    </Animated.View>
  );
};

export default LoginScreen;
