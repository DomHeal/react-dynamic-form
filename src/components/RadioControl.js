import React, {useState} from 'react';
import {FormGroup, Input, Label} from "reactstrap";

export default function RadioControl(props){
    const [selection, setSelection] = useState(-1);

    const handleChange = (index) => setSelection(index);

    const { label, data } = props;
    return <FormGroup tag="fieldset">
        <legend>{label}</legend>
        {data.map((item, index) =>
            <FormGroup check>
                <Label check>
                        <Input type="radio" checked={selection === index} onChange={() => handleChange(index)}/>
                        {item.label}
                    </Label>
            </FormGroup>
        )}
    </FormGroup>
}
