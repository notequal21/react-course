import s from "../../FindUsers/FindUsers.module.scss";
import React from "react";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={`${s.findUsers__pagination}`}>
            {pages.map(p => {
                return <div key={p.id} className={`${s.findUsers__paginationItem} ${currentPage === p
                    ? s.findUsers__paginationItemActive : null } `}
                            onClick={ () => {onPageChanged(p)} } >{p}</div>
            })}
        </div>
    )
}

export default Paginator;