import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import ToDoItem from "./components/ToDoItem";
import EventExample from "./components/EventExample";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchUsers()
        fetchToDo()
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    const fetchToDo = async () => {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <EventExample/>
            <Card
                onClick={(num) => {
                    console.log('click ', num)
                }}
                width='150px'
                height='150px'
                variant={CardVariant.outlined}
            />
            <UserList users={users}/>

            <List
                items={users}
                renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
            />
            <List
                items={todos}
                renderItem={(todo: ITodo) => <ToDoItem todo={todo} key={todo.id}/>}
            />
        </div>
    );
};

export default App;