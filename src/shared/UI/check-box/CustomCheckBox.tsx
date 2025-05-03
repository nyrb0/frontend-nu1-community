import React from 'react';
import styles from './CustomCheckbox.module.scss';

interface Props {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
}

const CustomCheckbox: React.FC<Props> = ({ checked, onChange, label }) => {
    return (
        <label className={styles.checkboxWrapper}>
            <input type='checkbox' checked={checked} onChange={e => onChange(e.target.checked)} className={styles.checkboxInput} />
            <span className={styles.customBox}></span>
            {label && <span className={styles.label}>{label}</span>}
        </label>
    );
};

export default CustomCheckbox;
