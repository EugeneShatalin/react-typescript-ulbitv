import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import ToDoItem from "./ToDoItem";
import List from "./List";

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchToDo()
    }, [])

    const fetchToDo = async () => {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <List
            items={todos}
            renderItem={(todo: ITodo) => <ToDoItem todo={todo} key={todo.id}/>}
        />
    );
};

export default TodosPage;