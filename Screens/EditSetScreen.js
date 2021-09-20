import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { connect } from "react-redux";
import EditSetInfo from "../Components/EditSetInfo";
import EditQuestionButton from "../Components/EditQuestionButton";

const EditSetScreen = ({ userData, navigation }) => {
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

  const handleInfoChange = (input, text) => {
    setCurrentSet({
      ...currentSet,
      [input]: text,
    });
    //setFillButton(true);
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
      <EditQuestionButton question={item} idx={index} setId={currentSet.id} />
    </TouchableOpacity>
  );
  return (
    //components for each tyoe of input
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        <EditSetInfo
          setName={currentSet.setName}
          description={currentSet.description}
          handleInfoChange={handleInfoChange}
        />
      </View>
      <View style={styles.questionContainer}>
        <FlatList
          data={currentSet.questions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* // <AddNewQuestion /> */}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
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
});

export default connect(mapStateToProps)(EditSetScreen);
