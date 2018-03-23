import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      placeName: '',
      places: ''
    }

  }
      handleInputChange = (val) => {
        this.setState({
          placeName: val
        })
      }

      handlePlaceSubmit = () => {
        if(this.state.placeName.trim() === ''){
          return;
        }
        this.setState(prevState => {
          return {
            places: prevState.places.concat(prevState.placeName)
          }
        })
      }
 

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <TextInput value={this.state.placeName}
          placeholder="An Awesome Place"
          style={styles.placeInput}
          onChangeText={this.handleInputChange}
          />
        <Button
          onPress={this.handlePlaceSubmit}
          title="Add"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          style={styles.buttonPlace}
        />
        </View>
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
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});
