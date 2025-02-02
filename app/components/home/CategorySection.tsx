import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Business } from "@/app/types/types";
import { useState, useRef } from "react";

const categories = [
  { name: "All", icon: "apps" },
  { name: "Food", icon: "restaurant" },
  { name: "Coffee Shop", icon: "coffee" },
  { name: "Clothes", icon: "checkroom" },
  { name: "IT Services", icon: "computer" },
  { name: "Beauty & Wellness", icon: "spa" },
  { name: "Bakery", icon: "cake" },
  { name: "Outdoor Gear", icon: "hiking" },
  { name: "Bookstore", icon: "menu-book" },
  { name: "Pet Supplies", icon: "pets" },
  { name: "Home Furnishings", icon: "chair" },
  { name: "Gardening", icon: "grass" },
  { name: "Entertainment", icon: "sports-esports" },
];

interface CategorySectionProps {
  businesses: Business[] | null;
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}

const CategorySection = ({
  selectedCategory,
  onCategorySelect,
}: CategorySectionProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const animate = (index: number) => {
    Animated.spring(animatedValue, {
      toValue: index * 84,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryListContainer}>
        <Animated.View
          style={[
            styles.selectionIndicator,
            {
              transform: [{ translateX: animatedValue }],
            },
          ]}
        />
        <View style={styles.categoryList}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryItem,
                selectedCategory === category.name && styles.selectedCategory,
              ]}
              onPress={() => {
                onCategorySelect(category.name);
                animate(index);
              }}
            >
              <View
                style={[
                  styles.iconContainer,
                  selectedCategory === category.name &&
                    styles.selectedIconContainer,
                ]}
              >
                <Icon
                  name={category.icon}
                  size={30}
                  color={
                    selectedCategory === category.name ? "#1DA1F2" : "#FFFFFF"
                  }
                />
              </View>
              <Text
                style={[
                  styles.categoryName,
                  selectedCategory === category.name &&
                    styles.selectedCategoryName,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
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
    marginBottom: 20,
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
  categoryListContainer: {
    position: "relative",
  },
  selectionIndicator: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(29, 161, 242, 0.1)",
    zIndex: 0,
  },
  categoryList: {
    flexDirection: "row",
    gap: 24,
  },
  categoryItem: {
    alignItems: "center",
    zIndex: 1,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2E2E2E",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedIconContainer: {
    borderColor: "#1DA1F2",
    backgroundColor: "rgba(29, 161, 242, 0.1)",
  },
  categoryName: {
    color: "#FFFFFF",
    marginTop: 10,
    fontSize: 14,
  },
  selectedCategory: {
    transform: [{ scale: 1.05 }],
  },
  selectedCategoryName: {
    color: "#1DA1F2",
    fontWeight: "bold",
  },
});

export default CategorySection;
