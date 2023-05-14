import Image from "next/image"
export const UserItem = ({users}) => {
    return(<li className="userItem">
        <p>{users.id}</p>
        <p>{users.firstName}{' '}{users.lastName}</p>
        <Image src={users.image} width='100px' height='100px' alt={users.firstName}/>
    </li>)
}