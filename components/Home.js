import React, {useState} from 'react'
import { Text } from 'react-native'
import Header from './Header'
import ListItems from './ListItems'
import Inputmodel from './Inputmodel'

const Home = () => {
    const initialTodos =[{
        title: "Get some snack",
        date: "Fri, 08 Jan 2021 16:32:11 GMT",
        key: "1"
    },{
        title: "Get some groceries",
        date: "Fri, 08 Jan 2021 16:32:11 GMT",
        key: "2"
    },{
        title: "Prepare Yt script",
        date: "Fri, 08 Jan 2021 16:32:11 GMT",
        key: "3"
    }]
    const [todos, setTodos] = useState(initialTodos)
    const [modalVisible , setModalVisible] = useState(false)
    const [todoInputValue, setTodoInputValue] = useState();

    const handleAddTodo = (todo) => {
        const newTodos = [...todos, todo];
        setTodos(newTodos);
        setModalVisible(false);
    }


    const handleClear = () => {
        setTodos([])
    }
  return (
    <>
        <Header  handleClear={handleClear}/>
        <ListItems 
            todos={todos}
            setTodos={setTodos}
        />
        <Inputmodel 
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            todoInputValue={todoInputValue}
            setTodoInputValue={setTodoInputValue}
            handleAddTodo={handleAddTodo}
            todos={todos}
        />
    </>
  )
}

export default Home