import ArrowDown from "../../img/profile/arrow-down";

const PostNew = () => {
    return (
        <div className="posts-new">
            <textarea name="" className="posts-new__input"></textarea>
            <button className="posts-new__btn"><ArrowDown/></button>
        </div>
    )
}

export default PostNew;