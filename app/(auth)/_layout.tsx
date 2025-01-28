import { Stack } from 'expo-router';

export default function AuthLayout() {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="onboarding1"/>
            <Stack.Screen name="onboarding2"/>
            <Stack.Screen name="onboarding3"/>
            <Stack.Screen name="userType"/>
            <Stack.Screen name="businessRegistration"/>
            <Stack.Screen name="customerRegistration"/>
        </Stack>
    );
}