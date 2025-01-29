import { View, Text, Image, StyleSheet } from "react-native";

interface LocationBarProps {}

export const LocationBar: React.FC<LocationBarProps> = () => {
    return (
        <View style={styles.locationContainer}>
            <View style={styles.locationWrapper}>
                <Text style={styles.locationText}>Vancouver</Text>
                <Image
                    resizeMode="contain"
                    source={{ uri: "https://cdn.builder.io/api/v1/image/assets/0631d207b9dc4b438681345940ab050f/4fd0695a58d5038e50e76948d6b5648354a6fa7e7350510e13f227f53ea7ce1f?apiKey=0631d207b9dc4b438681345940ab050f&" }}
                    style={styles.locationIcon}
                />
            </View>
            <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/0631d207b9dc4b438681345940ab050f/75eef717d4e64c064eaa930f1f86b6a83188f8a912480d67c023f965d6d8093a?apiKey=0631d207b9dc4b438681345940ab050f&" }}
                style={styles.menuIcon}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    locationContainer: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    locationWrapper: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 101,
    },
    locationText: {
        fontFamily: "Be Vietnam, sans-serif",
        fontSize: 16,
        color: "rgba(255, 255, 255, 1)",
        letterSpacing: -0.16,
        lineHeight: 20,
    },
    locationIcon: {
        width: 20,
        aspectRatio: 2.5,
    },
    menuIcon: {
        width: 24,
        aspectRatio: 1,
    },
});
