import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import PromotionCard from "./PromotionCard";
import { Promotion } from "../../types/types";

const DUMMY_PROMOTIONS: Promotion[] = [
  {
    id: "1",
    title: "Errant Empire Pills",
    image: "https://example.com/image1.jpg",
    originalPrice: 84,
    discountedPrice: 67,
    discountPercentage: 20,
    description: "40% off. Open shop to view discount offer",
    isNew: true,
  },
  {
    id: "2",
    title: "Limited Time Offer",
    image: "https://example.com/image2.jpg",
    originalPrice: 65,
    discountedPrice: 36,
    discountPercentage: 44,
    description: "40% off. Open shop to view discount offer",
    isHot: true,
  },
  {
    id: "3",
    title: "Limited Time Offer",
    image: "https://example.com/image2.jpg",
    originalPrice: 65,
    discountedPrice: 36,
    discountPercentage: 44,
    description: "40% off. Open shop to view discount offer",
    isHot: true,
  },
  {
    id: "4",
    title: "Limited Time Offer",
    image: "https://example.com/image2.jpg",
    originalPrice: 65,
    discountedPrice: 36,
    discountPercentage: 44,
    description: "40% off. Open shop to view discount offer",
    isHot: true,
  },
];

const Promotions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Promotions</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {DUMMY_PROMOTIONS.map((promotion) => (
          <PromotionCard
            key={promotion.id}
            promotion={promotion}
            onPress={() => console.log("Promotion pressed:", promotion.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  seeAll: {
    fontSize: 14,
    color: "#1DA1F2",
  },
  scrollContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
});

export default Promotions;
