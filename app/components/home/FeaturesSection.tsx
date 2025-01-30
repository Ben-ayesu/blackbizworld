import { View, Text, StyleSheet, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const features = [
    { id: "1", title: "Fast Delivery", icon: "local-shipping" },
    { id: "2", title: "Great Offers", icon: "local-offer" },
    { id: "3", title: "Best Safety", icon: "security" },
];

const FeatureSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Features</Text>
            <FlatList
                horizontal
                data={features}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.featureItem}>
                        <View style={styles.iconContainer}>
                            <Icon name={item.icon} size={30} color="#FFFFFF" />
                        </View>
                        <Text style={styles.featureTitle}>{item.title}</Text>
                    </View>
                )}
                contentContainerStyle={styles.featureList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    title: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    featureList: {
        marginTop: 20,
    },
    featureItem: {
        alignItems: "center",
        marginRight: 20,
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#2E2E2E",
        justifyContent: "center",
        alignItems: "center",
    },
    featureTitle: {
        color: "#FFFFFF",
        marginTop: 10,
        fontSize: 14,
    },
});

export default FeatureSection;