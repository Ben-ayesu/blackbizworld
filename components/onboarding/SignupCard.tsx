import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ProgressDots } from "./ProgressDots";
import { LinearGradient } from "expo-linear-gradient";

interface SignupCardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  currentStep: number;
  onPress: () => void;
}

export const SignupCard = ({
  title,
  subtitle,
  buttonText,
  currentStep,
  onPress,
}: SignupCardProps) => {
  return (
    <LinearGradient
      colors={["rgba(32, 32, 32, 0.9)", "rgba(18, 18, 18, 0.9)"]}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.bottomContent}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <View style={styles.buttonInner}>
            <Text style={styles.buttonText}>{buttonText}</Text>
            <Text style={styles.buttonArrow}>→</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.progressContainer}>
          <ProgressDots activeDot={currentStep} />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 24,
    borderRadius: 16,
    backgroundColor: "transparent",
  },
  content: {
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 32,
    marginBottom: 12,
  },
  subtitle: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
  bottomContent: {
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    width: "100%",
    marginBottom: 32,
  },
  buttonInner: {
    backgroundColor: "#D4B69B",
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#261811",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 8,
  },
  buttonArrow: {
    color: "#261811",
    fontSize: 16,
    fontWeight: "600",
  },
  progressContainer: {
    marginTop: 8,
  },
});
