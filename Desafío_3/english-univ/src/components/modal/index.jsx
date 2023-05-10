import React from "react";
import { Modal, View, Text, Button} from "react-native";
import { styles } from "./styles";
import { theme } from "../../constants";
import {
  Header,
  Detail
} from "../index";

const CustomModal = ({ isVisible, animationType, selectedCourse, onCancel, onAddToCart, onAddFavorite }) => {
  
  //let favorite = ; 
  //if ( selectedCourse.fav )  favorite = 'QUIT ❤️'  
  //else  favorite = 'ADD ❤️' ; 

    return (
        <Modal visible={isVisible} animationType={animationType}>
        <Header title="IT English University" />
        <Detail style={styles.detailMessage} text="Buy this Course or make as Favorite" />
        <View style={styles.container}>          
          <Text style={styles.title}>{selectedCourse?.value}</Text>
          <View style={styles.detailContainer}>
            <Text style={styles.selectedCourse}>{selectedCourse?.det} </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button 
              title='Cancel'
              color={theme.colors.primary}
              onPress={onCancel}
            />
            <Button 
            title='Add to Cart 🛒'
            color={theme.colors.primary}
            onPress={() => onAddToCart(selectedCourse.id)}
            />
            <Button 
            title='Favorite ❤️'
            color={theme.colors.primary}
            onPress={() => onAddFavorite(selectedCourse.id)}
            />
          </View>
        </View>
      </Modal>
    )
};

export default CustomModal;