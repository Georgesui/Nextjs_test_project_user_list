import { useRouter } from "next/router";
import { User, getAllUsers, getOneUser } from "../services/user";
import Image from 'next/image'

interface PropsType {
	user: User
}

export default function UserPage ({user}:PropsType) {
	const {query, back} = useRouter();

	// const backButton = () =>{
	// 	back
	// }

	return (
		<div>
			<div>Id: {query.id} </div>
			<div>
				<div>First Name: {user.firstName}</div>
				<div>Last Name: {user.lastName}</div>
				<div>id: {user.id}</div>
				<Image alt='image' src={user.image} width={100} height={100}/>
				<button onClick={()=>{back()}} >Go back</button>
				
			</div>
		</div>
	)
}

export async function getStaticProps(context:any) {
	const user = await getOneUser(context.params.id)
	return {
		props: {
			user
		}
	}
}

export async function getStaticPaths() {
	const users = await getAllUsers();

	return {
		paths: users.map(({id})=> ({params:{id: id.toString()}})),
		fallback: false,
	} 
}