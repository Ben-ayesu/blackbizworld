import OnboardingScreen from "../screens/onboarding/OnboardingScreen";

export default function Onboarding2() {
  return (
    <OnboardingScreen
      step={1}
      imageSource={require("@/app/assets/images/onboard2.png")}
      title="Discover Amazing Deals"
      subtitle="Find the best discounts from your favorite businesses"
      buttonText="Continue"
    />
  );
}
