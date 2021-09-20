import React from "react";
import { TextInput, SafeAreaView, Text, StyleSheet } from "react-native";

const EditSetInfo = ({ setName, description, handleInfoChange }) => {
  return (
    <SafeAreaView>
      <TextInput
        style={styles.setName}
        onChangeText={(text) => handleInfoChange("setName", text)}
        value={setName}
      />
      <TextInput
        style={styles.description}
        multiline
        numberOfLines={4}
        onChangeText={(text) => handleInfoChange("description", text)}
        value={description}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  setName: {
    height: 50,

    marginTop: 30,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    fontSize: 30,
  },

  description: {
    height: 100,

    marginTop: 30,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    fontSize: 20,
  },
});

export default EditSetInfo;
