import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './TextEditor.module.scss';

interface TextEdit {
    onChange: (v: string) => void;
    value: string;
    placeholder: string;
}

const TextEdit: React.FC<TextEdit> = ({ onChange, value, placeholder }) => (
    <ReactQuill theme='snow' value={value} placeholder={placeholder} className={styles.customEditor} onChange={onChange} />
);

export default TextEdit;
