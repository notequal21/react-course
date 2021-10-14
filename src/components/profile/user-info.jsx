
const UserInfo = () => {
    return (
        <div className="user-info">
            <div className="user-info__name">Name Surname</div>
            <div className="user-info__birth">Date of birth: <span>31.03.2003</span></div>
            <div className="user-info__city">City: <span>Sarapul</span></div>
            <div className="user-info__site">Website: <a href={'#'}>www.site.com</a></div>
        </div>
    )
}

export default UserInfo;