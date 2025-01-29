import { View, Text, Image, StyleSheet } from "react-native";

interface CategorySectionProps {}

const categories = ["Cooks", "Food", "Drinks", "Clothes"];

const CategorySection = () => {
    return (
        <>
            <View style={styles.categoryHeader}>
                <View style={styles.categoryTitle}>
                    <Text style={styles.categoryTitleText}>Categories</Text>
                </View>
                <View style={styles.seeAllButton}>
                    <Text style={styles.seeAllButtonText}>See all</Text>
                </View>

            </View>
            <View style={styles.categoryContent}>
                <Image
                    resizeMode="contain"
                    source={{ uri: "https://cdn.builder.io/api/v1/image/assets/0631d207b9dc4b438681345940ab050f/f9b9ffbb56079c966c22a578d74ba69acfeb94c96a40651d4fb1b6c0034288d3?apiKey=0631d207b9dc4b438681345940ab050f&" }}
                    style={styles.categoryImage}
                />
                <View style={styles.categoryList}>
                    {categories.map((category, index) => (
                        <View key={index} style={styles.categoryItem}>
                            <Text>{category}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    categoryHeader: {
        display: "flex",
        marginTop: 33,
        alignItems: "stretch",
        gap: 40
    },
    categoryTitleText: { // Add this new style for Text component
        color: "rgba(255, 255, 255, 1)",
        fontSize: 18,
        fontFamily: "Product Sans, sans-serif",
        letterSpacing: -0.36,
    },
    seeAllButtonText: { // Add this new style for Text component
        color: "rgba(29, 161, 242, 1)",
        fontSize: 12,
        fontFamily: "Work Sans, sans-serif",
    },
    categoryContent: {
        display: "flex",
        marginTop: 20,
        width: "100%",
        flexDirection: "column",
        alignItems: "stretch",
        fontFamily: "Work Sans, sans-serif",
        fontSize: 13,
        color: "rgba(255, 255, 255, 1)",
    },
    categoryImage: {
        position: "relative",
        display: "flex",
        width: 354,
        aspectRatio: 4.65,
    },
    categoryList: {
        alignSelf: "center",
        display: "flex",
        width: 311,
        maxWidth: "100%",
        alignItems: "center",
        gap: "40px 49px",
        justifyContent: "space-between",
    },
    categoryItem: {
        alignSelf: "stretch",
        marginTop: "auto",
        marginBottom: "auto",
    },
    categoryTitle: {},
    seeAllButton: {},
});

export default CategorySection;