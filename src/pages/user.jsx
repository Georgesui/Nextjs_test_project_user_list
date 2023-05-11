import React, {useEffect, useState} from 'react';
import UserList from './components/UserList';
import {getUsers} from './api/usersApi';


const User = () => {

    const [user, SetUser] = useState([])

    useEffect(()=>{
        async function initUsers(){
            const users = await getUsers();
            const userArray = [];
            userArray.push(...users)
            SetUser(userArray)
        }
        initUsers()
    },[])

    console.log(user)
  return (
    <div><UserList users={user}/></div>
  )
}   

export default User