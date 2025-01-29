import {Dimensions, Image, StyleSheet, View} from "react-native";
import {StatusBar} from "@/app/components/onboarding/StatusBar";
import {SignupCard} from "@/app/components/onboarding/SignupCard";
import {useRouter} from "expo-router";
import {LinearGradient} from "expo-linear-gradient";
import {OnboardingScreenProps} from "@/app/types/types";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const OnboardingScreen = ({
  step,
  showLogo,
  imageSource,
  title,
  subtitle,
  buttonText,
}: OnboardingScreenProps) => {
  const router = useRouter();

  const handleNext = () => {
    if (step < 2) {
      router.push(step === 0 ? "/(auth)/onboarding2" : "/(auth)/onboarding3");
    } else {
      router.push("/(auth)/userType");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,1)"]}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <View style={styles.topSection}>
            {showLogo && (
              <Image
                source={require("@/app/assets/images/logo.png")}
                style={styles.logo}
                resizeMode="contain"
              />
            )}
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={imageSource}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cardSection}>
            <SignupCard
              title={title}
              subtitle={subtitle}
              buttonText={buttonText}
              currentStep={step}
              onPress={handleNext}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  topSection: {
    alignItems: "center",
    paddingTop: 60,
    height: screenHeight * 0.15,
  },
  logo: {
    width: 150,
    height: 150,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },
  image: {
    width: screenWidth * 0.8,
    height: screenWidth * 0.8,
  },
  cardSection: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});
