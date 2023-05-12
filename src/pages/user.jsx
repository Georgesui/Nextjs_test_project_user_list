import React, {useEffect, useState} from 'react';
import {UserList} from './components/UserList';
import {getUsers} from './api/usersApi';
import {UserForm} from './components/UserForm';
import Pagination from './components/Pagination';


const User = () => {

    const [user, SetUser] = useState([]);
	 const [currentPage, setCurrentpage] = useState(1);
	 const [usersOnPage, setUsersOnPage] = useState(10);
	 

    useEffect(()=>{
        async function initUsers(){
            const users = await getUsers();
            const userArray = [];
            userArray.push(...users)
            SetUser(userArray)
        }
        initUsers()
    },[])

	 const indexOfLastUser= currentPage*usersOnPage;
	 const indexOfFirstUser = indexOfLastUser - usersOnPage;
	 const curentUser = user.slice(indexOfFirstUser, indexOfLastUser);

  return (<>
		<header><UserForm/></header>
    <div><UserList users={curentUser}/></div>
	 <Pagination usersOnPage={usersOnPage} totalUsers={user.length}/>
	 </>
  )
}   

export default User