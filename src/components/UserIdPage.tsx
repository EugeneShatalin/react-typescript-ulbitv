import React, {FC, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {IUser} from "../types/types";
import axios from "axios";

type UserItemPageParams = {
    id: string
}

const UserIdPage: FC = () => {

    const params = useParams<UserItemPageParams>()
    const navigate = useNavigate()

    const [user, setUser] = useState<IUser | null>(null)

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users' + params.id)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <h1>Имя пользователя {user?.name}</h1>
            <button onClick={() => {navigate('/users')} }>Назад</button>
        </div>
    );
};

export default UserIdPage;