import React, { useState } from "react";
import { connect } from "react-redux";
import { TextInput, SafeAreaView, TouchableOpacity, StyleSheet, Text } from "react-native";
import { editInfo } from "../redux/actions";

const EditSetInfo = ({ currentSet, userData, editInfo }) => {
  const { setName, description } = currentSet;
  const [info, setInfo] = useState({ setName, description });

  const handleInfoChange = (input, text) => {
    setInfo({
      ...info,
      [input]: text,
    });
    //setFillButton(true);
  };

  const handleSubmit = () => {
    //update setName and description
    const updatedSet = {
      ...currentSet,
      setName: info.setName,
      description: info.description,
    };

    const updatedState = userData.map((set) => {
      if (set.id === currentSet.id) {
        return updatedSet;
      }
      return set;
    });

    editInfo(updatedState);
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.setName}
        onChangeText={(text) => handleInfoChange("setName", text)}
        value={info.setName}
      />
      <TextInput
        style={styles.description}
        multiline
        numberOfLines={4}
        onChangeText={(text) => handleInfoChange("description", text)}
        value={info.description}
      />
      <TouchableOpacity onPress={() => handleSubmit()}>
        <Text>Edit Set Info</Text>
      </TouchableOpacity>
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

const mapDispatchToProps = (dispatch) => ({
  editInfo: (updatedState) => dispatch(editInfo(updatedState)),
});

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSetInfo);
