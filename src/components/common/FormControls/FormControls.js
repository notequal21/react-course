import s from "./FormControls.module.scss"

export const Textarea = ({input, meta, ...props}) => {

    const hasErr = meta.touched && meta.error;

    return (
        <div className={`${props.className} ${s.textarea} ${hasErr ? s.err : ''}`}>
            <textarea {...input} {...props} />
            { hasErr && <span>{meta.error}</span>}
        </div>
    )
}