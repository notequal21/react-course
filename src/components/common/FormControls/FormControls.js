
export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={props.className}>
            <textarea {...input} {...props} />
        </div>
    )
}