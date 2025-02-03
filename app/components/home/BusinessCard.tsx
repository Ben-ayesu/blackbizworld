import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Business } from "../../types/types";

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
      <TouchableOpacity>
        {/* Category Tag */}
        <View style={styles.categoryTag}>
          <Icon
            name={getCategoryIcon(business.category)}
            size={14}
            color="#1DA1F2"
          />
          <Text style={styles.businessCategory}>{business.category}</Text>
        </View>

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
        <Text style={styles.description} numberOfLines={3} ellipsizeMode="tail">
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

        {/* Features */}
        <View style={styles.featuresContainer}>
          {business.features.slice(0, 2).map((feature, idx) => (
            <View key={idx} style={styles.featureTag}>
              <Icon name="check-circle" size={12} color="#1DA1F2" />
              <Text style={styles.featureText} numberOfLines={1}>
                {feature}
              </Text>
            </View>
          ))}
        </View>
      </TouchableOpacity>
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
    backgroundColor: "#1E1419",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#2D2721",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryTag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(29, 161, 242, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  businessCategory: {
    fontSize: 12,
    color: "#1DA1F2",
    marginLeft: 4,
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
  featuresContainer: {
    flexDirection: "column",
    gap: 4,
  },
  featureTag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(29, 161, 242, 0.07)",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
    alignSelf: "flex-start",
    gap: 3,
  },
  featureText: {
    fontSize: 10,
    color: "#1DA1F2",
  },
});

export default BusinessCard;
