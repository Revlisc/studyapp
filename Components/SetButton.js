import React from "react";
import { View, Text } from "react-native";

const SetButton = ({ key, name }) => {
  return (
    <View>
      <Text id={key}>{name}</Text>
    </View>
  );
};

export default SetButton;
