import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome @hugoosoul</Text>
        <Text style={styles.text}>React Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#84B1ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
  },
});
