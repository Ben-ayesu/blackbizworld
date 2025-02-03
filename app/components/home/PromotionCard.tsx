import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Promotion } from "../../types/types";

interface PromotionCardProps {
  promotion: Promotion;
  onPress?: () => void;
}

const PromotionCard = ({ promotion, onPress }: PromotionCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <LinearGradient colors={["#1E1419", "#0E0F12"]} style={styles.container}>
        <Image
          source={{ uri: promotion.image }}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.contentContainer}>
          <View style={styles.headerRow}>
            <Text style={styles.title} numberOfLines={1}>
              {promotion.title}
            </Text>
            <View style={styles.badgeContainer}>
              {promotion.isNew && (
                <View style={[styles.badge, styles.newBadge]}>
                  <Text style={styles.badgeText}>New</Text>
                </View>
              )}
              {promotion.isHot && (
                <View style={[styles.badge, styles.hotBadge]}>
                  <Text style={styles.badgeText}>Hot</Text>
                </View>
              )}
            </View>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.originalPrice}>
              CAD ${promotion.originalPrice}
            </Text>
            <Text style={styles.discountedPrice}>
              CAD ${promotion.discountedPrice}
            </Text>
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>
                {promotion.discountPercentage}% Off
              </Text>
            </View>
          </View>

          <Text style={styles.description} numberOfLines={2}>
            {promotion.description}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8.6,
    borderWidth: 0.88,
    borderColor: "#2D2721",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 140,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  contentContainer: {
    padding: 12,
    gap: 8,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    flex: 1,
    marginRight: 8,
  },
  badgeContainer: {
    flexDirection: "row",
    gap: 6,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  newBadge: {
    backgroundColor: "#1DA1F2",
  },
  hotBadge: {
    backgroundColor: "#FF4444",
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "500",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  originalPrice: {
    fontSize: 14,
    color: "#8C8C8C",
    textDecorationLine: "line-through",
  },
  discountedPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  discountBadge: {
    backgroundColor: "rgba(29, 161, 242, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    color: "#1DA1F2",
    fontSize: 12,
    fontWeight: "500",
  },
  description: {
    fontSize: 14,
    color: "#B0B0B0",
    lineHeight: 20,
  },
});

export default PromotionCard;
