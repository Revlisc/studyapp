import React, { useState } from "react";
import {
  View,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import { useRoute, useNavigation } from "@react-navigation/native";

const AddQuestionRevised = (handleNewQuestion) => {
  const route = useRoute();
  const { setId } = route.params;
  const navigation = useNavigation();
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "",
    answer: "",
  });

  const handleInfoChange = (type, text) => {
    setCurrentQuestion({
      ...currentQuestion,
      [type]: text,
    });
  };

  //handle global state updates in this screen
  //
  //global wrapper to enable keyboard dismiss
  //   const DismissKeyboard = ({ children }) => (
  //     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  //       {children}
  //     </TouchableWithoutFeedback>
  //   );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.containerItem}>
          <Text style={styles.header}>Question</Text>
          <TextInput
            style={styles.questionForm}
            multiline
            numberOfLines={4}
            returnKeyType="done"
            blurOnSubmit={true}
            onChangeText={(text) => handleNewQuestion("question", text)}
            value={currentQuestion.question}
          />
        </View>
        <View style={styles.containerItem}>
          <Text style={styles.header}>Answer</Text>
          <TextInput
            style={styles.questionForm}
            multiline
            numberOfLines={4}
            returnKeyType="done"
            blurOnSubmit={true}
            onChangeText={(text) => handleNewQuestion("answer", text)}
            value={currentQuestion.answer}
          />
        </View>
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => {
            handleSubmit();
          }}
        >
          <Text style={styles.btnText}>Add Question</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F8FF",
    height: "100%",
  },
  header: {
    marginTop: 15,
    fontSize: 20,
  },

  infoContainer: {
    marginHorizontal: 35,
  },
  containerItem: {},
  questionForm: {
    height: 150,

    marginTop: 5,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    fontSize: 20,
  },
  submitBtn: {
    borderColor: "#C4C4C4",

    borderWidth: 1,
    backgroundColor: "#6C61EB",
    width: 150,
    alignItems: "center",
    padding: 12,
    borderRadius: 15,
    alignSelf: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AddQuestionRevised;
