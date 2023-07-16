import { useState } from "react";
import { FlatList, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import AddTodo from "./components/addTodo";
import Header from "./components/header";
import Sandbox from "./components/sandbox";
import TodosItem from "./components/todosItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodo) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodo];
      });
    } else {
      Alert.alert("Oops", "Todos must be over 3 char long", [
        {
          text: "Understood",
          onPress: () => console.log("alert Closed"),
        }
      ]);
    }
  };

  return (
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodosItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    padding: 30,
  },
  list: {
    marginTop: 20,
  },
});
