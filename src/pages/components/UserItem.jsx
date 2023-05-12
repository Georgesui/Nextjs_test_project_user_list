export const UserItem = ({users}) => {
    return(<li className="userItem">
        <p>{users.id}</p>
        <p>{users.firstName}{' '}{users.lastName}</p>
        <img src={users.image} width='100px' />
    </li>)
}