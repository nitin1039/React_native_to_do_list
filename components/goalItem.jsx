import React from "react";
import {View, Text, Pressable, StyleSheet} from 'react-native'
const GoalItem=({proplist,onDelete})=>{
    return <View style={Styles.goalItem}>
       <Pressable
       style={({pressed})=>pressed && Styles.pressedItem}
       android_ripple={{color: "#210644"}}
    //    onPress={()=>onDelete(proplist.id)}
       
       >
        <Text style={Styles.textColor} key={proplist.id}>{proplist.goal} </Text>
        </Pressable>
        <View style={Styles.btn}>
        <Text style={Styles.btn1} >Edit</Text>
        <Pressable onPress={()=>onDelete(proplist.id)}><Text style={Styles.btn1}>Delete</Text></Pressable>
        </View>
        </View>
}
export default GoalItem
const Styles=StyleSheet.create({
    goalItem:{
        margin: 8,
        borderRadius:6,
        backgroundColor: '#7c9ff7',
        elevation: 9,
        height: 110
    
    },
    textColor:{
        color: '#fff',
        fontSize: 20,
        padding: 8
    },
    pressedItem:{
        opacity: 0.5
    },
    btn:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop: 20
    },
    btn1:{
        backgroundColor:"#95baf7",
        padding: 10,
        fontSize: 15,
        marginBottom: 6,
        borderRadius: 7,
        elevation:9,
        width: 90,
        textAlign:"center"
        // marginHorizontal: 29
    }
})