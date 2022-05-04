import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../Styles/Colors';

const CustomModal = ({
    modalVisible,
    setModalVisible,
    handleEdit, 
    todoSelected, 
    handleDelete,
}) => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modalContainer}>
                <View style={styles.content}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={styles.close}>
                            X
                        </Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleEdit}
                        value={todoSelected.todo}
                    />
                    <TouchableOpacity onPress={handleDelete}>
                        <Text style={styles.delete}>Eliminar tarea</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        height: 200,
        width: 300,
        justifyContent: 'space-around',
        borderRadius: 8,
        backgroundColor: colors.pink
    },
    input: {
        borderRadius: 8,
        borderColor: colors.primary,
        borderWidth: 2,
        width: 200,
        marginRight: 10,
        paddingHorizontal: 8,
        color: colors.white,
        fontSize: 22,
        height: 35,
        alignSelf: 'center',
        backgroundColor: colors.pink
    },
    close: {
        fontSize: 22,
        alignSelf: 'flex-start',
        color: colors.white,
        paddingStart:25,
    },
    delete: {
        fontSize: 18,
        color: colors.white,
        alignSelf: 'center',
    }
})