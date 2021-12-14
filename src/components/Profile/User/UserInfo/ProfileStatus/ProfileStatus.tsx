 import React from "react";

type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}
type StateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {

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

    onStatusChange = (e: any) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
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
                    <span onClick={ this.activateEditMode }>Status: {this.props.status}</span>
                }
                {this.state.editMode &&
                    <div onBlur={ this.deActivateEditMode } >Status: <input onChange={this.onStatusChange} autoFocus={true} type={'text'} value={this.state.status}/></div>
                }
            </>
        )
    }
}

export default ProfileStatus;