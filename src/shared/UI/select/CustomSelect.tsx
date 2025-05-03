import React, { useState, useRef, useEffect } from 'react';
import styles from './CustomSelect.module.scss';

type Option = {
    label: string;
    value: string | number;
};

interface CustomSelectProps {
    options: Option[];
    value: string | number | null;
    onChange: (value: string | number) => void;
    placeholder?: string;
    label?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, label, value, onChange, placeholder = 'Выберите' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedLabel = options.find(option => option.value === value)?.label || placeholder;

    return (
        <div className={styles.select} ref={selectRef}>
            {label && <p>{label}</p>}

            <div className={styles.selected} onClick={() => setIsOpen(prev => !prev)}>
                {selectedLabel}
                <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <div className={styles.dropdown}>
                    {options.map(option => (
                        <div
                            key={option.value}
                            className={`${styles.option} ${option.value === value ? styles.active : ''}`}
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
