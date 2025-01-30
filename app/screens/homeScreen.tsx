import { View, StyleSheet, ScrollView } from "react-native";
import LocationBar from "../components/home/LocationBar";
import SearchBar from "../components/home/SearchBar";
import CategorySection from "../components/home/CategorySection";
import FeatureSection from "../components/home/FeaturesSection";

// interface HomeScreenProps {}

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.mainContent}>
                <LocationBar />
                <SearchBar/>
                <CategorySection />
                <FeatureSection />
            </View>
        </ScrollView>
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