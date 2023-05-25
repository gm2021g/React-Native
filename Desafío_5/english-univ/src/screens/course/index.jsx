import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import { COURSES } from "../../constants";

const Course = ({ route }) => {
  const { courseId } = route.params;

  const course = COURSES.find((course) => course.id === courseId);
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={{ uri: course.image }} style={styles.image} />
      <Text style={styles.name}>{course.name}</Text>
      <Text style={styles.description}>{course.description}</Text>
      <Text style={styles.price}>USD {course.price}</Text>
      <Text style={styles.hours}>Hours: {course.hours}</Text>
    </View>
  );
};

export default Course;
