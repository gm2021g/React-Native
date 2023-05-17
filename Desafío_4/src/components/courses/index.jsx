import React from "react";
import { View, FlatList, Text } from "react-native";
import CourseItem from "./item";
import { styles } from "./styles";

const courses = ({ courses, onSelectItem }) => {
  const renderItem = ({ item }) => (
    <CourseItem item={item} onSelectItem={onSelectItem} />
  );

  const keyExtractor = (item) => item.id;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> IT English Courses: </Text>
      <FlatList
        renderItem={renderItem}
        data={courses}
        keyExtractor={keyExtractor}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

export default courses;
