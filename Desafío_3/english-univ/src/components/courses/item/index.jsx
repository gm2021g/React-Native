import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const courseItem = ({ item, onSelectItem }) => {

  let fav=' '; 
  let cart=' '; 
  if  (item.fav)  fav = '    ❤️'; 
  if  (item.cart)  cart = '    🛒'; 
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onSelectItem(item.id)}
    >      
      <Text style={styles.item}> {item.value} {fav} {cart} </Text> 
      
    </TouchableOpacity>
  );
};

export default courseItem;
