import { Stack } from "expo-router";
import { Redirect } from "expo-router";
import { useAuth } from "@/app/context/AuthContext";

export default function AppLayout() {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) return <Redirect href="/(auth)/onboarding1" />;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
    </Stack>
  );
}
