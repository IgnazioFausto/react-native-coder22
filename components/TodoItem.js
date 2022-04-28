import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/Colors'

const TodoItem = ({ todo, onPress }) => {
  return (
    <View style={styles.Itemcontainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{todo.todo}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TodoItem;

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