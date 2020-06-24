import React, { useEffect, useContext, useState } from 'react';
import { Row, Col } from 'antd';
import FormContext from './appContext.js'; //TODO
import { ValueSetInclude } from '../../types/fhir.js';

function Converter(): JSX.Element {
    const context = useContext(FormContext);
    const questionnaire = {};
    const [valueSetObj, setValueSetObj] = useState([{}]);
    const [questionObj, setQuestionObj] = useState([{}]);
    useEffect(() => {
        // TODO: hente variabler fra context for lagre i variabler for å putte inn i JSONen
        // const title
        // const sectionTitles
        // const sectionIds
        // const questions
        // const questionIds
        // const valueSets
        convertValuesets();
    });
    function convertValuesets() {
        // Will be in the 'contained' part of questionnaire
        for (const [index, value] of valueSet.entries()) {
            setValueSetObj((valueSetObj) => [
                ...valueSetObj,
                { code: index, display: value },
            ]);
        }
    }
    function convertQuestions() {
        // Will be within 'item' and if in section another 'item' of type group
        for (const [index, value] of items.entries()) {
            setQuestionObj((questions) => [
                ...questionObj,
                {
                    linkId: 1, // sectionId.newId
                    text: value, // question text
                    type: '', // display | boolean | decimal | integer | date | dateTime
                    required: true, // true | false
                    repeats: false,
                    readOnly: false,
                    options: {
                        reference: valuesetId, // with a hashtag in front
                    },
                    // TODO: 'initialCoding' and 'extension'
                },
            ]);
        }
    }
    function boss(){

    }
    return (
        <div className="nav-bar">
            <Row>
                <Col span={1}>
                    <h1>Hanne</h1>
                </Col>
            </Row>
        </div>
    );
}

export default Converter;
