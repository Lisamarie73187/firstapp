import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';

const placeList = props => {
    const placesOutput = props.places.map((place, i) => (
        <ListItem key={i} 
            placeName={place} 
            onItemPressed ={ () => props.deleteItem(i)}/>
      ));
    return (
        <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default placeList;