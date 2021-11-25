import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div onClick={ this.activateEditMode }>Status: {this.props.status}</div>
                }
                {this.state.editMode &&
                    <div onBlur={ this.deActivateEditMode } >Status: <input onChange={this.onStatusChange} autoFocus={true} type={'text'} value={this.state.status}/></div>
                }
            </>
        )
    }
}

export default ProfileStatus;