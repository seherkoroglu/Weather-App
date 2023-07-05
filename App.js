/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useCallback} from 'react';
import {View, Text, Image} from 'react-native';
import {ImageBackground, StyleSheet, ActivityIndicator, TextInput} from 'react-native';
import axios from 'axios';
import {Dimensions} from 'react-native';
import styles from './style';

const App = () => {
const [input, setInput] = useState('');
const [loading, setLoading] = useState(false);
const [data, setData] = useState([]);
const celsius = Math.round(data?.main?.temp - 273.15);

const api = {
  key: '781eae4aaa8813044ba4381e2a058c70',
  baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
};
const fetchDataHandler = useCallback(() => {
  setLoading(true);
  setInput("");
  axios({
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api.key}`,
  })
  .then(response => {
    console.log(response.data);
    setData(response.data);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    setLoading(false);
  }
  );
},
[api.key, input]);
  return (
  <View style = {styles.root}> 
  <ImageBackground source={require('./assets/sky.jpeg')} resizeMode="cover"
  style={styles.image}>
  
    <View style={{paddingTop: Dimensions.get('window').width / 5, }} >
    <TextInput placeholder="Enter city name and press return..."
    onChangeText={text => setInput(text)}
    value={input}
    style={styles.textInput}
    palceholderTextColor={'#000'}
    onSubmitEditing={fetchDataHandler}
     />
    </View>
    {loading && (<View><ActivityIndicator size="large" color="#000" /></View>)}

    {data && (
      <View style={styles.infoView}>
        <Text style={styles.cityCountryText}>
          {`${data?.name}, ${data?.sys?.country}`}
        </Text>
        <Text style={styles.dateText}>{new Date().toLocaleString()}</Text>
        <Text style={styles.tempText}>{`${celsius}°C`}</Text>
        <Text style={styles.feelsLikeText}>{`Feels like: ${Math.round(data?.main?.feels_like - 273.15)}°C`}</Text>
        <Text style= {styles.minMaxText}>{`Min: ${Math.round(data?.main?.temp_min - 273.15)}°C/ Max:${Math.round(data?.main?.temp_max - 273.15)}°C` }</Text>
        <Text style={styles.minMaxText}>{`Humidity: ${data?.main?.humidity}%`}</Text>
        <Text style={styles.minMaxText}>{`Wind: ${data?.wind?.speed}m/s`}</Text>
        <Text style={styles.minMaxText}>{`Visibility: ${data?.visibility / 1000}km`}</Text>

     </View>
    )}
    </ImageBackground> 
  </View>
  );
};

export default App;
