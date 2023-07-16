import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text>Sandbox</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "#ddd",
  },
});
