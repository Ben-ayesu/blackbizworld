import { View, Text, StyleSheet } from "react-native";

// interface FeatureSectionProps {}

const FeatureSection = () => {
    return (
        <View style={styles.featureTitle}>
            <Text>Features</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    featureTitle: {
        color: "rgba(255, 255, 255, 1)",
        fontSize: 18,
        fontFamily: "Be Vietnam, sans-serif",
        letterSpacing: -0.36,
        marginTop: 38,
    },
});

export default FeatureSection;