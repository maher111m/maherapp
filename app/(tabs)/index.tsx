import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>maher</Text>
      <Text style={styles.txt}>28.10.2008</Text>
     <Text style={styles.txt}>....</Text>
     <Card name="1m1" years="2008"/>

    </View>


  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1 ,
    backgroundColor:'green' ,
    paddingTop: 260
  },
  txt:{
    fontSize: 40 ,
    marginLeft: 100 ,
  }
})
