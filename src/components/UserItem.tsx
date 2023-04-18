import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: '10px', border: '2px solid gray'}}>
            {user.id}. {user.name} проживает по адресу {user.address.city} {user.address.street}
        </div>
    );
};

export default UserItem;