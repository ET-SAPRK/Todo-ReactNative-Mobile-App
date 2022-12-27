import React from 'react'
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity,View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import {Entypo} from '@expo/vector-icons'


const ListItems = ({
  todos, 
  setTodos,
  handleTriggerEdit,
}) => {
  const colors = {
    primary: "#332424",
    secondary: "#4D3636",
    tertiary: "#E6E6E6",
    alternative: "#999999",
  };

  const handleDelete = (rowKey) => {
    const newTodos = [...todos];
    const todoIndex= todos.findIndex((todo) => todo.key === rowKey);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <>
    {todos.lenght  == 0 && <Text style={styles.TodoText}>You Have No Todos</Text>}
    {todos.lenght != 0 && <SwipeListView 
        data={todos}
        renderItem={(data) => {
            return(
                <TouchableHighlight style={styles.ListView}
                  underlayColor={colors.primary}
                  onPress={() => {
                    handleTriggerEdit(data.item)
                  }}
                >
                   <>
                   <Text style={styles.TodoText}>
                      {data.item.title}
                    </Text>
                    <Text style={styles.TodoDate}>
                      {data.item.date}
                    </Text>
                   </>
                </TouchableHighlight>
            )
        }}
        renderHiddenItem={(data,rowMap) => {
            return(
              <View style={styles.ListViewHidden}>
                <TouchableOpacity style={styles.HiddenButton}
                   onPress={() => handleDelete(rowMap, data.item.key)}
                >
                  <Entypo  name='trash' 
                    size={25}
                    color="#4D3636"
                  />
                </TouchableOpacity>
              </View>
            )
        }}
        leftOpenValue={80}
        previewRowKey={1}
        previewOpenValue={80}
        previewOpenDelay={3000}
        disableLeftSwipe={true}
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1, paddingBottom:30, marginBottom: 40
        }}
    />}
    </>
  )
}

export default ListItems

const styles = StyleSheet.create({
    ListView: {
     backgroundColor:  "#4D3636",
     padding: 15,
     minHeight: 85,
     width: '100%',
     justifyContent: 'space-around',
     marginBottom: 15,
     borderRadius: 10
    },
    TodoText: {
      fontSize: 16,
      letterSpacing: 1,
      color:  "#E6E6E6",
    },
    TodoDate: {
      fontSize: 10,
      letterSpacing: 1,
      color:  "#999999",
      textAlign: 'right',
      textTransform: 'uppercase',
    },
    ListViewHidden: {
      backgroundColor: "#E6E6E6",
      minHeight: 85,
      width: '100%',
      padding: 15,
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginBottom: 15,
      borderRadius: 11
    },
    HiddenButton: {
      width: 55,
      alignItems: 'center'
    }
  });