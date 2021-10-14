import ArrowDown from "../../../../img/profile/arrow-down";
import s from "./Posts-new.module.scss";

const PostNew = () => {
    return (
        <div className={`${s.postsNew}`}>
            <textarea className={`${s.postsNew__input}`}></textarea>
            <button className={`${s.postsNew__btn}`}><ArrowDown/></button>
        </div>
    )
}

export default PostNew;