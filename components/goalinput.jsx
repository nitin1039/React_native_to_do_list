import React, { useState } from "react";
import { View,Text, TextInput, StyleSheet, Image, Button, Modal } from "react-native";
const GoalInput=({visible, onCancel, onAdd})=>{
    const [goal, setgoal]=useState("")
    return <Modal 
    animationType="slide"
    visible={visible}
    >
    <View style={Styles.input}>
        <Image  
        source={require("../assets/goal.png")}
        style={Styles.image}
        />
        <TextInput value={goal} onChangeText={Text=>setgoal(Text)} placeholder="Enter your goal..." style={Styles.text} />
        <View style={Styles.buttonCotainer}>
            <View style={Styles.button}>
        <Button title="Cancel" color={'#f31282'} onPress={onCancel}/>
        </View>
        <View style={Styles.button}>
        <Button title="Add" color={'#b180f0'} onPress={()=>{
            onAdd(goal)
            setgoal('')
        }}/>
        </View>
        </View>
    </View>
    </Modal>  

}
export default GoalInput
const Styles=StyleSheet.create({
    input:{
        justifyContent:"center",
        alignItems:"center",
        padding: 16,
        backgroundColor: "#311b6b",
        backgroundColor: "#2b80ff",
        flex: 1,
    },
    image:{
        width: 150,
        height: 150,
        margin: 20,
        
    },
    text:{  
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        width: '100%',
        padding: 16,
        fontSize: 20
    },
    buttonCotainer:{
        flexDirection:"row",
        marginTop: 16,
          
    },
    button:{
        width: 100,
        marginHorizontal: 8,
    }
     
})