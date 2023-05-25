import { useState, React } from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { OrderItem, Input, Detail } from "../../components";
import { COLORS, COURSES } from "../../constants";

const Searches = () => {
  const [keyWords, setkeyWords] = useState("");
  const [findCourses, setFindCourse] = useState(null);

  const onSearch = () => {
    if (keyWords.length === 0) return;

    let filteredCourses = null;
    filteredCourses = COURSES.filter((course) =>
      course.name.toLowerCase().includes(keyWords.toLowerCase())
    );

    if (filteredCourses.length > 0) setFindCourse(1);
    else setFindCourse(null);

    setkeyWords("");
  };

  const Content = () =>
    findCourses ? <Detail text="Matches found !!! " /> : <Detail text="No data found" />;

  return (
    <View styles={styles.inputContainer}>
      <Input
        buttonColor={COLORS.brightRed}
        buttonTitle="Search"
        onChangeText={(keyWord) => setkeyWords(keyWord)}
        onHandlerButton={onSearch}
        placeholder="Enter keywords"
        value={keyWords}
      />
      <Content />
    </View>
  );
};

export default Searches;
