import {NavLink} from "react-router-dom";
import s from "./Link.module.scss";

const Link = (props) => {
    return (
        <NavLink activeClassName={s.active} to={props.linkHref}>
            {props.linkIco}
            {props.linkName}
        </NavLink>
    )
}

export default Link;