import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserIdPage from "./components/UserIdPage";


const App = () => {

    return (
        <BrowserRouter>
            <NavLink to={'/users'} style={{padding: 15, margin: 15, display: "inline-block"}}>Пользователи</NavLink>
            <NavLink to={'/todos'} style={{padding: 15, margin: 15, display: "inline-block"}}>Список дел</NavLink>
            <Routes>
                <Route
                    path={'/users'}
                    element={<UserPage/>}
                />)

                <Route
                    path={'/todos'}
                    element={<TodosPage/>}
                />
                <Route
                    path={'/users/:id'}
                    element={<UserIdPage/>}
                />)
            </Routes>
        </BrowserRouter>

    );
};

export default App;