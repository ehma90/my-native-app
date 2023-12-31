import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodosItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons  name="delete" size={18} color="#333" />
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#6c757d",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: 'row',
    gap: 9,
  },
});
