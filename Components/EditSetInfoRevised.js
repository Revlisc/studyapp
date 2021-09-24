import React, { useState } from "react";

import { TextInput, SafeAreaView, TouchableOpacity, StyleSheet, Text, View } from "react-native";

const EditSetInfoRevised = ({ handleInfoChange, currentSet }) => {
  return (
    <SafeAreaView>
      <Text style={styles.header}>Title</Text>
      <TextInput
        style={styles.setName}
        onChangeText={(text) => handleInfoChange("setName", text)}
        value={currentSet.setName}
      />
      <Text style={styles.header}>Description</Text>
      <TextInput
        style={styles.description}
        multiline
        numberOfLines={4}
        onChangeText={(text) => handleInfoChange("description", text)}
        value={currentSet.description}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    fontSize: 25,
  },
  setName: {
    height: 50,

    borderWidth: 1,
    borderColor: "#C4C4C4",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    fontSize: 30,
  },

  description: {
    height: 100,

    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    fontSize: 20,
  },

  btnContainer: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  editBtn: {
    width: 100,
    paddingVertical: 10,
    marginLeft: 15,
    alignItems: "center",
    borderColor: "#C4C4C4",
    borderWidth: 1,
    backgroundColor: "#6C61EB",
    borderRadius: 15,
  },

  deleteBtn: {
    width: 100,
    paddingVertical: 10,
    alignItems: "center",
    borderColor: "#C4C4C4",
    borderWidth: 1,
    backgroundColor: "#de1616",
    borderRadius: 15,
  },

  btnText: {
    color: "#fff",
  },
});

export default EditSetInfoRevised;
