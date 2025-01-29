import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import SelectionCard from "@/app/components/userType/SelectionCard";
import { useState } from "react";
import {LinearGradient} from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';

const UserTypeScreen = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const userTypes = [
    {
      icon: <Icon name="storefront-outline" size={30} color="rgba(93, 45, 9, 1)" />,
      label: "Business",
    },
    {
      icon: <IonIcon name="people-outline" size={30} color="rgba(93, 45, 9, 1)" />,
      label: "Consumer",
    },
  ];

  const handleContinue = () => {
    if (selectedType === "Business") {
      router.push("/(auth)/businessRegistration");
    } else if (selectedType === "Consumer") {
      router.push("/(auth)/customerRegistration");
    }
  };

  return (
      <View style={styles.screenContainer}>
        <LinearGradient
            colors={['rgba(234, 155, 96, 0.14)', 'rgba(153, 153, 153, 0)']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.contentContainer}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Are you a business or consumer?</Text>
            <Text style={styles.subtitle}>Please select one</Text>
          </View>

          <View style={styles.selectionContainer}>
            {userTypes.map((type) => (
                <SelectionCard
                    key={type.label}
                    icon={type.icon}
                    label={type.label}
                    onSelect={() => setSelectedType(type.label)}
                    isSelected={selectedType === type.label}
                />
            ))}
          </View>

          <TouchableOpacity style={styles.continueButton} onPress={handleContinue} disabled={!selectedType}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    borderRadius: 40,
    display: "flex",
    flex: 1,
    marginHorizontal: "auto",
    width: "100%",
    paddingHorizontal: 12,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  contentContainer: {
    borderRadius: 12,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    width: "100%",
    maxWidth: "100%",
    paddingVertical: 72,
    paddingHorizontal: 12,
    flexDirection: "column",
    alignItems: "center",
  },
  headerContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 25,
    fontFamily: "Be Vietnam, sans-serif",
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: -0.4,
  },
  subtitle: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 12,
    fontFamily: "Work Sans, sans-serif",
    fontWeight: "400",
    lineHeight: 12,
    marginTop: 20,
  },
  selectionContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 64,
    gap: 40,
  },
  continueButton: {
    marginTop: 57,
  },
  continueText: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 14,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: -0.28,
    textDecorationLine:"underline"
  },
});

export default UserTypeScreen;