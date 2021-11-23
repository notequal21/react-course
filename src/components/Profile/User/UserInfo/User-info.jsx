import s from "./User-info.module.scss";

const UserInfo = (props) => {
    return (
        <div className={`${s.userInfo}`}>
            <div className={`${s.userInfo__name}`}>{props.profileIfno.fullName}</div>
            <div className={`${s.userInfo__site}`}>Github: <a href={'#'}>{props.profileIfno.contacts.github}</a></div>
        </div>
    )
}

export default UserInfo;