import {UserItem} from "./UserItem";

export const UserList = ({users})=> {
    return(
        <ul className="containerForItems">
            {
                users.map((user)=>{
                    return <UserItem 
                    users={user}
                    key={user.id}
                    />
                })
            }
        </ul>
    )
}