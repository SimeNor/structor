import React from 'react';
import { Input } from 'antd';
import './AnswerComponent.css';

const { TextArea } = Input;

type TextInputProps = {
    longAnswer: boolean;
    maxLength: number;
    placeholder?: string;
};

function TextInput({
    longAnswer,
    maxLength,
    placeholder,
}: TextInputProps): JSX.Element {
    const textOutput = () => {
        if (longAnswer) {
            return (
                <TextArea
                    placeholder={placeholder}
                    maxLength={maxLength}
                    autoSize={{ minRows: 3, maxRows: 3 }}
                ></TextArea>
            );
        } else {
            return (
                <Input placeholder={placeholder} maxLength={maxLength}></Input>
            );
        }
    };
    return textOutput();
}
export default TextInput;
