import React from 'react'
import { Modal, StyleSheet, TextInput, TouchableOpacity, View,Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Inputmodel = ({
    modalVisible, 
    setModalVisible,
    todoInputValue,
    setTodoInputValue,
    handleAddTodo,
    todos
}) => {
    const colors = {
        primary: "#332424",
        secondary: "#4D3636",
        tertiary: "#E6E6E6",
        alternative: "#999999",
      };
      const handleCloseModel = () => {
        setModalVisible(false)
      }
      const handleSubmit = () => {
        handleAddTodo({
            title: todoInputValue,
            date: new Date().toUTCString(),
            key: `${(todos[todos.length-1] && parseInt(todos[todos.length -1].key) + 1)}`
        })
        setTodoInputValue("");
      }
  return (
    <>
        <TouchableOpacity style={styles.ModalButton}
            onPress={() => {setModalVisible(true)}}
        >
            <AntDesign name='plus' size={30} color="#4D3636" />
        </TouchableOpacity>
         <Modal 
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={handleCloseModel}
        />
       <View style={styles.ModalContainer}>
        <View style={styles.ModalView}>
            <View style={styles.ModalIcon}>
            <Text style={styles.HeaderTitle}>Todos</Text>
            <AntDesign name='edit' size={30} color={colors.tertiary} />
            </View>
        </View>
        <TextInput style={styles.StyledInput}
            placeholder="Add todo"
            placeholderTextColor={colors.alternative}
            selectionColor={colors.secondary}
            autoFocus={true}
            onChangeText={(text) => setTodoInputValue(text)}
            value={todoInputValue}
            onSubmitEditing={handleSubmit}
        /> 
        <View style={styles.ModalActionGroup}>
            {/* <TouchableOpacity style={styles.ModalAction} color={colors.primary}
                onPress={handleCloseModel}
            >
             <AntDesign name='close' size={28} color={colors.tertiary} />
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.ModalAction} color={colors.tertiary}
                onPress={handleSubmit}
            >
             <AntDesign name='check' size={28} color={colors.secondary} />
            </TouchableOpacity>
        </View>    
        </View>
    </>
  )
}

export default Inputmodel

const styles = StyleSheet.create({
    ModalButton: {
        width: 60,
        height: 60,
        backgroundColor: "#E6E6E6",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 15,
    },
    ModalContainer: {
        backgroundColor: "#332424",
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    ModalIcon: {
        alignItems: 'center',
        marginBottom: 30
    },
    StyledInput: {
        width: 300,
        height: 50,
        backgroundColor: "#E6E6E6",
        padding: 10,
        fontSize: 16,
        borderRadius: 10,
        color: "#4D3636",
        letterSpacing: 1,
    },
    ModalActionGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
    },
    ModalAction: {
        width: 60,
        height: 60,
        backgroundColor : `${(props) => props.color}`,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    ModalView: {
        backgroundColor: "#4D3636",
        borderRadius: 20,
        padding: 35,
    },
    HeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#E6E6E6",
        letterSpacing: 2,
        fontStyle: 'italic'
    }
  });