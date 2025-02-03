import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#D5AF92" style={styles.searchIcon} />
      <View style={styles.searchInput}>
        <Text style={styles.searchText}>Search Businesses</Text>
      </View>
      <TouchableOpacity>
        <Icon
          name="qr-code-scanner"
          size={24}
          color="#D5AF92"
          style={styles.qrIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.09)",
    borderWidth: 1,
    borderColor: "rgba(74, 74, 74, 0.32)",
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 20,
  },
  searchIcon: {
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
  },
  searchText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  qrIcon: {
    paddingHorizontal: 10,
  },
});

export default SearchBar;
