import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const LocationBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.locationWrapper}>
        <Icon
          name="location-on"
          size={20}
          color="#FFFFFF"
          style={styles.locationIcon}
        />
        <Text style={styles.locationText}>Vancouver</Text>
      </View>
      <View style={styles.iconsContainer}>
        <Image
          source={require("@/app/assets/images/profilepicture.jpeg")}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.notificationIcon}>
          <Icon name="notifications" size={24} color="#FFFFFF" />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 40,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginRight: 10,
  },
  locationIcon: {
    marginRight: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 15,
  },
  notificationIcon: {
    position: "relative",
    marginRight: 10,
  },
  notificationBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "red",
    borderRadius: 5,
    width: 10,
    height: 10,
  },
});

export default LocationBar;
