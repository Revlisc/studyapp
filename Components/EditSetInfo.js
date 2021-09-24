import React, { useState } from "react";
import { connect } from "react-redux";
import { TextInput, SafeAreaView, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { editInfo } from "../redux/actions";

const EditSetInfo = ({ currentSet, userData, editInfo, onDelete, newSet }) => {
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
        onChangeText={(text) => handleInfoChange("description", text)}
        value={info.setName}
      />
      <TextInput
        style={styles.description}
        multiline
        numberOfLines={4}
        onChangeText={(text) => handleInfoChange("description", text)}
        value={info.description}
      />
      {!newSet ? (
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.deleteBtn} onPress={() => onDelete()}>
            <Text style={styles.btnText}>Delete Set</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editBtn} onPress={() => handleSubmit()}>
            <Text style={styles.btnText}>Edit Set Info</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}
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

const mapDispatchToProps = (dispatch) => ({
  editInfo: (updatedState) => dispatch(editInfo(updatedState)),
});

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSetInfo);
