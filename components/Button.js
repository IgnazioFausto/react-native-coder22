import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../Styles/Colors'

const Boton = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.boton} onPress={onPress} >

            <Text style={styles.texto}>
                Add todo
            </Text>
        </TouchableOpacity>
    )
}

export default Boton

const styles = StyleSheet.create({
    boton: {
        backgroundColor: colors.black,
        padding: 5,
        borderRadius: 8,
    },
    texto: {
        color: colors.white,
        padding: 1,
    }

})