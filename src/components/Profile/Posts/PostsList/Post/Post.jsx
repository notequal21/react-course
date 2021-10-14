import s from "../Posts-list.module.scss";
import userImage from "../../../User/Img_userimg.jpg";


const Post = () => {
    return (
        <div className={`${s.postsList__item}`}>
            <div className={`${s.postsList__itemTop}`}>
                <div className={`${s.postsList__itemImg}`}><img src={userImage} alt=""/></div>
                <div className={`${s.postsList__itemUsername}`}>Name Surname</div>
                <div className={`${s.postsList__itemTime}`}>18:21</div>
                <div className={`${s.postsList__itemDate}`}>12.10.2021</div>
                <div className={`${s.postsList__itemDelete}`}>delete</div>
            </div>
            <div className={`${s.postsList__itemText}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
            </div>
        </div>
    )
}

export default Post;