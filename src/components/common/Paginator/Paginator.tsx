import s from "../../FindUsers/FindUsers.module.scss";
import React, {useState} from "react";

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

let Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<any> = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={`${s.findUsers__pagination}`}>
            {
                portionNumber > 1 &&
                <button onClick={() => {setPortionNumber(portionNumber - 1)}}>prev</button>
            }
            {
                pages.filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                    .map(p => {
                        return <div key={p.id} className={`${s.findUsers__paginationItem} ${currentPage === p
                        ? s.findUsers__paginationItemActive : null } `}
                        onClick={ () => {onPageChanged(p)} } >{p}</div>
            })}
            {
                portionCount > portionNumber &&
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}>next</button>
            }
            {/*{*/}
            {/*pages.map(p => {*/}
            {/*    return <div key={p.id} className={`${s.findUsers__paginationItem} ${currentPage === p*/}
            {/*        ? s.findUsers__paginationItemActive : null } `}*/}
            {/*                onClick={ () => {onPageChanged(p)} } >{p}</div>*/}
            {/*})}*/}

        </div>
    )
}

export default Paginator;