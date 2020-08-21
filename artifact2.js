import React from 'react'
import { View, Text,StyleSheet, Image, Button } from 'react-native'
export default class App extends React.Component{
      state={
        headline:'Spider Man',
        count:1,
      }
      updateState=()=>{
          this.setState({
          headline:'TWICE',
          })
    }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.headline}{this.state.count++}</Text>
        <Image style={styles.box1}
           source={{
             uri:'https://wallpaper.thaiware.com/upload/wallpaper/2012_05/medium/1_10844_120528104504_5e.jpg',
           }}></Image>
           <Button 
              onPress={this.updateState}
              title="IU"
              color="pink"
           />
      </View>
    )
  }
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fonSize:15,
    fontWeight:'bold',
    color:'red',
  },
  box1:{    
    width:400,
    height:400,
  },
})