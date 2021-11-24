import s from  "./UserdCard.module.scss";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                ? <button disabled={props.followingInProgress.some(id => id === props.id )} onClick={() => {
                    props.toggleFollowingProgress(true, props.id);
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                        withCredentials: true,
                        headers: {
                            // "API-KEY": "6a9c5a3c-1374-411d-897a-412f8482ea21",
                            "API-KEY": "e96ab015-d9f4-418d-87e3-58378319047f",
                        }
                    }
                    ).then(response => {
                        if (response.data.resultCode === 0) {
                            props.unFollow(props.id);
                        }
                        props.toggleFollowingProgress(false, props.id);
                    })
                    props.unFollow(props.id)
                }}
                          className={`${s.btn__unFollow}`}>unfollow</button>
                : <button disabled={props.followingInProgress.some(id => id === props.id )} onClick={() => {
                    props.toggleFollowingProgress(true, props.id);
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "6a9c5a3c-1374-411d-897a-412f8482ea21",
                        }
                    }).then(response => {
                        if (response.data.resultCode === 0) {
                            props.follow(props.id);
                        }
                        props.toggleFollowingProgress(false, props.id);
                    })
                }}
                    className={`${s.btn__follow}`}>follow</button>}
        </div>
        </div>
    )
}

export default UserCard;