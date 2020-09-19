import React , {useEffect , useState} from 'react'
import { View, Text , StyleSheet ,Image, ScrollView,Divider } from 'react-native'
import { WebView } from 'react-native-webview';
import axios from 'axios'
import moment from 'moment'


export default function movieDetail({ navigation , route }) {

    
    const [movies, setMovies] = useState({
        genre:[],      
    })
    

    useEffect(() => {
        const itemId = route.params.id
        axios.get(`https://movie-api.igeargeek.com/movies/${itemId}`)
            .then(res => {
            const movies = res.data;
            setMovies(movies);
            
        })
      }, []);

        return (
            <ScrollView
            showsVerticalScrollIndicator={false} 
            style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
                <WebView
                    allowsFullscreenVideo
                    source={{uri: movies.youtubeUrl}}
                    style={{height:200,}}
                />
                <View style={{flex:2, padding: 15, backgroundColor: '#362420'}}>
                    
                    <View style={{flexDirection:'row'}}>
                        <Image source={{uri : movies.posterUrl}} 
                        style={{ flex:1, height: 180, }} 
                        resizeMode={'stretch'}
                        />
                        <View style={{ flex:2,marginLeft: 15 }}>
                            <Text 
                            style={{
                                color:"white",
                                fontSize: 18,
                                lineHeight:27,
                            }}
                            > {movies.name} </Text>
                            <Text
                            style={styles.textDetail}> ประเภท : {movies.genre.join(', ')} </Text>
                            <Text style={styles.textDetail}> 
                               วันที่เข้าฉาย : {moment(movies.showingAt).format('DD/MM/YYYY') } 
                            </Text>
                            <Text style={styles.textDetail}> 
                               ระยะเวลา : { movies.duration } นาที
                            </Text>

                        </View>                      

                    </View>

                    <View style={{borderBottomColor:'white' , borderBottomWidth : 0.3 , marginVertical : 15,}}></View>

                        <View style={{flex: 1, }} >
                            <Text style={{color:"white",
                            fontSize: 12,
                            lineHeight:27,}}>
                            {movies.description} 
                            </Text>

                        </View>

                    </View>

            </ScrollView>
        )
    }
    const styles = StyleSheet.create({
       textDetail:{
        color:"white",
        fontSize: 10,
        lineHeight:27,
       }            
      
     })
     
 
 
