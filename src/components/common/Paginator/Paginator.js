import styles from "./Paginator.module.css";
import React from "react";

let Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // debugger;
    return <div>
        {pages.map(p => {
            return <span className={currentPage === p ? styles.selectedPage : null}
                         onClick={() => {
                             onPageChanged(p);
                         }}> {p} </span>
        })}
    </div>
}

export default Paginator
