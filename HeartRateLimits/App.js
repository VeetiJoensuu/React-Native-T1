import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

const App = () => {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState('');

  const calculateLimits = () => {
    const ageNum = parseInt(age);
    const lower = (220 - ageNum) * 0.65;
    const upper = (220 - ageNum) * 0.85;
    setLimits(`${lower.toFixed(0)} - ${upper.toFixed(0)}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your age"
          keyboardType="numeric"
          value={age}
          onChangeText={text => setAge(text)}
        />
        <Text style={styles.label}>Limits</Text>
        <Text style={styles.limits}>{limits}</Text>
      </View>
      <Button title="Calculate" onPress={calculateLimits} />
    </SafeAreaView>
  );
};

export default App;
