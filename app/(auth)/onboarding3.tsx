import { OnboardingScreen } from "../screens/onboarding/OnboardingScreen";

export default function Onboarding3() {
  return (
    <OnboardingScreen
      step={2}
      imageSource={require("../../assets/images/onboard3.png")}
      title="Join Our Community"
      subtitle="Connect with other users and share your experiences"
      buttonText="Get Started"
    />
  );
}
