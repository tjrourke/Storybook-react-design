import React, { useReducer, useState } from "react";

import '../../lib/bootstrap/dist/css/bootstrap.css';
import "../site.css";

// import Form from "react-bootstrap/esm/Form";
import FormCheck from "react-bootstrap/esm/FormCheck";
import FormControl from "react-bootstrap/esm/FormControl";
import InputGroup from "react-bootstrap/esm/InputGroup";

import {createUseStyles} from "react-jss";
import { DefaultTheme } from "../../utils/themes";

const styles = DefaultTheme.forms;
const useStyles = createUseStyles({
    input: styles.input,
    checkbox: styles.checkboxInput,
    date: styles.dateInput,
    email: styles.emailInput,
    fein: styles.feinInput,
    password: styles.passwordInput,
    phoneNumber: styles.phoneNumberInput,
    postalCode: styles.postalCodeInput,
    radio: styles.radioInput
});

export interface InputProps {
    onChange: any,
    placeholder?: string,
    type: string,
    value?: string
};

export interface CheckboxProps extends InputProps {
    checked: boolean,
    label: string
};

export interface SelectProps extends InputProps {
    onSelect: (id: string, val: number) => void
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

export const Input = (props: InputProps) => {
    const styles = useStyles();
    return <FormControl 
        type="text"
        className={`${styles.input} form-control`} 
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
    />;
}

export const Checkbox = (props: CheckboxProps) => {
    const styles = useStyles();
    return <FormCheck 
        type={"switch"} 
        className={`${styles.checkbox} form-checkbox`} 
        checked={props.checked} 
        value={props.value} 
        label={props.label}
        onChange={props.onChange}
    />;
    // return <FormCheck>
    //     <FormCheck.Input id={props.id} isInvalid={}></FormCheck.Input>
    //     <FormCheck.Label></FormCheck.Label>
    // </FormCheck>
}

export const DateInput = (props: InputProps) => {
    const styles = useStyles();
    return <FormControl 
        type={"date"} 
        className={`${styles.date} form-control`} 
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
    />;
}

export const EmailInput = (props: InputProps) => {
    const styles = useStyles();
    return <FormControl 
        type={"email"} 
        className={`${styles.email} form-control`} 
        placeholder={props.placeholder} 
        value={props.value}
        onChange={props.onChange}
    />;
}

export const FeinInput = (props: InputProps) => {
    const styles = useStyles();
    return <FormControl
        type={"text"} 
        className={`${styles.fein} form-control`} 
        placeholder={props.placeholder} 
        value={props.value} 
        minLength={9} 
        maxLength={9}
        onChange={props.onChange}
    />;
}

export const PasswordInput = (props: InputProps) => {
    const styles = useStyles();
    return <FormControl 
        type={"password"} 
        className={`${styles.password} form-control`} 
        placeholder={props.placeholder} 
        value={props.value}
        onChange={props.onChange}
    />;
}

export const PhoneNumberInput = (props: InputProps) => {
    const styles = useStyles();
    return <FormControl 
        type={"tel"} 
        className={`${styles.phoneNumber} form-control`} 
        placeholder={props.placeholder} 
        value={props.value} 
        minLength={10} 
        maxLength={14}
        onChange={props.onChange}
    />;
}

export const PostalCodeInput = (props: InputProps) => {
    const styles = useStyles();
    return <FormControl    
        type="text"
        className={`${styles.postalCode} form-control`} 
        placeholder={props.placeholder} 
        value={props.value} 
        minLength={5} 
        maxLength={10} 
        onChange={props.onChange}
    />;
}

export const Radio = (props: CheckboxProps) => {
    const styles = useStyles();
    return (<FormCheck 
        type={"radio"} 
        className={`${styles.radio} form-radio`} 
        checked={props.checked} 
        value={props.value} 
        label={props.label} 
        onChange={props.onChange}
    />);
}

const alignRightStyle = { textAlign: "right" };
export const CurrencyEntry = () => {
    return (<InputGroup className="mb-3">
        <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label="Amount (to the nearest dollar)" type="number" style={{ textAlign: "right" }} />
        <InputGroup.Append>
            <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup.Append>
    </InputGroup>);
};