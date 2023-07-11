import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({submitHandler}){
const [todo, setTodo] = useState('')

    const handleChange = (val) => {
        setTodo(val)
    }
    return (
        <View>
            <TextInput style={styles.input} placeholder="new todo..." onChangeText={handleChange}/>
            <Button onPress={() => submitHandler(todo)} title='Add Todo' color='#212529'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#6c757d',
    }
})