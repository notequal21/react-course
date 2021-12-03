import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            { !editMode &&
                <div onClick={activateMode}>Status: {props.status}</div>
            }
            {editMode &&
                <div onChange={onStatusChange} onBlur={deactivateMode}>Status: <input value={status} autoFocus={true} type={'text'}/></div>
            }
        </>
    )
}

export default ProfileStatusWithHooks;