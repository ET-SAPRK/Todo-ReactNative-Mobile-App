import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'

const Header = ({handleClear}) => {
  return (
    <View style={styles.HeaderView}>
        <Text style={styles.HeaderTitle}>Todos</Text>
        <TouchableOpacity style={styles.HeaderButtom}
          onPress={handleClear}
        >
        <Entypo name='trash' size={25} color= "#E6E6E6"/>
        </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    HeaderView: {
      paddingVertical: 10,  
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    HeaderTitle: {
      fontSize: 35,
      fontWeight: "bold",
      color:  "#E6E6E6",
      letterSpacing: 2,
      fontStyle: "italic",  
    },
    HeaderButtom: {
      fontWeight: 'bold',
      color: "#E6E6E6",  
    },
  });