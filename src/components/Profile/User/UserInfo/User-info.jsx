import s from "./User-info.module.scss";

const UserInfo = () => {
    return (
        <div className={`${s.userInfo}`}>
            <div className={`${s.userInfo__name}`}>Name Surname</div>
            <div className={`${s.userInfo__birth}`}>Date of birth: <span>31.03.2003</span></div>
            <div className={`${s.userInfo__city}`}>City: <span>Sarapul</span></div>
            <div className={`${s.userInfo__site}`}>Website: <a href={'#'}>www.site.com</a></div>
        </div>
    )
}

export default UserInfo;