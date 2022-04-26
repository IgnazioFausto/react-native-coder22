import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/Colors'

const Item = ({item}) => {
  return (
    <View style={styles.Itemcontainer}>
      <Text style={styles.text}>{item.todo}</Text>
    </View>
  )
}

export default Item;

const styles = StyleSheet.create({
    Itemcontainer: {
        backgroundColor: colors.white,
        padding: 10,
    },

    text: {
        color: colors.brown,
        borderBottomColor: colors.brown,
        borderBottomWidth: 1,

    }

})