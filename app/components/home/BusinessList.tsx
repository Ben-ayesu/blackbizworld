import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Business } from "../../types/types";
import Icon from "react-native-vector-icons/MaterialIcons";
import Animated, { FadeInDown } from "react-native-reanimated";

interface BusinessListProps {
  businesses: Business[] | null;
  selectedCategory: string;
}

const BusinessList = ({ businesses, selectedCategory }: BusinessListProps) => {
  if (!businesses) {
    return (
      <View style={styles.emptyContainer}>
        <Icon name="store" size={50} color="#4A4A4A" />
        <Text style={styles.emptyText}>No businesses to display</Text>
      </View>
    );
  }

  const filteredBusinesses =
    selectedCategory === "All"
      ? businesses
      : businesses.filter((business) => business.category === selectedCategory);

  if (filteredBusinesses.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Icon name="search-off" size={50} color="#4A4A4A" />
        <Text style={styles.emptyText}>
          No businesses found in this category
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {filteredBusinesses.map((business, index) => (
        <Animated.View
          entering={FadeInDown.delay(index * 100).duration(400)}
          key={business.id}
        >
          <TouchableOpacity style={styles.businessItem}>
            <View style={styles.businessHeader}>
              <View style={styles.businessInfo}>
                <Text style={styles.businessName}>{business.name}</Text>
                <View style={styles.categoryTag}>
                  <Icon
                    name={getCategoryIcon(business.category)}
                    size={16}
                    color="#1DA1F2"
                  />
                  <Text style={styles.businessCategory}>
                    {business.category}
                  </Text>
                </View>
              </View>
              <Icon name="chevron-right" size={24} color="#B0B0B0" />
            </View>
            <View style={styles.locationContainer}>
              <Icon name="location-on" size={16} color="#B0B0B0" />
              <Text style={styles.businessLocation}>{business.location}</Text>
            </View>
            {business.features && (
              <View style={styles.featuresContainer}>
                {business.features.map((feature, idx) => (
                  <View key={idx} style={styles.featureTag}>
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
              </View>
            )}
          </TouchableOpacity>
        </Animated.View>
      ))}
    </View>
  );
};

const getCategoryIcon = (category: string): string => {
  switch (category) {
    case "Cooks":
      return "restaurant";
    case "Food":
      return "fastfood";
    case "Drinks":
      return "local-bar";
    case "Clothes":
      return "checkroom";
    default:
      return "store";
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  businessItem: {
    backgroundColor: "#2E2E2E",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  businessHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  businessInfo: {
    flex: 1,
  },
  businessName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  categoryTag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(29, 161, 242, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  businessCategory: {
    fontSize: 14,
    color: "#1DA1F2",
    marginLeft: 4,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  businessLocation: {
    fontSize: 14,
    color: "#B0B0B0",
    marginLeft: 4,
  },
  featuresContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
  },
  featureTag: {
    backgroundColor: "#3E3E3E",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  featureText: {
    fontSize: 12,
    color: "#B0B0B0",
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    gap: 16,
  },
  emptyText: {
    color: "#4A4A4A",
    fontSize: 16,
  },
});

export default BusinessList;
