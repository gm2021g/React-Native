import { Button, View, Text } from 'react-native';
import { styles } from './styles';
import { Card } from '../../components';
import { theme } from '../../constants';

import {
  Header,
  Detail,
} from "../../components/index";

const Cart = () => {
  return (
    <View style={styles.container}>
      <Header title="IT English University 📖" />
      <Detail text=" Cart   🛒  "/>
      <Card style={styles.content}>
      <Text style={styles.title}> Aqui se visualizarán los cursos que estan en el carrito </Text>
        <View style={styles.buttonContainer}>
          <Button title=" Buy your Cart "  color={theme.colors.primary} onPress={() => {}} />
          <Button title=" Clean your Cart " color={theme.colors.primary} onPress={() => {}} />
        </View>
      </Card>
    </View>
  );
};

export default Cart;
