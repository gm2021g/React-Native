import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";
import { Header, Detail } from "../../components";
import CategoryItem from "../../components/category-item";
import { selectCategory } from "../../store/actions";

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);

  const onSelected = (item) => {
    dispatch(selectCategory(item.id)); // despacha la acción al hacer click en una categoría
    navigation.navigate("Courses", {
      // categoryId: item.id,
      name: item.name, // nombre y color en la parte superior
      color: item.color,
    });
  };

  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );

  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <Header title="IT English University 📖" />
      <Detail text="Improve your English with our courses for IT" />
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Categories;
