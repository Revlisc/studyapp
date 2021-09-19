import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, PanResponder } from 'react-native';
import { Icon } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const mapStateToProps = (state) => ({
  userData: state.userData.userData
})

const Percentage = ({ percent, length }) => {
  let value = Math.floor((percent / length) * 100);
  console.log("current is", percent);
  console.log("length is", length);
  console.log("value is", value);
  return (
    <View>
      <Text>You know {value}% of the set!</Text>
    </View>
  );
};



const ReviewScreen = ({ userData }) => {
  const [flipped, setFlip] = useState(false);
  const [index, setIndex] = useState(1);
  const [percent, setPercent] = useState(0);
  const [gestureName, setGestureName] = useState('')
  const route = useRoute();
  const { itemId } = route.params;
  //filter out set being edited from all sets
  let currentSet = userData.filter((set) => set.id === itemId)[0];
  //const current = currentSet.questions[index]

  const wrong = [];
  const correct = [];

  function showPrevCard() {
    if (index - 1 > 0) {
      let newIndex = index;
      newIndex--;
      console.log(newIndex);
      setIndex(newIndex);
    }
  }

  function showNextCard() {
    if (index + 1 <= currentSet.questions.length) {
      let newIndex = index;
      newIndex++;
      console.log(newIndex);
      setIndex(newIndex);
    }
  }

  function addCorrect() {
    correct.push(index);
    console.log(correct);
    setPercent(percent + 1);
  }

  function addIncorrect() {
    wrong.push(index);
    console.log(wrong);
  }


  let current = currentSet.questions.filter((question, idx) => {
    if (idx + 1 === index) {
      return question;
    }
    return null;
  });
  console.log(current);
  console.log(index);

  // let percentage = correct / currentSet.questions.length;
  // console.log('correct is ', correct)
  // console.log('length is ', currentSet.questions.length)
  // console.log('percentage is', percentage)
  return (
    <View>
      <Text className="reviewTitle">Review Set</Text>
      <Text className="reviewCurrTitle">{currentSet.setName}</Text>
      <Text className="reviewCurrWords">{currentSet.description}</Text>

      {current.map((question) => {
        return (
          <ReviewCard
            className="flashcard"
            index={index}
            key={question.id}
            text={flipped ? question.answer : question.question}
            onClick={() => setFlip(!flipped)}
          />
        );
      })}
      
      <View className="reviewButtons">
        <Button
          className="reviewWrong"
          onClick={() => {
            addIncorrect();
          }}
        >
          <Icon name='times-circle'  type='font-awesome' />
        </Button>
        
        <View className="questionProgress">
          <Text>{index} / {currentSet.questions.length}</Text>
        </View>
        <Button
          className="reviewCorrect"
          onClick={() => {
            addCorrect();
          }}
        >
          <Icon name='check-square' type='font-awesome' />
        </Button>
      </View>
      <View>
        <View className="correctProgress">
          <Percentage percent={percent} length={currentSet.questions.length} />
        </View>
      </View>
    </View>
  );
};

// const Views = () => {
//   const rightDrag = ({dx}) => (dx < -200) ? true : false;

//   const panResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onPanResponderEnd: (e, gestureState) => {
//       if (rightDrag(gestureState)) {
//         let newIndex = index
//         newIndex++
//         setIndex(newIndex)
//       }
//     }
//   })
// }

export default ReviewScreen;