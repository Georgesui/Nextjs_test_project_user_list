import React, {useEffect, useState } from 'react';
import {userData} from '../services/user';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Pagination from '../components/Pagination'
import {USER_URL} from '../services/index'
import { GetServerSidePropsContext } from 'next';

const totalPages = 10;

 const Main = ({allUsers}:userData) => {
	const router = useRouter();
	const users = allUsers.users;
	const total = allUsers.total;
	const skip = allUsers.skip;

	const [currentPage, setCurrenPage] = useState(1);
	const [page, setPage] = useState(skip/totalPages);
	const [endPage, setEndPage] = useState(Math.ceil(total/totalPages))

	useEffect(()=> {
		router.push(`/users?page=${page}`)
	},[page])

	const [filteredData, SetfilteredData] = useState<string>('');

	const changeFilterData = (event: React.ChangeEvent<HTMLInputElement>) => {
		SetfilteredData(event.target.value);
	}

  return (<>
	<h1>Users</h1>
	<input placeholder='search' value={filteredData} onChange={changeFilterData}/>
	 <div>{users
	 .filter(({firstName})=>firstName.toLowerCase()
	 .includes(filteredData.toLowerCase())).map((el)=> (<div key={el.id}>
		<Link href={`/users/${el.id}`}>
					<li >{el.firstName}{' '}{el.lastName}</li>
					</Link>
	 </div>)
	 )}</div>
	  <Pagination 
	  setPage={setPage}
	  currentPage={currentPage}
	  page={page}
	  endPage={endPage}
	  siblingCount={1}
	  />
	 </>
  )
}

export default Main;

export async function getServerSideProps (context:GetServerSidePropsContext) {
	try{
		const {query} = context;
		const pageNumber = parseInt(query.page as string, 10);
		const response = await fetch(`${USER_URL}=${totalPages}&skip=${(pageNumber-1)*totalPages}`);
		const allUsers = await response.json();
		return {
			props: {
				allUsers
			}
		}
	}
	catch (err) {
		throw new Error('Fetching Erro')
	}

}