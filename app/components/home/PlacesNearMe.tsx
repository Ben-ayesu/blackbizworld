import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Place {
  id: string;
  name: string;
  imageUrl: string;
}

const PlacesNearMe = () => {
  const places: Place[] = [
    {
      id: "1",
      name: "Farmer J Grocery shop",
      imageUrl:
        "https://images.pexels.com/photos/1485548/pexels-photo-1485548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "2",
      name: "Permob",
      imageUrl:
        "https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    { id: "3", name: "Place 3", imageUrl: "https://via.placeholder.com/150" },
    { id: "4", name: "Place 4", imageUrl: "https://via.placeholder.com/150" },
  ];

  const renderItem = ({ item }: { item: Place }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.placeName}>{item.name}</Text>
        <TouchableOpacity style={styles.starButton}>
          <Icon name="star-border" size={20} color="yellow" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Places Near Me</Text>
      <FlatList
        horizontal
        data={places}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listContent: {},
  card: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  placeName: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  starButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default PlacesNearMe;
