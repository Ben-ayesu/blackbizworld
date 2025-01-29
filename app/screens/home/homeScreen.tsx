import { View, StyleSheet } from "react-native";
import { LocationBar } from "../../components/home/LocationBar";
import SearchBar from "../../components/home/SearchBar";
import CategorySection from "../../components/home/CategorySection";
import FeatureSection from "../../components/home/FeaturesSection";

interface HomeScreenProps {}

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainContent}>
                <LocationBar />
                <SearchBar />
                <CategorySection />
                <FeatureSection />
                <View style={styles.bottomIndicator} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 40,
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 480,
        width: "100%",
        paddingBottom: 12,
        flexDirection: "column",
        overflow: "hidden",
        alignItems: "stretch",
    },
    mainContent: {
        display: "flex",
        marginTop: 14,
        width: "100%",
        paddingLeft: 17,
        paddingRight: 17,
        flexDirection: "column",
        alignItems: "stretch",
    },
    bottomIndicator: {
        borderRadius: 100,
        alignSelf: "center",
        display: "flex",
        marginTop: 438,
        width: 165,
        height: 5,
    },
});

export default HomeScreen;