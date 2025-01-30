import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Icon name="search" size={20} color="#FFFFFF" style={styles.searchIcon} />
            <View style={styles.searchInput}>
                <Text style={styles.searchText}>Search Businesses</Text>
            </View>
            <TouchableOpacity>
                <Icon name="qr-code-scanner" size={24} color="#FFFFFF" style={styles.qrIcon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2E2E2E",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginTop: 20,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
    },
    searchText: {
        color: "#FFFFFF",
        fontSize: 14,
    },
    qrIcon: {
        marginLeft: 10,
    },
});

export default SearchBar;