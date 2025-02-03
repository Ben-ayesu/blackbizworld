import { View, Platform, StatusBar as RNStatusBar } from "react-native";

const StatusBar = () => {
  if (Platform.OS === "ios") {
    return (
      <View style={{ paddingTop: 44, backgroundColor: "transparent" }}>
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 15 }}
        >
        </View>
      </View>
    );
  }
  return (
    <RNStatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
  );
};

export default StatusBar;
