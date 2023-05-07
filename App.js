import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, FlatList, Pressable, ScrollView, Alert} from "react-native";
import GoalInput from "./components/goalinput";
import GoalItem from "./components/goalItem";

const App=()=>{
    const [list,setlist]=useState([]);
    const [Visible,setvisible]=useState(false)
    
    const onAddHandler=(getgoal)=>{
    //     if(getgoal.le.ngth!==0){
    //     setlist(prev=>[...prev,{id: Date.now(),goal: getgoal}]);
    //     setgoal("")
    // }
    if(getgoal.length!==0){
         setlist(prev=>[...prev,{id:Date.now(), goal: getgoal}])
    }
    else{
        Alert.alert("Invalid Input","Please Enter some Goal",[
             {text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
             {text: 'OK', 
             onPress: () => console.log('OK Pressed')},
           ]);
         }
    setvisible(false)
    }
    const onDeleteHandler=(id)=>{
        setlist(prev=>prev.filter(state=>state.id!==id))
    }   

    const onVisible=()=>{  
        setvisible(true);
    }

    // const [ width, setwidth] = useState(Dimensions.get("window").width);
    return <>
  
    <View style={Styles.container}>
        <Button title="Add Goal" onPress={onVisible}/>
        <GoalInput visible={Visible} onCancel={setvisible} onAdd={onAddHandler}/>
        <FlatList style={Styles.delist}
        data={list}
        renderItem={(itemData)=><GoalItem proplist={itemData.item} onDelete={onDeleteHandler}  />}
       keyExtractor={(item,idx)=>idx.toString()}
       />
    </View>
    {/* <View style={Styles.delist}>
        <ScrollView>        
            {list.map((li,idx)=> <GoalItem proplist={li} key={li.id}/> )}
       </ScrollView>
      

    </View> */}
    </>
}
export default App
const Styles=StyleSheet.create({
    container:{
        flex: 1,
        padding: 50,
        backgroundColor: "#95baf7",
        
   
    },
    
    delist:{
        marginTop: 50,
    }
})
