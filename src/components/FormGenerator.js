import React, {useState} from 'react';
import SwitchControl from "./SwitchControl";
import InputControl from "./InputControl";
import DropdownControl from "./DropdownControl";
import {Button, Form} from "reactstrap";
import RadioControl from "./RadioControl";

export default function FormGenerator(props) {
    const [form, setForm] = useState(props.data);
    return <Form>
        { props.data.map(array => {
            switch (array.type) {
                case "switch" :
                    return <SwitchControl setForm={setForm} {...array}/>;
                case "input":
                    return <InputControl setForm={setForm} {...array}/>;
                case "dropdown" :
                    return <DropdownControl setForm={setForm} {...array}/>;
                case "radio" :
                    return <RadioControl setForm={setForm} {...array}/>;
                default: return null;
            }
        })}
        <Button onClick={() => props.onSubmit(form)}>Submit</Button>
        </Form>
}
