import React, { useEffect, useState } from 'react';
import {User, getAllUsers} from '../services/user';
import Link from 'next/link'

interface PropsType {
	userProps: User[]
}

 const Main = ({userProps}:PropsType) => {

	const [filteredData, SetfilteredData] = useState<string>('');

	const changeFilterData = (event: React.ChangeEvent<HTMLInputElement>) => {
		SetfilteredData(event.target.value);
	}

  return (<>
	<h1>Users</h1>
	<input placeholder='search' value={filteredData} onChange={changeFilterData}/>
	 <div>{userProps
	 .filter(({firstName})=>firstName
	 .includes(filteredData)).map((el)=> (<div key={el.id}>
		<Link href={`/update/${el.id}`}>
					<li >{el.firstName}{' '}{el.lastName}</li>
					</Link>
	 </div>)

	 )}</div>
	 </>
  )
}

export default Main;

export async function getServerSideProps() {
	const userProps = await getAllUsers();
	return {
		props: {
			userProps
		}
	}
}