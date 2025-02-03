import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
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
  }) => (
    <View style={styles.gridItem}>
      <BusinessCard business={business} index={index} />
    </View>
  );

  const loadMoreItems = () => {
    console.log("Load more items");
  };

  return (
    <FlatList
      data={filteredBusinesses}
      renderItem={renderBusinessCard}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Icon name="search-off" size={50} color="#4A4A4A" />
          <Text style={styles.emptyText}>
            No businesses found in this category
          </Text>
        </View>
      }
      ListFooterComponent={
        <TouchableOpacity style={styles.loadMoreButton} onPress={loadMoreItems}>
          <Text style={styles.loadMoreButtonText}>Load More</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
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
  gridItem: {
    flex: 1,
    margin: 5,
  },
  loadMoreButton: {
    backgroundColor: "#D5AF92",
    padding: 15,
    margin: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  loadMoreButtonText: {
    color: "#2F1604",
    fontWeight: "bold",
  },
});

export default BusinessList;
