import { View, StyleSheet, Text } from 'react-native'
import { useState } from 'react';
import Header from '../components/Header';
import Lista from '../components/Lista';
import CustomModal from '../components/Modal';
import { colors } from '../Styles/Colors';
import Boton from '../components/Button';
const Layout = () => {


    const [todoList, setTodoList] = useState([]);
    const [todoSelected, setTodoSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const handleAdd = (input) => {
        {
            setTodoList([...todoList, { id: Date.now(), todo: input }]);
        }
    }

    const DeleteAll = () => {
        setTodoList([]);
    }

    const handleModal = (todoSelected) => {
        setModalVisible(true);
        setTodoSelected(todoSelected);
    }

    const handleDelete = () => {
        const todosFiltrados = todoList.filter(item => item !== todoSelected);
        setTodoList(todosFiltrados);
        setModalVisible(false);
    }

    const handleEdit = (text) => {
        const todoToEdit = todoList.find(todo => todo.id === todoSelected.id);
        // const todoListFiltered = todoList.filter(todo => todo.id !== todoSelected.id)
        todoToEdit.todo = text
        const todoAux = []
        todoList.forEach((item) => {
            todoAux.push(item)
        })
        setTodoList(todoAux)

    }


    return (
        <View style={styles.container}>
            <Header handleAdd={handleAdd} />
            {todoList.length !== 0 && (
                <>
                    <Boton onPress={ () => DeleteAll()} title="Eliminar todo" ></Boton>
                    <Text style={styles.tareas}>Tareas</Text>
                </>
                )
            }
            <Lista handleModal={handleModal} todoList={todoList} />
            <CustomModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                todoSelected={todoSelected}
            />
        </View>
    )
}

export default Layout;

const styles = StyleSheet.create({
    container: {
        padding: 0,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 0,
        height: '100%',
        backgroundColor: colors.primary,
    },
    tareas: {
        color: colors.pink,
        fontSize: 30,
        marginTop: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textDecorationColor: colors.white,
        textAlign: 'center',
    }

})