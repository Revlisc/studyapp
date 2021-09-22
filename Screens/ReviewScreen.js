import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, PanResponder, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';
import { connect } from 'react-redux';
//import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import ReviewCard from '../Components/ReviewCard';
import { TouchableOpacity } from 'react-native';

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});

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
  //const [gestureName, setGestureName] = useState('')
  const route = useRoute();
  const { itemId } = route.params;
  //filter out set being edited from all sets
  let currentSet = userData.filter((set) => set.id === itemId)[0];
  //const current = currentSet.questions[index]

  const wrong = [];
  const correct = [];

  const max = currentSet.questions.length / currentSet.questions.length

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

  console.log('current set is', currentSet)
  let current = currentSet.questions.filter((question, idx) => {
    if (idx + 1 === index) {
      return question;
    }
    return null;
  });
  console.log(current);
  console.log(index);

  const views = React.createRef();
  const rightDrag = ({dx}) => (dx < -200) ? true : false;
  const leftDrag = ({dx}) => (dx > 200) ? true : false;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderEnd: (e, gestureState) => {
      if (rightDrag(gestureState)) {
        showNextCard();
      } else if (leftDrag(gestureState)) {
        showPrevCard();
      }
      return true;
    }
  })

  const Alert = () => {
    Alert.alert(
      'Swipe to Scroll!'
    )
  }

  // let percentage = correct / currentSet.questions.length;
  // console.log('correct is ', correct)
  // console.log('length is ', currentSet.questions.length)
  // console.log('percentage is', percentage)
  return (
    <View style={styles.reviewContainer} ref={views} {...panResponder.panHandlers}>
      
      <Text style={styles.setNameTitle}>{currentSet.setName}</Text>
      <Text style={styles.setDescriptionTitle}>Swipe to Study!</Text>

      {current.map((question) => {
        return (
          <ReviewCard
            
            index={index}
            key={question.id}
            text={flipped ? question.answer : question.question}
            onPress={() => setFlip(!flipped)}
          />
        );
      })}
      
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.addIncorrect}
          
          onPress={() => {
            addIncorrect();
          }}
        >
          <Icon name='times-circle' size={60} color={'red'} type='font-awesome' />
        </TouchableOpacity>

        {/* <TouchableOpacity 
          style={styles.showPrevCard}
          onPress={() => {
            showPrevCard();
            setFlip(false)
          }}
        >
          <Icon name='arrow-left' type='font-awesome'/>
        </TouchableOpacity> */}
        <View >
          <Text>{index} / {currentSet.questions.length}</Text>
        </View>
        {/* <TouchableOpacity 
          style={styles.showNextCard}
          onPress={() => {
            showNextCard();
            setFlip(false)
          }}
        >
          <Icon name='arrow-right' type='font-awesome'/>
        </TouchableOpacity> */}
        
        <TouchableOpacity
          title={<Icon name='check-square' type='font-awesome' />}
          style={styles.addCorrect}
          disabled={percent > max ? true : false}
          onPress={() => {
            addCorrect();
          }}
        >
          <Icon name='check-square' size={60} color={'green'} type='font-awesome' />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.percentageContainer}>
          <Percentage percent={percent} length={currentSet.questions.length} />
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: "#F5F8FF",
    height: "100%",
    
  },
  setNameTitle: {
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 5,
    borderRadius: 2,
    textAlign: 'center',
    marginHorizontal: 35,
    fontSize: 24,
    marginTop: '5%'
  },
  setDescriptionTitle: {
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 20,
    fontSize: 16
  },
  addCorrect: {
    width: 'auto',
    color: 'green',
    marginLeft: 50
    
  },
  addIncorrect: {
    marginRight: 50
  },  
  buttonRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    
  },
  percentageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%'
  },
  
});

export default connect(mapStateToProps)(ReviewScreen);