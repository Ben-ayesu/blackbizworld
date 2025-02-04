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
    {
      id: "3",
      name: "Place 3",
      imageUrl:
        "https://images.pexels.com/photos/1485548/pexels-photo-1485548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "4",
      name: "Place 4",
      imageUrl:
        "https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const renderItem = ({ item }: { item: Place }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <View style={styles.nameStarContainer}>
          <Text style={styles.placeName}>{item.name}</Text>
          <TouchableOpacity style={styles.starButton}>
            <Icon name="star-border" size={20} color="yellow" />
          </TouchableOpacity>
        </View>
        <Text style={styles.placeDescription}>
          Farmer J St. Mess's Park is a peaceful haven
        </Text>
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
    marginTop: 10,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listContent: {
    gap: 15,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 0,
    width: 261,
    backgroundColor: "linear-gradient(180deg, #1F1419 0%, #0E0F12 100%)",
    borderWidth: 1,
    borderColor: "#2D2721",
    borderRadius: 16,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 150,
    padding: 8,
    borderRadius: 16,
  },
  textContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  nameStarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  placeName: {
    fontFamily: "Product Sans",
    fontSize: 18,
    lineHeight: 24,
    color: "#FFFFFF",
    flex: 1,
  },
  placeDescription: {
    fontFamily: "Work Sans",
    fontSize: 14,
    lineHeight: 21,
    color: "rgba(255, 255, 255, 0.55)",
    marginBottom: 10,
  },
  starButton: {
    marginLeft: 10,
  },
});

export default PlacesNearMe;
