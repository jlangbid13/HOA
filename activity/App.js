import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Pressable, TouchableOpacity, Modal } from 'react-native';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [isWelcomeModalVisible, setWelcomeModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (courseGoals.length > 5) {
      setIsModalVisible(true);
    } else {
      setIsModalVisible(false);
    }
  }, [courseGoals]);

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

  function toggleWelcomeModal() {
    setWelcomeModalVisible(!isWelcomeModalVisible);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={toggleWelcomeModal} style={styles.iconContainer}>
          <AccountCircleIcon name="AccountCircleIcon" color="#000" />
        </TouchableOpacity>
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

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Too many Goals!</Text>
          <Pressable onPress={() => setIsModalVisible(false)} style={styles.wrapperCustom}>
            <Text style={styles.text}>Exit!</Text>
          </Pressable>
        </View>
      </Modal>

      <Modal
        visible={isWelcomeModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.welcomeModalContent}>
            <Text>Ninjas in Pajamas</Text>
            <TouchableOpacity onPress={toggleWelcomeModal}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
    backgroundColor: '#FFF5E0',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
    marginLeft: 30,
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
    width: '80%',
    height: 'auto',
    borderRadius: 10,
  },
  goalContainer: {
    width: 382,
    height: 200,
    padding: 5,
    fontSize: 20,
    color: 'orange',
    borderWidth: 5,
    borderColor: '#D8EACCD',
    borderRadius: 10,
    marginBottom: 50,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF8080',
    marginBottom: 16,
    textAlign: 'center',
  },
  goal: {
    fontSize: 22,
    marginBottom: 8,
    color: '#FF8080',
    textAlign: 'center',
  },
  goalsListedContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#DBC4F0',
    shadowColor: 'rgba(255, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  goalsListedStyle: {
    fontSize: 18,
    marginBottom: 8,
    color: 'black',
  },
  pressContainer: {
    backgroundColor: '#D4E2D4',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  pressText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
  },
  welcomeModalContent: {
    backgroundColor: '#D4E2D4',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 150, // Adjust the width as needed
    maxHeight: 150, // Adjust the maximum height as needed
  },
});
