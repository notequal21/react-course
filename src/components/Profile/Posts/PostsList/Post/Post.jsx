import s from "./Post.module.scss";
import userImage from "../../../User/Img_userimg.jpg";


const Post = (props) => {
    return (
        <div className={`${s.postsList__item}`}>
            <div className={`${s.postsList__itemTop}`}>
                <div className={`${s.postsList__itemImg}`}><img src={userImage} alt=""/></div>
                <div className={`${s.postsList__itemUsername}`}>{props.name}</div>
                <div className={`${s.postsList__itemTime}`}>{props.time}</div>
                <div className={`${s.postsList__itemDate}`}>{props.date}</div>
                <div className={`${s.postsList__itemDelete}`}>delete</div>
            </div>
            <div className={`${s.postsList__itemText}`}>{props.text}</div>
        </div>
    )
}

export default Post;