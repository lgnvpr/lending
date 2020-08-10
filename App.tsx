import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import myStyle from "./src/style"
import Login from './src/components/Login';

import Home from './src/screen/Home';
export default function App() {
  return (
    <View style = {myStyle.container}>
        {/* <Login></Login> */}
        <Home></Home>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : "orange",
    justifyContent : "center",
    alignItems : "center"
  },
});
