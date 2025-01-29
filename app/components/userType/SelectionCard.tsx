import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {SelectionCardProps} from "@/app/types/types";

const SelectionCard = ({
  icon,
  label,
  onSelect,
  isSelected,
}: SelectionCardProps ) => {
  const isBusiness = label == "Business";

  return (
    <TouchableOpacity
      onPress={onSelect}
      style={[
        styles.selectionCard,
        isSelected && styles.selectedCardBorder,
      ]}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`Select ${label} option`}
      accessibilityState={{ selected: isSelected }}
    >
      <LinearGradient
          colors={isBusiness ? ["#492306", "rgba(73, 35, 6, 0.5)"] : ["#DFC6B4", "#C7A388"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[StyleSheet.absoluteFill, styles.gradientBackground]}
      />
      <View style={styles.selectionIconContainer}>
        {isBusiness ? (
            <Icon name="storefront-outline" size={30} color="white" />
        ) : (
            icon
        )}
      </View>
      <View style={styles.selectionLabel}>
        <Text style={[styles.selectionText, isBusiness && { color: "white" }]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  selectionCard: {
    borderRadius: 8,
    display: "flex",
    paddingHorizontal: 42,
    paddingVertical: 10,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    width: 157,
  },
  selectedCardBorder: {
    borderColor: "white",
    borderWidth: 2,
  },
  selectionIconContainer: {
    position: "relative",
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
  },
  selectionIcon: {
    position: "relative",
    display: "flex",
    width: 36,
    aspectRatio: 1,
  },
  selectionLabel: {
    marginTop: 4,
  },
  selectionText: {
    color: "rgba(93, 45, 9, 1)",
    fontSize: 14,
    fontFamily: "Poppins",
    fontWeight: "500",
    letterSpacing: -0.28,
    lineHeight: 24,
  },
  gradientBackground: {
    borderRadius: 8,
  }
});

export default SelectionCard;
