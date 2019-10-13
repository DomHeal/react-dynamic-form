import React, {useState , useEffect} from 'react';
import FormGenerator from "./components/FormGenerator";
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Row} from "reactstrap";

const exampleData = [
    {
        key: 'item1',
        label: 'Do you smoke?',
        type: 'switch',
        data: []
    },
    {
        key: 'item2',
        label: 'Select your favourite sport!',
        type: 'dropdown',
        data: [
            { key: 'subitem1', value: "football", label: "Football"},
            { key: 'subitem2', value: "rugby", label: "Rugby"},
            { key: 'subitem3', value: "swimming", label: "Swimming"},
        ]
    },
    {
        key: 'item3',
        label: 'Enter your name.',
        type: 'input',
    },
    {
        key: 'item4',
        label: 'Favourite Chocolate',
        type: 'radio',
        data: [
            { key: 'subitem1', value: "football", label: "White"},
            { key: 'subitem2', value: "football", label: "Dark"},
            { key: 'subitem3', value: "football", label: "Milk"},
        ]
    }
];


function App() {

    const [responseData, setResponseData] = useState(null)

    function onSubmit(form) {
        setResponseData(form)
    }

    useEffect(() => console.log('useEffect called =>'), [responseData])

    return (
        <div className="App">
            <Row>
                <Col md={{ size: 4, offset: 3 }}>
                    <FormGenerator onSubmit={onSubmit} data={exampleData}/>
                </Col>
            </Row>
            <Row>
                <code>{responseData ? JSON.stringify(responseData, null, 4) : <></>}</code>
            </Row>
        </div>
    );
}

export default App;
