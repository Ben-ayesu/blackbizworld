import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface FilterChipProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
  iconName?: string;
}

const FilterChip: React.FC<FilterChipProps> = ({
  label,
  isSelected,
  onPress,
  iconName,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.chip,
        isSelected ? styles.selectedChip : styles.unselectedChip,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.chipText,
          isSelected ? styles.selectedChipText : styles.unselectedChipText,
        ]}
      >
        {label}
      </Text>
      {iconName && (
        <Icon
          name={iconName}
          size={18}
          color={isSelected ? "#FFFFFF" : "#B0B0B0"}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    backgroundColor: "#2E2E2E",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.88747,
    borderColor: "#4A4A4A",
  },
  selectedChip: {
    borderColor: "#1DA1F2",
  },
  unselectedChip: {
    backgroundColor: "transparent",
  },
  chipText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  selectedChipText: {
    color: "#FFFFFF",
  },
  unselectedChipText: {
    color: "#FFFFFF",
  },
  icon: {
    marginLeft: 8,
  },
});

export default FilterChip;
