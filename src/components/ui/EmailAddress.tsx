
import React, { useState, useContext, useEffect, useReducer } from "react";

import '../../lib/bootstrap/dist/css/bootstrap.css';
import "../site.css";

import FormControl from "react-bootstrap/esm/FormControl";
import InputGroup from "react-bootstrap/esm/InputGroup";

import {createUseStyles} from "react-jss";
import { DefaultTheme } from "../../utils/themes";

const styles = DefaultTheme.forms;
const useStyles = createUseStyles({
    input: styles.input,
    email: styles.emailInput
});

export interface EmailAddressProps {
    className: string, 
    disabled: boolean,
    domainName: string,
    id: string,
    isInvalid: boolean,
    isValid: boolean,
    placeholder: string, 
    readOnly?: boolean,
    size: "sm" | "lg" | undefined,
    value?: string,
    onChange?: () => {},
    onBlur?: () => {}
};

// const formReducer = (state, event) => {
//     return {
//         ...state,
//         [event.target.name]: event.target.value
//     }
// }

// const [submitting, setSubmitting] = useState(false);
// const onFormSubmit = event => {
//     // Prevent punting to the server and refreshing page
//     event.preventDefault();
//     // Debounce
//     setSubmitting(true);

//     setTimeout(() => {
//         setSubmitting(false);
//     }, 3000);
//     // Run actual handler code
//     // Your code here...
//     // event.target.something...
// };

// const onInputChange = event => {
    
// };

const validate = (emailAddressValue: string) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailAddressValue))
    {
        return (true)
   
    }
    alert("You have entered an invalid email address!")
    return (false)
}

const EmailAddress = (props: EmailAddressProps) => {
    const styles = useStyles();

    const classString = `${styles.email} form-control ${props.className}`

    const emailControl = <FormControl 
        className={classString} 
        disabled={props.disabled}
        id={props.id}
        isInvalid={props.isInvalid}
        isValid={props.isValid}
        placeholder={props.placeholder} 
        readOnly={props.readOnly}
        size={props.size}
        type="email"
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
    />

    if (props.domainName) {        
        return <InputGroup>
            emailControl
            <InputGroup.Append>
                <InputGroup.Text id="emailDomain">`@${props.domainName}`</InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>;
    } else {
        return emailControl;
    }
};
