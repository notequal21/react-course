import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateMode = (status) => {
        setEditMode(false)
        props.updateStatus(status.target.value)
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