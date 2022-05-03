import {FC} from 'react';

type Props = {
    postsPerPage: any,
    totalPosts: any,
    paginate: any
}
const Pagination:FC<Props> = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage);i++){
        pageNumbers.push(i);
    }

    const linkHandler = (number:number) => {
        paginate(number);
    }

  return (
    <nav className="d-flex justify-content-center">
        <ul className="pagination">
            {
                pageNumbers.map(number => (
                    <li key={number} className="page-item ">
                        <p onClick={() => linkHandler(number)}  className="page-link">
                            {number}
                        </p>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Pagination