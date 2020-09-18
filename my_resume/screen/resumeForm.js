import React from 'react'
import ValidationComponent from 'react-native-form-validator'
import { View, StyleSheet ,Text , TextInput , Button } from 'react-native'


export default class ResumeForm extends ValidationComponent{

    state = {
        name : '',
        nickName: '',
        age : '',
        skill : '',    
    }

    _onSubmit = () => {
        this.validate({
            name : { required : true },
            nickName: { required : true },
            age : { required : true, numbers: true },
            skill : { required : true },   
        })
    }


    render(){
        return (
        <View style={styles.container} >
            <View>
                <Text>Full name</Text>
                <TextInput 
                onChangeText={(text) => this.setState({name: text})}
                value={this.state.name}
                style={styles.textInput}
                >
                </TextInput>
            </View>

            <View style={{marginTop : 10 ,}}>
                <Text>Nick name</Text>
                <TextInput 
                onChangeText={(text) => this.setState({nickName: text})}
                value={this.state.nickName}
                style={styles.textInput}
                >
                </TextInput>
            </View>

            <View style={{marginTop : 10 ,}}>
                <Text>Age</Text>
                <TextInput 
                onChangeText={(text) => this.setState({age: text})}
                value={this.state.age}
                style={styles.textInput}
                >
                </TextInput>
            </View>

            <View style={{marginTop : 10 ,}}>
                <Text>Skill</Text>
                <TextInput 
                onChangeText={(text) => this.setState({skill: text})}
                value={this.state.skill}
                multiline={true}
                style={styles.textAreaInput}
                >
                </TextInput>
            </View>

            <View style={styles.containerButton}>
                <Button
                title='Create Resume'
                onPress={this._onSubmit}               
                />
            </View>

            <View>
                <Text style={styles.errorMessages}>
                    {this.getErrorMessages()}
                </Text>
            </View>

            


        </View>
    
        )
    }
}
const styles = StyleSheet.create({
    container:{
        padding: 30 ,
        backgroundColor: 'white ',
        minWidth : '100%'
    },
    textInput:{
        height : 40 ,
        borderColor: 'gray',
        borderWidth : 1 ,
        marginTop: 5,
        
    },
    textAreaInput:{
        height: 150,
        borderColor: 'gray',
        borderWidth : 1 ,
        marginTop: 5,
    },
    containerButton:{
        marginTop : 30,
        alignItems: 'center',
        justifyContent: 'center', 
        
    },
    errorMessages:{
        color: 'red',
        marginTop: 20 ,
    }
    
})
