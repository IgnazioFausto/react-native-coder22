import { View, StyleSheet, TextInput, Text, FlatList, Modal, TouchableOpacity } from 'react-native'
import { colors } from '../Styles/Colors';
import TodoItem from '../components/TodoItem';
import { useState } from 'react';
import Boton from '../components/Button';

const Layout = () => {

    const [input, setInput] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [idSelected, setIdSelected] = useState('');

    const handleAdd = () => {
        setTodoList([...todoList, { id: Date.now(), todo: input }]);
        setInput('');
    }

    const renderTodo = ({ item }) => <TodoItem onPress={()=> handleModal(item.id)} todo={item}></TodoItem>

    const handleModal = (id) => {
        setModalVisible(true);
        setIdSelected(id);
    }

    const handleDelete = () => {
        const todosFiltrados = todoList.filter(todo => todo.id !== idSelected);
        setTodoList(todosFiltrados);
        setModalVisible(false);
    }


    return (
        <View style={styles.container} >
            <View style={styles.topContainer}>
                <TextInput style={styles.input} placeholder="Add todo" onChangeText={setInput} value={input} />
                <Boton title="Add todo" onPress={handleAdd} />
            </View>
            <View style={styles.itemList}>
                {todoList.length !== 0 ?
                    <FlatList
                        data={todoList}
                        keyExtractor={todo => todo.id}
                        renderItem={renderTodo}
                    />
                    :
                    <Text>NO hay items aún</Text>}

            </View>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }
                }>

                <View styles={styles.modalContainer}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={styles.textoModal}>
                            X
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDelete}>
                        <Text style={styles.textoModal}>Eliminar tarea</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
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
        marginTop: 50,
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
        width: '40%',
        marginRight: 10,
        paddingHorizontal: 8,
    },
    itemList: {
        backgroundColor: colors.white,
        borderRadius: 8,
        borderWidth: 1,
        width: '100%',
        marginVertical: '60%',
        marginTop: 20,
    },
    modalContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoModal: {
        color: colors.black,
        fontSize: 30,
    }
})