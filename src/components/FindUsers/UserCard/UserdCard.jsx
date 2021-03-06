import s from  "./UserdCard.module.scss";
import {NavLink} from "react-router-dom";

const UserCard = (props) => {
    return (
        <div className={`${s.userCard}`}>
            <NavLink to={`/profile/${props.id}`}>
                <div className={`${s.userCard__img}`}>
                    <img src={props.userImg} alt=""/>
                </div>
                <div className={`${s.userCard__name}`}>
                        {props.userName}
                </div>
            </NavLink>
            <div className={`${s.userCard__status}`}>
                Status: {props.status}
            </div>
            <div className={`${s.userCard__location}`}>
                <div className={`${s.userCard__locationCountry}`}>Country: {props.country}</div>
                <div className={`${s.userCard__locationCity}`}>City: {props.city}</div>
            </div>
            <div className={`${s.userCard__btn}`}>
            {props.followed
                ? <button disabled={props.followingInProgress.some(id => id === props.id )}
                    onClick={() => {props.unFollow(props.id)}} className={`${s.btn__unFollow}`}>unfollow</button>
                : <button disabled={props.followingInProgress.some(id => id === props.id )}
                    onClick={() => {props.follow(props.id)}} className={`${s.btn__follow}`}>follow</button>}
        </div>
        </div>
    )
}

export default UserCard;