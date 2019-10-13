import React from 'react';
import {FormGroup, Input, Label} from "reactstrap";

export default function InputControl(props){
    const { label } = props;
    return <FormGroup>
        <Label>{label}</Label>
        <Input/>
    </FormGroup>
}
