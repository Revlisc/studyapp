import React, { useState } from "react";
import { View, TextInput, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { useRoute, useNavigation } from "@react-navigation/native";
import { editQuestion } from "../redux/actions";

const EditQuestionScreen = ({ userData, editQuestion }) => {
  const route = useRoute();
  const { question, setId } = route.params;
  const navigation = useNavigation();
  const [currentQuestion, setCurrentQuestion] = useState(question);

  const handleInfoChange = (type, text) => {
    setCurrentQuestion({
      ...currentQuestion,
      [type]: text,
    });
  };

  const handleSubmit = () => {
    //create updated copy of state
    //filter out set to update
    const setToUpdate = userData.filter((set) => set.id === setId)[0];
    const updatedQuestions = setToUpdate.questions.map((question) => {
      if (question.id === currentQuestion.id) {
        return currentQuestion;
      }

      return question;
    });

    const updatedSet = {
      ...setToUpdate,
      questions: updatedQuestions,
    };

    //map over both sets, update new set

    const updatedState = userData.map((set) => {
      if (set.id === setId) {
        return updatedSet;
      }
      return set;
    });
    editQuestion(updatedState);
    navigation.goBack();

    //dispatch new state to store
    //navigate back to edit set screen
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
            onChangeText={(text) => handleInfoChange("question", text)}
            value={currentQuestion.question}
          />
        </View>
        <View style={styles.containerItem}>
          <Text style={styles.header}>Answer</Text>
          <TextInput
            style={styles.questionForm}
            multiline
            numberOfLines={4}
            onChangeText={(text) => handleInfoChange("answer", text)}
            value={currentQuestion.answer}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            handleSubmit();
          }}
        >
          <Text>Edit Question</Text>
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
});

const mapDispatchToProps = (dispatch) => ({
  editQuestion: (updatedState) => dispatch(editQuestion(updatedState)),
});

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionScreen);
