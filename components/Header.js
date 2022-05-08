import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import ButtonCustom from './Button'
import { colors } from '../Styles/Colors';

const Header = ({handleAdd}) => {

    const [input, setInput] = React.useState("");

    const handleAddAux = () => {
        if (input !== ""){
            handleAdd(input)
            setInput("");
        }
    }

    return (
        <View style={styles.topContainer}>
            <TextInput
                style={styles.input}
                placeholder="Agregar tarea"
                onChangeText={setInput}
                value={input}
            />
            <ButtonCustom title="+" onPress={()=> handleAddAux()} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    topContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
        flex: 1,
    },
    input: {
        borderRadius: 8,
        borderWidth: 2,
        width: 200,
        marginRight: 10,
        paddingHorizontal: 8,
        fontSize: 18,
        height: 35,
        backgroundColor: colors.white,
        color: colors.black,
    },
})