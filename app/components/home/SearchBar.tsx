import { View, Text, Image, StyleSheet } from "react-native";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
    return (
        <View style={styles.searchContainer}>
            <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/0631d207b9dc4b438681345940ab050f/3b782b8978707fc2fdc88a2ea6055d3dcf60f2633515c4074e3c676a3ec8d902?apiKey=0631d207b9dc4b438681345940ab050f&" }}
                style={styles.searchIcon}
            />
            <View style={styles.searchInput}>
                <Text style={styles.searchText}>Search Businesses</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        borderRadius: 8,
        borderColor: "rgba(74, 74, 74, 0.32)",
        borderStyle: "solid",
        borderWidth: 1,
        display: "flex",
        marginTop: 38,
        minHeight: 44,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 8,
        paddingBottom: 8,
        alignItems: "stretch",
        gap: 10,
        overflow: "hidden",
        flexDirection: "row", // Added to align icon and text horizontally
    },
    searchIcon: {
        alignSelf: "center",
        width: 18,
        height: 18, // Explicit height instead of aspectRatio
    },
    searchInput: {
        flex: 1, // Takes remaining space
    },
    searchText: {
        fontFamily: "Work Sans", // Removed ", sans-serif" as it's not valid in React Native
        fontSize: 10,
        color: "rgba(255, 255, 255, 0.55)",
        lineHeight: 16,
    }
});

export default SearchBar; // Changed to default export based on your previous warnings