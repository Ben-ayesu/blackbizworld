import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import Animated, { FadeIn, FadeInUp } from "react-native-reanimated";
import { authService } from "../services/auth/authService";
import { validateBusinessRegistration } from "../utils/validation/formValidation";

const BusinessRegistrationScreen = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    businessName: "",
    quebecTaxCode: "",
  });
  const [employeeCount] = useState("");
  const [companyRole, setCompanyRole] = useState(null);
  const [province, setProvince] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const router = useRouter();

  const handleRegister = async () => {
    const data = {
      email: formData.email,
      password: formData.password,
      businessName: formData.businessName,
      businessAddress: employeeCount,
      quebecTaxCode: formData.quebecTaxCode,
      employeeCount,
      userType: "business" as const,
    };

    const { isValid, errors } = validateBusinessRegistration(data);

    if (!isValid) {
      // Handle validation errors
      router.push("/home");
      return true;
    }

    try {
      await authService.register(data);
      router.push("/home");
    } catch (error) {
      // Handle registration error
    }
  };

  const employeeCountData = [
    { label: "1-10", value: "1-10" },
    { label: "11-100", value: "11-100" },
    { label: "101-1000", value: "101-1000" },
  ];

  const provinceData = [
    { label: "Quebec", value: "quebec" },
    { label: "Ontario", value: "ontario" },
    { label: "Alberta", value: "alberta" },
  ];

  return (
    <Animated.View entering={FadeIn.duration(400)} style={styles.container}>
      <LinearGradient
        colors={["#4D2F0F", "black"]}
        locations={[0, 0.65]}
        style={styles.gradient}
      >
        <Animated.View
          entering={FadeInUp.duration(400).delay(200)}
          style={styles.formContainer}
        >
          <Text style={styles.title}>Register your business</Text>
          <Text style={styles.subtitle}>
            Fill your information below or register with your business number
          </Text>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter the name of your business</Text>
            <TextInput
              style={styles.input}
              placeholder="Business Name"
              placeholderTextColor="#777"
              value={formData.businessName}
              onChangeText={(text) =>
                setFormData({ ...formData, businessName: text })
              }
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter current employees count?</Text>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "#A05620" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={employeeCountData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Select Employee Count" : "..."}
              searchPlaceholder="Search..."
              value={companyRole}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setCompanyRole(item.value);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <AntDesign
                  style={styles.icon}
                  color={isFocus ? "#A05620" : "white"}
                  name="Safety"
                  size={20}
                />
              )}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter your business address</Text>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "#A05620" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={provinceData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Select Province" : "..."}
              searchPlaceholder="Search..."
              value={province}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setProvince(item.value);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <AntDesign
                  style={styles.icon}
                  color={isFocus ? "#A05620" : "white"}
                  name="Safety"
                  size={20}
                />
              )}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter your Quebec Tax Code Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Tax Code"
              placeholderTextColor="#777"
              value={formData.quebecTaxCode}
              onChangeText={(text) =>
                setFormData({ ...formData, quebecTaxCode: text })
              }
            />
          </View>
        </Animated.View>
        {/* Buttons */}
        <Animated.View
          entering={FadeInUp.duration(400).delay(400)}
          style={styles.bottomContainer}
        >
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register your business</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.helpButton}>
            <Text style={styles.helpButtonText}>
              Need more info. Get help here
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  gradient: {
    flex: 1,
    padding: 20,
  },
  formContainer: {
    justifyContent: "center",
    flex: 1,
  },
  input: {
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: 5,
    padding: 10,
    ...(Platform.OS === "android"
      ? { elevation: 2 }
      : {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
        }),
  },
  button: {
    backgroundColor: "#492306",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  helpButton: {
    alignItems: "center",
  },
  helpButtonText: {
    color: "#ccc",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#333",
    color: "white",
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "white",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "white",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: "white",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 10,
    alignSelf: "center",
  },
  subtitle: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 30,
    alignSelf: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 5,
  },
  bottomContainer: {
    justifyContent: "flex-end",
    marginBottom: 15,
  },
});

export default BusinessRegistrationScreen;
