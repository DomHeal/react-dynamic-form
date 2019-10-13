import React from 'react';
import {FormGroup, Input, Label} from "reactstrap";

export default function DropdownControl(props){
    const {label, key, data} = props;
    return <FormGroup key={key}>
        <Label>{label}</Label>
        <Input type="select" name="select">
            {data.map(item =>
                <option key={item.key}>{item.label}</option>
            )}
        </Input>
    </FormGroup>
}
