import { View, StyleSheet, ScrollView } from "react-native";
import LocationBar from "../components/home/LocationBar";
import SearchBar from "../components/home/SearchBar";
import CategorySection from "../components/home/CategorySection";
import FeatureSection from "../components/home/FeaturesSection";
import Animated, { FadeIn, FadeInUp } from 'react-native-reanimated';

// interface HomeScreenProps {}

const HomeScreen = () => {
    return (
        <Animated.ScrollView 
            entering={FadeIn.duration(600)}
            style={styles.container}
        >
            <Animated.View 
                entering={FadeInUp.duration(800).delay(100)}
                style={styles.mainContent}
            >
                <LocationBar />
                <SearchBar/>
                <CategorySection />
                <FeatureSection />
            </Animated.View>
        </Animated.ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
    },
    mainContent: {
        display: "flex",
        flexDirection: "column",
        marginTop: 40,
        paddingHorizontal: 15,
    },
});

export default HomeScreen;