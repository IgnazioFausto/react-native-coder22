import { View, StyleSheet, TextInput, Button } from 'react-native'
import { colors } from '../Styles/Colors';
import Item from '../components/Item';
import { useState } from 'react';
import Boton from '../components/Button';

const Layout = () => {

    const [input, setInput] = useState('');

    return (
        <View style={styles.container} >
            <View style={styles.topContainer}>
                <TextInput style={styles.input} placeholder="Add todo" onChangeText={setInput} value={input}/>
                <Boton title="Add todo"/>
                </View>
            <View style={styles.itemList}>
                <Item item = {{id:1, todo: 'Buy milk'}}></Item>
                <Item item = {{id:1, todo: 'Sell food'}}></Item>
                <Item item = {{id:1, todo: 'Make a great food'}}></Item>
                <Item item = {{id:1, todo: 'Remember you todo list!'}}></Item>
                <Item item = {{id:1, todo: 'Take a walk with sisi and tishi'}}></Item>
            </View>
        </View>
    )
}

export default Layout;

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    input: {
        borderRadius: 8,
        borderWidth: 2,
        width:'40%',
        marginRight: 10,
        paddingHorizontal: 8,
    },
    itemList: {
        backgroundColor: colors.white,
        borderRadius: 8,
        borderWidth: 1,
        width: '100%',
        marginTop: 20,
    },
})