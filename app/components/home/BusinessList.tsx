import { View, Text, StyleSheet, FlatList } from "react-native";
import { Business } from "../../types/types";
import Icon from "react-native-vector-icons/MaterialIcons";
import BusinessCard from "./BusinessCard";

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
  }) => <BusinessCard business={business} index={index} />;

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
