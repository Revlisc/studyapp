import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
const EditQuestionButton = ({ question, idx, setId, deleteQuestion }) => {
  const rightSwipeActions = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#de1616",
          justifyContent: "center",
          alignItems: "flex-end",
          marginTop: 15,
          padding: 15,
        }}
        onPress={() => deleteQuestion(question)}
      >
        <View>
          <Text
            style={{
              color: "#1b1a17",
            }}
          >
            Delete
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={rightSwipeActions}>
      <View style={styles.questionButton}>
        <View style={styles.containerItems}>
          <Text style={styles.text}>{`${idx + 1}.`}</Text>
          <Text style={styles.text}>{question.question}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  questionButton: {
    alignSelf: "center",
    marginTop: 15,
    fontSize: 20,
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 17,
  },
  text: {
    fontSize: 20,
    alignSelf: "center",
    padding: 20,
  },
  containerItems: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default EditQuestionButton;
