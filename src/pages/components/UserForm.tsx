import React, {FC, useState } from 'react';
import Link from 'next/link';
import { User} from '../services/user';

const UserForm:FC =  () => {

	const [filteredData, SetfilteredData] = useState<string>('');
	const [userFiltered, setUserFlitered] = useState<User[]>([]);

	const resultOfFormSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const filtered = event.target.value;
	SetfilteredData(filtered)
	
	if(filtered) {
		try {
			const res = await fetch(`https://dummyjson.com/users/search?q=${filteredData}`);
			if(!res.ok) throw new Error('Error fetching')
			const filtered = await res.json();
			setUserFlitered(filtered.users)
		}
		catch (err) {throw new Error('Error fetching')}
	} else {
		setUserFlitered([])
	}
	}
	return (
		<ul className='userFormClass'>
	<input placeholder='search' value={filteredData} onChange={resultOfFormSearch} className='inputForm'/>
		{userFiltered.map((el)=> (<div key={el.id}>
		<Link href={`/users/${el.id}`}>
					<li className='findedInList'>{el.firstName}{' '}{el.lastName}</li>
					</Link>
	 </div>))}
		</ul>
	)
}

export default UserForm;