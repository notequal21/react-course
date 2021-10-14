import userImage from "../../img/profile/userimg.jpg";

const PostsList = () => {
    return (
        <div className="posts-all">
            <div className="posts-all__item">
                <div className="posts-all__item-top">
                    <div className="posts-all__item-img"><img src={userImage} alt=""/></div>
                    <div className="posts-all__item-username">Name Surname</div>
                    <div className="posts-all__item-time">18:21</div>
                    <div className="posts-all__item-date">12.10.2021</div>
                    <div className="posts-all__item-delete">delete</div>
                </div>
                <div className="posts-all__item-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                </div>
            </div>
        </div>
    )
}

export default PostsList;