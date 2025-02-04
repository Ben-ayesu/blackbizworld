import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Business } from "../../types/types";
import { LinearGradient } from "expo-linear-gradient";

interface BusinessCardProps {
  business: Business;
  index: number;
}

const BusinessCard = ({ business, index }: BusinessCardProps) => {
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100).duration(400)}
      style={styles.businessItem}
    >
      <LinearGradient
        colors={["#1E1419", "#0E0F12"]}
        style={styles.gradientBackground}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require("@/app/assets/images/image.png")}
            style={styles.businessImage}
            resizeMode="cover"
          />
        </View>

        <TouchableOpacity>
          {/* Business Name */}
          <Text
            style={styles.businessName}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {business.name}
          </Text>

          {/* Rating and Reviews */}
          <View style={styles.ratingContainer}>
            <Icon name="star" size={14} color="#FFD700" />
            <Text style={styles.rating}>{business.rating}</Text>
            <Text style={styles.reviews}>({business.reviews} reviews)</Text>
          </View>

          {/* Description */}
          <Text
            style={styles.description}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {business.description}
          </Text>

          {/* Location */}
          <View style={styles.locationContainer}>
            <Icon name="location-on" size={14} color="#B0B0B0" />
            <Text
              style={styles.businessLocation}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {business.location}
            </Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </Animated.View>
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
  businessItem: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2D2721",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gradientBackground: {
    padding: 10,
    borderRadius: 10,
  },
  imageContainer: {
    width: "100%",
    height: 142.82,
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
    marginBottom:10,
  },
  businessImage: {
    width: "100%",
    height: "100%",
    borderRadius: 7.32,
  },
  businessName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 6,
    lineHeight: 20,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  rating: {
    color: "#FFFFFF",
    marginLeft: 4,
    fontSize: 12,
    fontWeight: "bold",
  },
  reviews: {
    color: "#B0B0B0",
    marginLeft: 4,
    fontSize: 12,
  },
  description: {
    color: "#B0B0B0",
    fontSize: 12,
    marginBottom: 8,
    lineHeight: 16,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  businessLocation: {
    fontSize: 12,
    color: "#B0B0B0",
    marginLeft: 4,
    flex: 1,
  },
});

export default BusinessCard;
