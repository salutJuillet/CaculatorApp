import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

// const FormulaInput = (props) => {
//     return(
//         <TextInput {...props} editable maxLength={40} />
//     )
// }

const Caculator = () => {
  let n1 = '';
  let n2 = '';
  let operator = '';

  const [value, setValue] = useState('');

  const onPressNumber = (number) => {
    console.log(number);
  }


  return (
    <View style={st.container}>
        <View style={st.displayContainer}>
            {/* <FormulaInput style={st.formula}
                          multiline
                          numberOfLines={2}
                          onChangeText={(text) => onChangeText(Text)}
                          value={value}
            /> */}
            <TextInput style={st.result} />
        </View>

        <View style={st.seperator}></View>

        <View style={st.buttonContainer}>
            <View style={st.column}>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text style={st.operatorClear}>C</Text>
                    </View>
                </TouchableOpacity>
            <TouchableOpacity style={[st.button, st.flex1]}>
                <View>
                    <Text style={st.operator}>지우기</Text>
                </View>
            </TouchableOpacity>
            </View>
            
            <View style={st.column}>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text style={st.number}>7</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text style={st.number}>8</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text style={st.number}>9</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text style={st.operator}>÷</Text>
                    </View>
                </TouchableOpacity>
            </View>
            

            <View style={st.column}>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text style={st.number}>4</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text style={st.number}>5</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text style={st.number}>6</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text style={st.operator}>×</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={st.column}>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text style={st.number}>1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text style={st.number}>2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text style={st.number}>3</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text style={st.operator}>－</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={st.column}>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text style={st.operator}>.</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text style={st.number}>0</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.buttonEqual, st.flex1]}>
                    <View>
                        <Text style={st.operator}>＝</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text style={st.operator}>＋</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const st = StyleSheet.create({
    container:{
        
    },
    displayContainer:{
        height:160,
        alignItems:'flex-end'
    },
    formula:{
        fontSize:50
    },
    result:{
        fontSize:80
    },
    seperator:{
        width:'90%',
        borderWidth:0.5,
        alignSelf:'center',
        marginTop:20,
        marginBottom:20
    },
    buttonContainer:{
        padding:2
    },
    column:{
        flexDirection:'row',
        height:90,
        alignItems:'center'
    },
    button:{
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        height:80,
        borderRadius:42,
        backgroundColor:'#C7DFF7',
        margin:8,
        elevation:3
    },
    buttonEqual:{
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        height:80,
        borderRadius:42,
        backgroundColor:'hotpink',
        margin:8,
        elevation:3
    },
    number:{
        color:'blue',
        fontSize:30,
        fontWeight:'500'
    },
    operator:{
        color:'#ffffff',
        fontSize:30,
        fontWeight:'700'
    },
    operatorClear:{
        color:'green',
        fontSize:30,
        fontWeight:'700'
    },


    flex1:{
        flex:1
    }
})

export default Caculator