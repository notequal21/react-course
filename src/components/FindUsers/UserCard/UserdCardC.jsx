import s from  "./UserdCard.module.scss";

const UserCard = (props) => {
    return (
        <div className={`${s.userCard}`}>
            <div className={`${s.userCard__img}`}>
                <img src={props.userImg} alt=""/>
            </div>
            <div className={`${s.userCard__name}`}>
                {props.userName}
            </div>
            <div className={`${s.userCard__status}`}>
                Status: {props.status}
            </div>
            <div className={`${s.userCard__location}`}>
                <div className={`${s.userCard__locationCountry}`}>Country: {props.country}</div>
                <div className={`${s.userCard__locationCity}`}>City: {props.city}</div>
            </div>
            <div className={`${s.userCard__btn}`}>
                {props.followed
                    ? <button onClick={() => {props.unFollow(props.id)}}
                              className={`${s.btn__unFollow}`}>unfollow</button>
                    : <button onClick={() => {props.follow(props.id)}}
                        className={`${s.btn__follow}`}>follow</button>}
            </div>
        </div>
    )
}

export default UserCard;