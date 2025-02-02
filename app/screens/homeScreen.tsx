import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import LocationBar from "../components/home/LocationBar";
import SearchBar from "../components/home/SearchBar";
import CategorySection from "../components/home/CategorySection";
import FeatureSection from "../components/home/FeaturesSection";
import Animated, { FadeIn, FadeInUp } from "react-native-reanimated";
import { useState, useEffect } from "react";
import businessService from "../services/api/businessService";
import { Business } from "../types/types";

// interface HomeScreenProps {}

const HomeScreen = () => {
  const [businesses, setBusinesses] = useState<Business[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const data = await businessService.getBusinesses();
        if (!data) {
          throw new Error('No businesses found');
        }
        setBusinesses(data);
      } catch (err: any) {
        console.error('Error fetching businesses:', err);
        setError(err.message || "Failed to fetch businesses");
      } finally {
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <Animated.ScrollView
      entering={FadeIn.duration(600)}
      style={styles.container}
    >
      <Animated.View
        entering={FadeInUp.duration(800).delay(100)}
        style={styles.mainContent}
      >
        <LocationBar />
        <SearchBar />
        <CategorySection businesses={businesses} />
        <FeatureSection />
      </Animated.View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  mainContent: {
    display: "flex",
    flexDirection: "column",
    marginTop: 40,
    paddingHorizontal: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
  },
});

export default HomeScreen;
