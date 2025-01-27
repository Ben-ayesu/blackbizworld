import * as React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

interface SelectionCardProps {
  icon: string;
  label: string;
  onSelect: () => void;
  isSelected: boolean;
}

export const SelectionCard = ({
  icon,
  label,
  onSelect,
  isSelected,
}: SelectionCardProps ) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={[styles.selectionCard, isSelected && styles.selectedCard]}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`Select ${label} option`}
      accessibilityState={{ selected: isSelected }}
    >
      <Image
        resizeMode="contain"
        source={{ uri: icon }}
        style={styles.selectionIcon}
      />
      <View style={styles.selectionLabel}>
        <Text style={styles.selectionText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  selectionCard: {
    borderRadius: 8,
    borderColor: "rgba(93, 45, 9, 1)",
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    paddingHorizontal: 42,
    paddingVertical: 10,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    width: 157,
  },
  selectedCard: {
    backgroundColor: "rgba(93, 45, 9, 0.1)",
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
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Poppins",
    fontWeight: "500",
    letterSpacing: -0.28,
    lineHeight: 24,
  },
});
