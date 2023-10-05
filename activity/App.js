import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Pressable } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredtext) {
    setEnteredGoalText(enteredtext);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    setEnteredGoalText('');
  }

  function submitGoalHandler() {
    if (enteredGoalText.trim() !== '') {
      addGoalHandler();
    }
  }

  

  return (
    <View style={styles.appContainer}>
      <View>
        <Text style={styles.titleText}>Ninjas in Pajamas</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Your course goal!'
          style={styles.TextInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          onSubmitEditing={submitGoalHandler} 
        />




        





        <Pressable style={styles.pressContainer} onPress={addGoalHandler}>
        <Text style={styles.pressText}>Add Goal</Text>
        </Pressable>





        
      </View>

      <Text style={styles.goal}>List of Goals:</Text>
      <ScrollView style={styles.goalContainer}>
        {courseGoals.map((goal, index) => (
          <View key={index} style={styles.goalsListedContainer}>
            <Text style={styles.goalsListedStyle}>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: 'gray',
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,

    borderColor: '#cccccc',
    borderRadius: 10,
  },

  TextInput: {
    fontSize: 15,
    color: 'black',
    borderWidth: 2,
    marginRight: 10,
    padding: 5,
    width: '70%',
    borderRadius: 10,
  },

  goalContainer: {
    width: 382,
    height: 200,
    padding: 1,
    fontSize: 20,
    color: 'orange',
    borderWidth: 5,
    borderColor: 'pink',
    borderRadius: 5,
    marginBottom: 50,
  },

  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 16,
    textAlign: 'center',
  },

  goal: {
    fontSize: 22,
    marginBottom: 8,
    color: 'orange',
    textAlign: 'center',

  },

  goalsListedContainer: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
  },

  goalsListedStyle: {
    fontSize: 18,
    marginBottom: 8,
    color: 'black',
  },
  
  pressContainer: {
    backgroundColor: 'pink',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  
  pressText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
