import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EditQuestionButton = ({ question, idx, setId }) => {
  return (
    <View style={styles.questionButton}>
      <View style={styles.containerItems}>
        <Text style={styles.text}>{`${idx + 1}.`}</Text>
        <Text style={styles.text}>{question.question}</Text>
      </View>
    </View>
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
