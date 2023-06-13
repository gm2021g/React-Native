import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { NewPlaceScreen } from "../../screens";

const Profile = () => {
  //const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email: {email} </Text>

      <NewPlaceScreen />
    </View>
  );
};

export default Profile;
