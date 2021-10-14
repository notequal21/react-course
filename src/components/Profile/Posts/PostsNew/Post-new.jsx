import Ico_arrowDown from "./Ico_arrow-down";
import s from "./Posts-new.module.scss";

const PostNew = () => {
    return (
        <div className={`${s.postsNew}`}>
            <textarea className={`${s.postsNew__input}`}></textarea>
            <button className={`${s.postsNew__btn}`}><Ico_arrowDown/></button>
        </div>
    )
}

export default PostNew;