import React, { useState, useCallback } from "react";
import {
  View,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { connect } from "react-redux";
import { deleteQuestion } from "../redux/actions";
import EditSetInfo from "../Components/EditSetInfo";
import EditQuestionButton from "../Components/EditQuestionButton";

const EditSetScreen = ({ userData, navigation, deleteQuestion }) => {
  //must use route to get access to params
  const route = useRoute();
  const { itemId } = route.params;
  //filter out set being updated
  const set = userData.filter((set) => set.id === itemId)[0];
  //save it to local state
  const [currentSet, setCurrentSet] = useState(set);
  //had to use this hook to reload component when navigating back to screen
  useFocusEffect(
    useCallback(() => {
      setCurrentSet(set);
    })
  );

  const onDeleteHandler = (questionToDelete) => {
    const updatedQuestions = currentSet.questions.filter(
      (question) => question.id !== questionToDelete.id
    );
    const updatedSet = {
      ...currentSet,
      questions: updatedQuestions,
    };
    const updatedState = userData.map((set) => {
      if (set.id === currentSet.id) {
        return updatedSet;
      }
      return set;
    });
    deleteQuestion(updatedState);
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("EditQuestion", {
          question: item,
          setId: currentSet.id,
        });
      }}
    >
      <EditQuestionButton
        question={item}
        idx={index}
        setId={currentSet.id}
        deleteQuestion={onDeleteHandler}
      />
    </TouchableOpacity>
  );

  return (
    //components for each tyoe of input
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        <EditSetInfo currentSet={currentSet} />
      </View>
      <View style={styles.questionContainer}>
        <FlatList
          data={currentSet.questions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* add new question button, routes to add question screen */}
      <View style={styles.iconContainer}>
        <Icon
          name="plus"
          type="font-awesome"
          size="40"
          color="#6C61EB"
          onPress={() => {
            navigation.navigate("Add Question", { setId: currentSet.id });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});

const mapDispatchToProps = (dispatch) => ({
  deleteQuestion: (updatedState) => dispatch(deleteQuestion(updatedState)),
});

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

  addBtn: {},
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSetScreen);
