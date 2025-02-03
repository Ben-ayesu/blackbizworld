import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Business } from "@/app/types/types";
import { useRef } from "react";
import { CATEGORIES } from "@/app/data/categories";
import FilterChip from "./FilterChip";

interface NowTrendingProps {
  businesses: Business[] | null;
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const NowTrendingSection = ({
  selectedCategory,
  onCategorySelect,
}: NowTrendingProps) => {
  const scrollViewRef = useRef<ScrollView>(null);

  const handleCategorySelect = (category: string) => {
    onCategorySelect(category);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Now Trending</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {CATEGORIES.map((category, index) => (
            <FilterChip
              key={index}
              label={category.name}
              isSelected={selectedCategory === category.name}
              onPress={() => handleCategorySelect(category.name)}
              iconName={category.icon}
            />
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
  },
  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    color: "#1DA1F2",
    fontSize: 16,
  },
  scrollContent: {
    paddingBottom: 15,
  },
});

export default NowTrendingSection;
