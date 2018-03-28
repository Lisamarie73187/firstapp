import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput";
import PlaceList from "./src/components/PlaceList";

export default class App extends Component {
  state = {
    places: []
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  deleteHandler = index => {
    this.setState( prevState => {
      return {
        places: prevState.places.filter((place,i) => {
          return i !== index;
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} deleteItem={this.deleteHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});


// export PATH="/Users/lisaherzberg/Library/Android/sdk/platform-tools":$PATH