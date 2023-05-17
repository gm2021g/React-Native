import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { theme } from "../../constants";
import {
  Courses,
  Input,
  CustomModal,
  Header,
  Detail,
} from "../../components/index";

//import { Cart } from "./screens/index";

const Main = ({ onSetCart }) => {
  const [loaded] = useFonts({
    "Ysabeau-Regular": require("../assets/fonts/Ysabeau-Regular.ttf"),
    "Ysabeau-Bold": require("../assets/fonts/Ysabeau-Bold.ttf"),
    "Ysabeau-SemiBold": require("../assets/fonts/Ysabeau-SemiBold.ttf"),
    "Ysabeau-Black": require("../assets/fonts/Ysabeau-Black.ttf"),
    "Ysabeau-ExtraBold": require("../assets/fonts/Ysabeau-ExtraBold.ttf"),
    "Ysabeau-ExtraLight": require("../assets/fonts/Ysabeau-ExtraLight.ttf"),
    "Ysabeau-Light": require("../assets/fonts/Ysabeau-Light.ttf"),
    "Ysabeau-Medium": require("../assets/fonts/Ysabeau-Medium.ttf"),
    "Ysabeau-Thin": require("../assets/fonts/Ysabeau-Thin.ttf"),
  });

  /*
  if (!loaded) {
    return (
      <View>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }*/

  const coursesInit = [
    {
      id: 1,
      value: "English for Data Base Administrators",
      det: "This course consists of five progressive modules. During the first three months you will have a teacher who will monitor your progress and group conversation classes twice a week. Finally you will be able to take an exam and obtain your certification endorsed by our prestigious institute, recognized worldwide.",
      cart: false,
      fav: false,
      price: 10,
    },
    {
      id: 2,
      value: "English Vocabulary for Developers",
      det: "This course consists of five progressive modules. During the first three months you will have a teacher who will monitor your progress and group conversation classes twice a week. Finally you will be able to take an exam and obtain your certification endorsed by our prestigious institute, recognized worldwide.",
      cart: false,
      fav: false,
      price: 11,
    },
    {
      id: 3,
      value: "English Vocabulary for QA",
      det: "This course consists of five progressive modules. During the first three months you will have a teacher who will monitor your progress and group conversation classes twice a week. Finally you will be able to take an exam and obtain your certification endorsed by our prestigious institute, recognized worldwide.",
      cart: false,
      fav: false,
      price: 8,
    },
    {
      id: 4,
      value: "English in the Office",
      det: "This course consists of five progressive modules. During the first three months you will have a teacher who will monitor your progress and group conversation classes twice a week. Finally you will be able to take an exam and obtain your certification endorsed by our prestigious institute, recognized worldwide.",
      cart: false,
      fav: false,
      price: 12,
    },
    {
      id: 5,
      value: "English for JAVA Developers",
      det: "This course consists of five progressive modules. During the first three months you will have a teacher who will monitor your progress and group conversation classes twice a week. Finally you will be able to take an exam and obtain your certification endorsed by our prestigious institute, recognized worldwide.",
      cart: false,
      fav: false,
      price: 15,
    },
    {
      id: 6,
      value: "English for Front-End Developers",
      det: "This course consists of five progressive modules. During the first three months you will have a teacher who will monitor your progress and group conversation classes twice a week. Finally you will be able to take an exam and obtain your certification endorsed by our prestigious institute, recognized worldwide.",
      cart: false,
      fav: false,
      price: 15,
    },
    {
      id: 7,
      value: "English for Back-End Developers",
      det: "This course consists of five progressive modules. During the first three months you will have a teacher who will monitor your progress and group conversation classes twice a week. Finally you will be able to take an exam and obtain your certification endorsed by our prestigious institute, recognized worldwide.",
      cart: false,
      fav: false,
      price: 15,
    },
    {
      id: Math.random().toString(),
      value: "Data Bases",
      det: "This course consists of five progressive modules. During the first three months you will have a teacher who will monitor your progress and group conversation classes twice a week. Finally you will be able to take an exam and obtain your certification endorsed by our prestigious institute, recognized worldwide.",
      cart: false,
      fav: false,
      price: 10,
    },
    {
      id: 8,
      value: "English for Web Developers",
      det: "This course consists of five progressive modules. During the first three months you will have a teacher who will monitor your progress and group conversation classes twice a week. Finally you will be able to take an exam and obtain your certification endorsed by our prestigious institute, recognized worldwide.",
      cart: false,
      fav: false,
      price: 10,
    },
    {
      id: 9,
      value: "IT Meetings - Level 1",
      det: "This course consists of five progressive modules. During the first three months you will have a teacher who will monitor your progress and group conversation classes twice a week. Finally you will be able to take an exam and obtain your certification endorsed by our prestigious institute, recognized worldwide.",
      cart: false,
      fav: false,
      price: 8,
    },
    {
      id: 10,
      value: "IT Meetings - Level 2",
      det: "This course consists of five progressive modules. During the first three months you will have a teacher who will monitor your progress and group conversation classes twice a week. Finally you will be able to take an exam and obtain your certification endorsed by our prestigious institute, recognized worldwide.",
      cart: false,
      fav: false,
      price: 10,
    },
    {
      id: 11,
      value: "IT Customer Support",
      det: "This course consists of five progressive modules. During the first three months you will have a teacher who will monitor your progress and group conversation classes twice a week. Finally you will be able to take an exam and obtain your certification endorsed by our prestigious institute, recognized worldwide.",
      cart: false,
      fav: false,
      price: 12,
    },
    {
      id: 12,
      value: "Hardware and Networks",
      det: "This course consists of five progressive modules. During the first three months you will have a teacher who will monitor your progress and group conversation classes twice a week. Finally you will be able to take an exam and obtain your certification endorsed by our prestigious institute, recognized worldwide.",
      cart: false,
      fav: false,
      price: 12,
    },
  ];

  const [email, setEmail] = useState("");
  const [emailOk, setEmailOk] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourse] = useState(coursesInit);
  // const [cart, setCart] = useState(false);

  const onSuscribetcourse = () => {
    if (email.length === 0) return;

    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // Using test we can check if the text match the pattern
    if (validEmail.test(email)) {
      // Envía mail con aviso de suscripción.....
      setEmailOk(1);
    } else {
      setEmailOk(2);
    }
  };

  // Search in the array if there is at least one course in the cart
  const onSeachItemsCart = () => {
    let value;
    const course = courses.find((course) => course.cart === true);
    if (course) value = true;
    onSetCart(value);
  };

  const Content = () =>
    emailOk === 0 ? (
      <Detail text="Receive news in your email! " />
    ) : emailOk === 1 ? (
      <Detail text="You will receive news in your email!" />
    ) : (
      <Detail text="Email is invalid" />
    );

  const onHandlerCourse = (id) => {
    setModalVisible(!modalVisible);
    const selectedCourse = courses.find((course) => course.id === id);
    setSelectedCourse(selectedCourse);
  };

  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedCourse(null);
  };

  const onHandlerAddToCartCourse = (id) => {
    const selectedCourse = courses.find((course) => course.id === id);
    selectedCourse.cart = !selectedCourse.cart;
    courses[selectedCourse.id - 1].cart = selectedCourse.cart;
    //console.warn("valor", courses[id].cart);
    setModalVisible(!modalVisible);
  };

  const onHandlerFavorite = (id) => {
    const selectedCourse = courses.find((course) => course.id === id);
    selectedCourse.fav = !selectedCourse.fav;
    courses[selectedCourse.id - 1].fav = selectedCourse.fav;
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Header title="IT English University 📖" />
      <Detail text="Improve your English with our courses for IT" />

      <Input
        buttonColor={theme.colors.primary}
        buttonTitle="Suscribe"
        onChangeText={(email) => setEmail(email)}
        onHandlerButton={onSuscribetcourse}
        placeholder="Enter your email"
        value={email}
      />
      <Content />

      <TouchableOpacity onPress={() => onSeachItemsCart()}>
        <Text style={styles.button}> Cart 🛒 </Text>
      </TouchableOpacity>

      <Courses courses={courses} onSelectItem={onHandlerCourse} />

      <CustomModal
        isVisible={modalVisible}
        animationType="slide"
        onCancel={onHandlerCancelModal}
        onAddToCart={onHandlerAddToCartCourse}
        selectedCourse={selectedCourse}
        onAddFavorite={onHandlerFavorite}
      />
    </View>
  );
};

export default Main;
