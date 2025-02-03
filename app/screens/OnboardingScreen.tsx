import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { OnboardingScreenProps } from "@/app/types/types";
import SignupCard from "@/app/components/onboarding/SignupCard";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from "react-native-gesture-handler";

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
  const translateX = useSharedValue(0);

  const handleNext = () => {
    if (step < 2) {
      router.push(step === 0 ? "/(auth)/onboarding2" : "/(auth)/onboarding3");
    } else {
      router.push("/(auth)/userType");
    }
  };

  const handleSkip = () => {
    router.push("/(auth)/userType");
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(translateX.value, {
            duration: 300,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          }),
        },
      ],
    };
  });

  return (
    <GestureHandlerRootView style={styles.container}>
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
          {/* Add Skip Button */}
          {step < 2 && (
            <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
          )}

          <Animated.View
            entering={SlideInRight.duration(400).delay(200)}
            style={[styles.content, animatedStyle]}
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
    </GestureHandlerRootView>
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
  skipButton: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 10,
  },
  skipButtonText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16,
  },
});

export default OnboardingScreen;