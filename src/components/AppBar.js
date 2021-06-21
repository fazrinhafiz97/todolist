import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../assets/colors/colors";

export default function AppBar(){
  return (
    <View style={styles.appBar}>
      <Text style={styles.heading}>Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: colors.red,
    color: colors.white,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "400"
  }
});