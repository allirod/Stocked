import React from "react";
import { InputBoxProps } from "../types";


const InputBox = (props: InputBoxProps) => {

    const htmlType = !props.type ? 'text' : props.type;

    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={htmlType} id={props.id} ref={props.htmlRef}></input>
        </div>
    )
}

export default InputBox;