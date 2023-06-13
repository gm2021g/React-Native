import { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { ImageSelector, LocationSelector } from "../../components";
import colors from "../../utils/colors";

const NewPlace = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState(null);

  const onHandlerChangeText = (text) => {
    setText(text);
  };

  const onHandlerSubmit = () => {
    alert("The profile was saved successfully");
  };

  const onImage = (imageUri) => {
    setImage(imageUri);
  };
  const onLocation = (location) => {
    setLocation(location);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Profile photo and location</Text>
        <TextInput
          style={styles.input}
          placeholder="Buenos Aires, CDMX 12345"
          onChangeText={onHandlerChangeText}
          value={text}
        />
        <ImageSelector onImage={onImage} />
        <LocationSelector onLocation={onLocation} />
        <Button title="Save" color={colors.primary} onPress={onHandlerSubmit} />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
