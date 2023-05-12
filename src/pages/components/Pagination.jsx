import React from 'react'

const Pagination = ({usersOnPage, totalUsers}) => {

	const pageNumbers = [];

	for(let i=1;i<=Math.ceil(totalUsers/usersOnPage); i++) {
		pageNumbers.push(i)
	}

  return (
	 <nav>
		<ul>
		{pageNumbers.map(pageNumber=>
			<li key={pageNumber}>
				<a href='!#'>{pageNumber}</a>
			</li>
		)}
		</ul>
	 </nav>
  )
}

export default Pagination