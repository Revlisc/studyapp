import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Icon,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { addSet } from "../redux/actions";
import EditSetInfoRevised from "../Components/EditSetInfoRevised";
import EditQuestionButton from "../Components/EditQuestionButton";

const AddSet = ({ navigation, addSet }) => {
  const [currentSet, setCurrentSet] = useState({ questions: [], id: Math.random() * 1000 });
  const [newQuestion, setNewQuestion] = useState({ question: "", answer: "" });
  const [questionToEdit, setQuestionToEdit] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);

  const handleInfoChange = (input, text) => {
    setCurrentSet({
      ...currentSet,
      [input]: text,
    });

    //setFillButton(true);
  };

  const handleNewQuestion = (input, text) => {
    setNewQuestion({
      ...newQuestion,
      [input]: text,
    });
  };

  const handleNewQuestionSubmit = () => {
    setModalVisible(false);
    const questionToAdd = {
      ...newQuestion,
      id: Math.random() * 1000,
    };

    setCurrentSet({
      ...currentSet,
      questions: currentSet.questions.concat(questionToAdd),
    });

    setNewQuestion({
      question: "",
      answer: "",
    });

    console.log(currentSet);
  };

  const handleNewQuestionEditInput = (input, text) => {
    setQuestionToEdit({
      ...questionToEdit,
      [input]: text,
    });
  };

  const handleNewQuestionEdit = () => {
    console.log(questionToEdit.id);
    const newQuestions = currentSet.questions.map((question) => {
      if (question.id === questionToEdit.id) {
        return questionToEdit;
      }
      return question;
    });

    setCurrentSet({
      ...currentSet,
      questions: newQuestions,
    });

    setQuestionToEdit("");
    setEditModalVisible(false);
  };

  const onDeleteQuestionHandler = () => {
    console.log("delete");
  };

  const handleSubmit = () => {
    console.log(currentSet);
    addSet(currentSet);
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => {
        setEditModalVisible(true);
        setQuestionToEdit(item);
      }}
    >
      <EditQuestionButton
        question={item}
        idx={index}
        setId={currentSet.id}
        deleteQuestion={onDeleteQuestionHandler}
      />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView>
      <View style={styles.infoContainer}>
        <EditSetInfoRevised currentSet={currentSet} handleInfoChange={handleInfoChange} />
      </View>

      <View style={styles.questionContainer}>
        <FlatList
          data={currentSet.questions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <Text style={styles.modalText}>Hello World!</Text> */}
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
                  value={newQuestion.question}
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
                  value={newQuestion.answer}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.submitBtn} onPress={() => handleNewQuestionSubmit()}>
              <Text style={styles.btnText}>Add Question</Text>
            </TouchableOpacity>
            <Pressable style={styles.cancelBtn} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.btnText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={editModalVisible}
        onRequestClose={() => {
          setModalVisible(!editModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <Text style={styles.modalText}>Hello World!</Text> */}
            <View style={styles.infoContainer}>
              <View style={styles.containerItem}>
                <Text style={styles.header}>Question</Text>
                <TextInput
                  style={styles.questionForm}
                  multiline
                  numberOfLines={4}
                  returnKeyType="done"
                  blurOnSubmit={true}
                  onChangeText={(text) => handleNewQuestionEditInput("question", text)}
                  value={questionToEdit.question}
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
                  onChangeText={(text) => handleNewQuestionEditInput("answer", text)}
                  value={questionToEdit.answer}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.submitBtn} onPress={() => handleNewQuestionEdit()}>
              <Text style={styles.btnText}>Submit Changes</Text>
            </TouchableOpacity>
            <Pressable
              style={styles.cancelBtn}
              onPress={() => setEditModalVisible(!setEditModalVisible)}
            >
              <Text style={styles.btnText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable style={[styles.addNewBtn]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Add Question</Text>
      </Pressable>

      <TouchableOpacity onPress={() => handleSubmit()}>
        <Text>Add </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F8FF",
    height: "100%",
  },
  infoContainer: {
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 5,
    borderRadius: 2,

    marginHorizontal: 35,
  },
  questionContainer: {
    marginHorizontal: 35,
  },
  iconContainer: {
    backgroundColor: "#F5F8FF",
    width: 45,
    alignSelf: "center",
    marginTop: 30,
  },

  addNewBtn: {
    width: 300,
    paddingVertical: 10,
    alignItems: "center",
    borderColor: "#C4C4C4",
    borderWidth: 1,
    backgroundColor: "#6C61EB",
    borderRadius: 15,
    alignSelf: "center",
  },

  cancelBtn: {
    width: 300,
    paddingVertical: 10,
    alignItems: "center",
    borderColor: "#C4C4C4",
    borderWidth: 1,
    backgroundColor: "#6C61EB",
    borderRadius: 15,
    alignSelf: "center",
  },

  addBtn: {},
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
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
  containerItem: {
    width: 300,
  },
  questionForm: {
    height: 150,

    marginTop: 5,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    backgroundColor: "#fff",
    borderRadius: 15,

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

const mapDispatchToProps = (dispatch) => ({
  addSet: (newSet) => dispatch(addSet(newSet)),
});

export default connect(null, mapDispatchToProps)(AddSet);
