import OnboardingScreen from "../screens/OnboardingScreen";

export default function Onboarding3() {
  return (
    <OnboardingScreen
      step={2}
      imageSource={require("@/app/assets/images/onboard3.png")}
      title="Join Our Community"
      subtitle="Connect with other users and share your experiences"
      buttonText="Get Started"
    />
  );
}
