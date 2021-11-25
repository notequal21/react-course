import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false,
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div onClick={ this.activateEditMode }>Status: {this.props.status}</div>
                }
                {this.state.editMode &&
                    <div onBlur={ this.deActivateEditMode } >input: <input autoFocus={true} type={'text'} value={this.props.status}/></div>
                }
            </>
        )
    }
}

export default ProfileStatus;