import React from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import ListItem from "../components/ListItem";

const placeList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    marginBottom: 10
  }
});

export default placeList;
