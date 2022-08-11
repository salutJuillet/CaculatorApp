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

        <View style={st.buttonContainer}>
            <View style={st.column}>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text>C</Text>
                    </View>
                </TouchableOpacity>
            <TouchableOpacity style={[st.button, st.flex1]}>
                <View>
                    <Text>지우기</Text>
                </View>
            </TouchableOpacity>
            </View>
            
            <View style={st.column}>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text>7</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text>8</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text>9</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text>÷</Text>
                    </View>
                </TouchableOpacity>
            </View>
            

            <View style={st.column}>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text>4</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text>5</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text>6</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text>×</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={st.column}>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text>1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text>2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text>3</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text>－</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={st.column}>
                <TouchableOpacity style={[st.button, st.flex1]} disabled>
                    <View>
                        <Text></Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text>0</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text>＝</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[st.button, st.flex1]}>
                    <View>
                        <Text>＋</Text>
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
        borderWidth:1,
        height:200,
        alignItems:'flex-end'
    },
    formula:{
        fontSize:50
    },
    result:{
        fontSize:80
    },
    buttonContainer:{
        borderWidth:1
    },
    column:{
        borderWidth:1,
        flexDirection:'row',
        height:90,
        
    },
    button:{
        borderWidth:1,
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },


    flex1:{
        flex:1
    }
})

export default Caculator