import {Dimensions, Image, StyleSheet, View} from "react-native";
import {useRouter} from "expo-router";
import {LinearGradient} from "expo-linear-gradient";
import {OnboardingScreenProps} from "@/app/types/types";
import SignupCard from "@/app/components/onboarding/SignupCard";
import Animated, { 
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutLeft 
} from 'react-native-reanimated';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const OnboardingScreen = ({
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
    <Animated.View 
      entering={FadeIn.duration(400)} 
      exiting={FadeOut.duration(400)}
      style={styles.container}
    >
      <LinearGradient
        colors={["#4D2F0F", "black"]}
        locations={[0, 0.65]}
        style={styles.gradient}
      >
        <Animated.View 
          entering={SlideInRight.duration(400).delay(200)} 
          style={styles.content}
        >
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
        </Animated.View>
      </LinearGradient>
    </Animated.View>
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

export default OnboardingScreen;
