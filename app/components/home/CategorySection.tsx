import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Business } from "@/app/types/types";
import { useState, useRef } from "react";
import { useAnimatedStyle, withSpring } from "react-native-reanimated";
import { CATEGORIES } from "@/app/data/categories";

interface CategorySectionProps {
  businesses: Business[] | null;
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const CategorySection = ({
  selectedCategory,
  onCategorySelect,
}: CategorySectionProps) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const indicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(selectedIndex * 84, {
            damping: 15,
            stiffness: 150,
          }),
        },
      ],
    };
  });

  const handleCategorySelect = (category: string, index: number) => {
    setSelectedIndex(index);
    onCategorySelect(category);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Animated.View style={[styles.selectionIndicator, indicatorStyle]} />
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {CATEGORIES.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryItem,
                selectedCategory === category.name && styles.selectedCategory,
              ]}
              onPress={() => handleCategorySelect(category.name, index)}
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
        </ScrollView>
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
    paddingHorizontal: 15,
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
  scrollContent: {
    paddingHorizontal: 15,
  },
  selectionIndicator: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(29, 161, 242, 0.1)",
    zIndex: 0,
    left: 15,
    top: 0,
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 24,
    width: 60,
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
    textAlign: "center",
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
