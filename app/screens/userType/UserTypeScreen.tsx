import { View, StyleSheet, Text } from "react-native";
import { SelectionCard } from "@/components/userType/SelectionCard";

export const UserTypeScreen = () => {
  const [selectedType, setSelectedType] = React.useState<string | null>(null);

  const userTypes = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/0631d207b9dc4b438681345940ab050f/aecc37ce4374f9e427f30add24119d9e8c7f2f9dac92689e380ab7431c4a4078?apiKey=0631d207b9dc4b438681345940ab050f&",
      label: "Business",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/0631d207b9dc4b438681345940ab050f/39cf7a0332849607ae0a41e7495de01f382da09db80d41032eefa44bfdcf2624?apiKey=0631d207b9dc4b438681345940ab050f&",
      label: "Consumer",
    },
  ];

  return (
    <View style={styles.screenContainer}>
      <View style={styles.contentContainer}>
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

        <View style={styles.continueButton}>
          <Text style={styles.continueText}>Continue</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    borderRadius: 40,
    display: "flex",
    marginHorizontal: "auto",
    maxWidth: 480,
    width: "100%",
    paddingBottom: 193,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
    textAlign: "center",
  },
  contentContainer: {
    borderRadius: 12,
    display: "flex",
    marginTop: 189,
    width: "100%",
    maxWidth: 340,
    paddingVertical: 72,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
  },
  headerContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  title: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
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
    marginTop: 16,
  },
  selectionContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 64,
    width: "100%",
    alignItems: "stretch",
    gap: 26,
    justifyContent: "space-between",
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
  },
});
