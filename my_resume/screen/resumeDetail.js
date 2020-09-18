import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { StyleSheet , View , Text } from 'react-native'

export default (props) => {
    const [resume , setResume] = useState({
        name : '',
        nickName: '',
        age : '',
        skill : '',    
    })

    useEffect(() => {
        const id = props.route.params.id
        axios.get('https://movie-api.igeargeek.com/users/profile/' + id)
        .then((res) => {
            console.log('res', res.data)
            setResume(res.data)
        }).catch((error) => {
            console.log('error' , error)
        })
    },[])
    return(
        <View style={styles.container} >
            <View style={styles.texLine}>
                <Text>Full Name : {resume.name} </Text>
            </View>
            <View style={styles.texLine}>
                <Text>Nickname : {resume.nickName} </Text>
            </View>
            <View style={styles.texLine}>
                <Text>Age : {resume.age} </Text>
            </View>
            <View style={styles.texLine}>
                <Text>Skill : {resume.skill} </Text>
            </View>
        </View>
    )   
}
const styles = StyleSheet.create({
    container:{
        padding: 30 ,
        backgroundColor: 'white'
    },
    texLine:{
        marginBottom: 20 ,
        
    },
})