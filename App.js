import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      placeName: ''
    }

  }
      handleInputChange = (val) => {
        this.setState({
          placeName: val
        })
      }

      onPressLearnMore(){

      }
 

  render() {
    return (
      <View style={styles.container}>
         <TextInput value={this.state.placeName}
         placeholder="An Awesome Place"
        style={styles.inputBox}
        onChangeText={this.handleInputChange}
      />
      <Button
        // onPress={onPressLearnMore}
        title="Add"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        style={styles.buttonPlace}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputBox: {
    width: '90%'
  },
  placeButton: {
    width: '30%'
  }
});
