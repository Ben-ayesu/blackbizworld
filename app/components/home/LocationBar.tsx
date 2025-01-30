import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const LocationBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.locationWrapper}>
                <Text style={styles.locationText}>Vancouver</Text>
                <Icon name="location-on" size={20} color="#FFFFFF" style={styles.locationIcon} />
            </View>
            <TouchableOpacity>
                <Icon name="menu" size={24} color="#FFFFFF" style={styles.menuIcon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginTop: 40,
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    locationWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    locationText: {
        color: "#FFFFFF",
        fontSize: 16,
        marginRight: 10,
    },
    locationIcon: {
        marginRight: 10,
    },
    menuIcon: {
        marginLeft: 10,
    },
});

export default LocationBar;