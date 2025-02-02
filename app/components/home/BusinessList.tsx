import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
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

  const renderBusinessCard = ({
    item: business,
    index,
  }: {
    item: Business;
    index: number;
  }) => (
    <Animated.View
      entering={FadeInDown.delay(index * 100).duration(400)}
      style={styles.businessItem}
    >
      <TouchableOpacity>
        <View style={styles.businessHeader}>
          <View style={styles.businessInfo}>
            <Text style={styles.businessName}>{business.name}</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={16} color="#FFD700" />
              <Text style={styles.rating}>{business.rating}</Text>
              <Text style={styles.reviews}>({business.reviews} reviews)</Text>
            </View>
          </View>
          <View style={styles.categoryTag}>
            <Icon
              name={getCategoryIcon(business.category)}
              size={16}
              color="#1DA1F2"
            />
            <Text style={styles.businessCategory}>{business.category}</Text>
          </View>
        </View>

        <Text style={styles.description}>{business.description}</Text>

        <View style={styles.locationContainer}>
          <Icon name="location-on" size={16} color="#B0B0B0" />
          <Text style={styles.businessLocation}>{business.location}</Text>
        </View>

        <View style={styles.featuresContainer}>
          {business.features.map((feature, idx) => (
            <View key={idx} style={styles.featureTag}>
              <Icon name="check-circle" size={14} color="#1DA1F2" />
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <FlatList
      data={filteredBusinesses}
      renderItem={renderBusinessCard}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Icon name="search-off" size={50} color="#4A4A4A" />
          <Text style={styles.emptyText}>
            No businesses found in this category
          </Text>
        </View>
      }
    />
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
    padding: 15,
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
    alignItems: "flex-start",
    marginBottom: 12,
  },
  businessInfo: {
    flex: 1,
    marginRight: 12,
  },
  businessName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  rating: {
    color: "#FFFFFF",
    marginLeft: 4,
    fontWeight: "bold",
  },
  reviews: {
    color: "#B0B0B0",
    marginLeft: 4,
    fontSize: 12,
  },
  categoryTag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(29, 161, 242, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  businessCategory: {
    fontSize: 14,
    color: "#1DA1F2",
    marginLeft: 4,
  },
  description: {
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 20,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
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
    marginTop: 8,
  },
  featureTag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(29, 161, 242, 0.05)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  featureText: {
    fontSize: 12,
    color: "#1DA1F2",
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
    textAlign: "center",
  },
});

export default BusinessList;
