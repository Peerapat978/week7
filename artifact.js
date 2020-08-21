import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

export default function App() {
  return(
    <View style={styles.container}>
      <Text style={styles.t1}
      >I Love My Cat</Text>
      <Text style={styles.t2}
      >Career of React Native</Text>
      <Image
        style={{width:370,height:200}}
        source={{uri:'https://static.posttoday.com/media/content/2016/08/19/2F6BF22F88FD4973965FF930EB67BBA6_1000.jpg'}}
      />
      <Image
        style={styles.image} 
        source={require('./assets/pyagon.png')}
      />
    </View>
  )
}


  const styles=StyleSheet.create({
    container:{
      alignItems:'center',
      alignContent:'center',
      flex:1,
    },
    t1:{
      fontSize:10,
      fontWeight:'bold',
      color:'red',
      backgroundColor:'orange',
      padding:20,
      margin:20,
    },
    t2:{
      fontSize:10,
      fontWeight:'bold',
      color:'red',
      backgroundColor:'orange',
      padding:20,
      margin:20,
    },
    image:{
      width:370,height:200
    },
})

