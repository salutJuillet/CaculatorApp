import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Buttons = ({title, type, onPress, darkmode}) => {

  const buttonStyles = [darkmode ? st.buttonDark : st.button, st.flex1];
  const textStyles = [darkmode ? st.numberDark : st.number];

  if(title === "="){
    textStyles.length = 0;
    buttonStyles.push(st.buttonEqual);
    buttonStyles.push(st.flex1);
  }

  if(type === "number"){
    textStyles.length = 0;
    textStyles.push(darkmode ? st.numberDark : st.number);
  } else if(type === "operator" || type === "equal" || type === "posneg" || type === "percentage"){
    textStyles.length = 0;
    textStyles.push(st.operator);
  } else if(type === "clear"){
    textStyles.length = 0;
    textStyles.push(st.clear);
  } else if(type === "delete"){
    textStyles.length = 0;
    textStyles.push(st.delete);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
        <View>
            {
                type === 'delete' ? <Icon style={textStyles} name="backspace" /> : <Text style={textStyles}>{title}</Text>
            }
        </View>
    </TouchableOpacity>
  )
}

const st = StyleSheet.create({
    button:{
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        height:80,
        borderRadius:42,
        backgroundColor:'#c7dff7',
        margin:8,
        elevation:4
    },
    buttonDark:{
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        height:80,
        borderRadius:42,
        backgroundColor:'#5a8fc1',
        margin:8,
        elevation:4
    },
    buttonEqual:{
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        height:80,
        borderRadius:42,
        backgroundColor:'#d68a8a',
        margin:8,
        elevation:3
    },
    number:{
        color:'#5a8fc1',
        fontSize:30,
        fontWeight:'500'
    },
    numberDark:{
      color:'#ffffff',
      fontSize:30,
      fontWeight:'500'
  },
    operator:{
        color:'#ffffff',
        fontSize:30,
        fontWeight:'700'
    },
    clear:{
        color:'#8eceac',
        fontSize:30,
        fontWeight:'700'
    },
    delete:{
        color:'#e2aaa9',
        fontSize:35,
        fontWeight:'700'
    },


    flex1:{
        flex:1
    }
})

export default Buttons