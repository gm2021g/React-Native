import React from "react";
import { View, Text, Button } from "react-native";

import { styles } from "./styles";

const Courses = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Courses</Text>
      <Button title="Go to Course" onPress={() => navigation.navigate("Course")} />
    </View>
  );
};

export default Courses;
