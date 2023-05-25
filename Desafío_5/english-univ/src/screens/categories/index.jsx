import React from "react";
import { FlatList, SafeAreaView } from "react-native";

import { styles } from "./styles";
import { Header, Detail } from "../../components";
import CategoryItem from "../../components/category-item";
import { CATEGORIES } from "../../constants";

const Categories = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate("Courses", {
      categoryId: item.id,
      name: item.name,
      color: item.color,
    });
  };

  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;

  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <Header title="IT English University 📖" />
      <Detail text="Improve your English with our courses for IT" />
      <FlatList data={CATEGORIES} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default Categories;
