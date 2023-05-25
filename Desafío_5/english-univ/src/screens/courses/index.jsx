import React from "react";
import { SafeAreaView, FlatList } from "react-native";

import { styles } from "./styles";
import { CourseItem } from "../../components";
import { COURSES } from "../../constants/";

const Courses = ({ navigation, route }) => {
  const { categoryId, color } = route.params;

  const onSelected = (item) => {
    navigation.navigate("Course", {
      courseId: item.id,
      name: item.name,
    });
  };

  const filteredCourses = COURSES.filter((course) => course.category === categoryId);
  const renderItem = ({ item }) => <CourseItem item={item} onSelected={onSelected} color={color} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={filteredCourses} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default Courses;
