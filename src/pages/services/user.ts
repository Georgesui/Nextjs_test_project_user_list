import {USER_URL} from './index';

export interface User {
	userId: number, 
	id: number,
	firstName: string, 
	lastName: string,
	image: string
}

export async function getAllUsers(): Promise<User[]> {
	const response = await fetch(`${USER_URL}/users`);
	const data = await response.json();
	return data.users;
}

export async function getOneUser(id:number):Promise<User> {
	const response = await fetch(`${USER_URL}/users/${id}`);
	return response.json();
}