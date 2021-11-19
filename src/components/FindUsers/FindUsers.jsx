
const FindUsers = (props) => {
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>

                </div>)
            }
        </div>
    )
}

export default FindUsers;