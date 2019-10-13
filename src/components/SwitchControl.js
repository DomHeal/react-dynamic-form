import React from 'react';
import {CustomInput, FormGroup} from "reactstrap";

export default function SwitchControl(props){
    const { label } = props;
    return <FormGroup>
            <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label={label} />
        </FormGroup>
}
