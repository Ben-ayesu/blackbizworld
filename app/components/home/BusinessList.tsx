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
