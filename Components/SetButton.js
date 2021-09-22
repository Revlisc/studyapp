import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
const SetButton = ({ setName, id }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ReviewScreen', {itemId: id})} style={styles.setButton}>
      <View style={styles.containerItems}>
        <Text style={styles.text}>{setName}</Text>
        <Icon
          style={styles.icon}
          name="edit"
          onPress={() => {
            /* 1. Navigate to the EditScreen route with params */
            navigation.navigate("EditSet", {
              itemId: id,
              setName: setName,
            });
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  setButton: {
    alignSelf: "center",
    marginTop: 15,
    fontSize: 20,
    backgroundColor: "#fff",
    width: "90%",
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
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 10,
  },
});

export default SetButton;
