import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const EventItem = ({ item, onSelectItem }) => {

  let fav=' '; 
  if  (item.fav)  fav = '    ❤️'; 

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onSelectItem(item.id)}
    >
      <Text style={styles.item}> {item.value} {fav}  </Text> 
      
    </TouchableOpacity>
  );
};

export default EventItem;
