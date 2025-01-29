import OnboardingScreen from "../screens/onboarding/OnboardingScreen";

export default function Onboarding1() {
  return (
    <OnboardingScreen
      step={0}
      showLogo={true}
      imageSource={require("@/app/assets/images/onboard1.png")}
      title="For customers: Sign up for only $15/month for discounts"
      subtitle="Fill your information below or register with your social account"
      buttonText="Get Started"
    />
  );
}
