import s from "./FormControls.module.scss"
import {Field} from "redux-form";

export const Textarea = ({input, meta: {touched, error}, ...props}) => {

    const hasErr = touched && error;

    return (
        <div className={`${props.className} ${s.textarea} ${hasErr ? s.err : ''}`}>
            <textarea {...input} {...props} />
            { hasErr && <span>{error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const hasErr = meta.touched && meta.error;

    return (
        <div className={`${props.className} ${s.textarea} ${hasErr ? s.err : ''}`}>
            <input {...input} {...props} />
            { hasErr && <span>{meta.error}</span>}
        </div>
    )
}

export const createField = (component, validators, name, placeholder, props) => (
    <div className={`${s.loginForm__input}`}>
        <Field component={component}
                validate={validators}
                name={name} placeholder={placeholder} {...props} />
    </div>
)