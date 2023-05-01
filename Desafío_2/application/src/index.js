import { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Events, Input, CustomModal } from './components/index';

export default function App() {
  const [text, setText] = useState('');
  const [events, setEvents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const onAddEvent = () => {
    if (text.length === 0) return;
    setEvents([
      ...events,
      {
        id: Math.random().toString(),
        value: text,
        fav: false
      }
    ]);
    setText('');
  }

  const onHandlerEvent = (id) => {
    setModalVisible(!modalVisible);
    const selectedEvent = events.find(event => event.id === id);
    setSelectedEvent(selectedEvent);
  //  console.warn(selectedEvent.fav);
  }

  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedEvent(null);
  }

  const onHandlerDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
    setModalVisible(!modalVisible);
  }

  const onHandlerFavEvent = (id) => {
   const selectedEvent = events.find(event => event.id === id);
   selectedEvent.fav = !selectedEvent.fav; 
   setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.container}>
      <Input 
        buttonColor='#52528C'
        buttonTitle='Add'
        onChangeText={(text) => setText(text)}
        onHandlerButton={onAddEvent}
        placeholder='Enter the product' 
        value={text}
      />
      <Events events={events} onSelectItem={onHandlerEvent} />
      <CustomModal 
        isVisible={modalVisible} 
        animationType='slide' 
        onCancel={onHandlerCancelModal} 
        onDelete={onHandlerDeleteEvent} 
        selectedEvent={selectedEvent}  
        onAddFavorite={onHandlerFavEvent}
      />
    </View>
  );
}


