import React from "react";
import { View, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";

const Course = () => {
  //const dispatch = useDispatch();
  const course = useSelector((state) => state.courses.selected);

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{ uri: course.image }}
        style={styles.image}
      />
      <Text style={styles.name}>{course.name}</Text>
      <Text style={styles.description}>{course.description}</Text>
      <Text style={styles.price}>USD {course.price}</Text>
      <Text style={styles.hours}>Hours: {course.hours}</Text>
    </View>
  );
};

export default Course;
