import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    root: {
      flex: 1,
    },  
    image: {
      flex: 1,
      flexDirection: "column", 
    },
    textInput: {
      borderBottomWidth: 3,
      margin: Dimensions.get('window').width / 10,
      padding: Dimensions.get('window').width / 80,
      paddingVertical: Dimensions.get('window').width / 70,
      marginVertical: Dimensions.get('window').width / 40,
      marginHorizontal: Dimensions.get('window').width / 30,
      paddingHorizontal: Dimensions.get('window').width / 90,
      fontSize: 19,
      borderRadius: 16,
      borderBottomColor: '#df8e00',
      backgroundColor: '#fff',
    },
  
    infoView: {
      alignItems: 'center',
    },
    cityCountryText: {
      paddingTop: Dimensions.get('window').width / 5,
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fff',
    },
    dateText: {
      paddingTop: Dimensions.get('window').width / 25,
      fontSize: 22,
     marginVertical: Dimensions.get('window').width / 45,
      color: '#fff',
    },
    tempText: {
      fontSize: 45,
      color: '#000',
      marginVertical: Dimensions.get('window').width / 30,
      marginHorizontal: Dimensions.get('window').width / 30,
    },
    minMaxText: {
      fontSize: 17,
      color: '#000',
      marginVertical: Dimensions.get('window').width / 30,
    },
    feelsLikeText: {
      fontSize: 17,
      color: '#000',
    },
  });

    export default styles;