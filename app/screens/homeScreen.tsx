import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import LocationBar from "../components/home/LocationBar";
import SearchBar from "../components/home/SearchBar";
import NowTrending from "../components/home/NowTrending";
import BusinessList from "../components/home/BusinessList";
import Promotions from "../components/home/Promotions";
import { useState, useEffect } from "react";
import businessService from "../services/api/businessService";
import { Business } from "../types/types";
import PlacesNearMe from "../components/home/PlacesNearMe";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = () => {
  const [businesses, setBusinesses] = useState<Business[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const fetchBusinesses = async () => {
    try {
      const data = await businessService.getBusinesses();
      if (!data) {
        throw new Error("No businesses found");
      }
      setBusinesses(data);
    } catch (err: any) {
      console.error("Error fetching businesses:", err);
      if (err.response) {
        // Server responded with a status other than 200
        setError("Failed to fetch businesses. Please check your connection.");
      } else {
        // Network error or other issues
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBusinesses();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1DA1F2" />
        <Text style={styles.loadingText}>Loading businesses...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Icon name="error-outline" size={50} color="#FF4444" />
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => {
            setLoading(true);
            setError(null);
            fetchBusinesses();
          }}
        >
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#4D2F0F", "black"]}
        locations={[0, 0.65]}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <LocationBar />
          <SearchBar />
        </View>

        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.topContent}>
            <PlacesNearMe />
            <NowTrending
              businesses={businesses}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </View>

          <View style={styles.businessListContainer}>
            <BusinessList
              businesses={businesses}
              selectedCategory={selectedCategory}
            />
            <Promotions />
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    width: "100%",
  },
  header: {
    padding: 15,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 25,
  },
  topContent: {
    paddingHorizontal: 15,
  },
  businessListContainer: {
    minHeight: Dimensions.get("window").height * 0.5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A1A1A",
    gap: 16,
  },
  loadingText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1A1A1A",
    gap: 16,
  },
  errorText: {
    color: "#FF4444",
    fontSize: 16,
    textAlign: "center",
  },
  retryButton: {
    backgroundColor: "#1DA1F2",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  retryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
