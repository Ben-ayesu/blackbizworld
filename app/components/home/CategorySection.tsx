import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Business } from "@/app/types/types";

const categories = [
  { name: "Cooks", icon: "restaurant" },
  { name: "Food", icon: "fastfood" },
  { name: "Drinks", icon: "local-bar" },
  { name: "Clothes", icon: "checkroom" },
];

interface CategorySectionProps {
  businesses: Business[] | null;
}

const CategorySection = ({}: CategorySectionProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryList}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <View style={styles.iconContainer}>
              <Icon name={category.icon} size={30} color="#FFFFFF" />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  seeAll: {
    color: "#1DA1F2",
    fontSize: 16,
  },
  categoryList: {
    flexDirection: "row",
    gap: 24,
    marginTop: 20,
  },
  categoryItem: {
    alignItems: "center",
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2E2E2E",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryName: {
    color: "#FFFFFF",
    marginTop: 10,
    fontSize: 14,
  },
});

export default CategorySection;
