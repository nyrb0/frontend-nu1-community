import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const StyledModalWrapper = styled.div`
    position: fixed;
    z-index: 112;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: ${props => props.position};
    justify-content: center;
`;

const StyledModalContent = styled(motion.div)`
    height: auto;
    max-width: 300px;
    z-index: 1000;
    background-color: var(--background-color1);
    border-radius: 8px;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
    & .close-comment {
        background-color: var(--background-color3);
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        width: 30px;
        height: 30px;
        position: absolute;
        top: -20px;
        right: -15px;
        font-size: 12px;
        opacity: 0.7;
        cursor: pointer;
    }

    & button {
        width: 100px;
        height: 30px;
    }
`;

interface IModal extends HTMLAttributes<HTMLDivElement> {
    onClose?: () => void;
    children: React.ReactNode;
    position?: 'center' | 'flex-end' | 'flex-start';
    maxWidth?: number | string;
}

const Modal: React.FC<IModal> = ({ onClose, children, maxWidth, position = 'center', ...props }) => {
    return (
        <StyledModalWrapper position={position} onClick={onClose}>
            <StyledModalContent
                onClick={(e: any) => e.stopPropagation()}
                {...props}
                style={{ maxWidth }}
                key='box'
                initial={{ opacity: 0, transform: 'translateY(600px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                exit={{ opacity: 0, transform: 'translateY(600px)' }}
                transition={{ duration: 0.5, y: -50, ease: 'easeInOut' }}
            >
                <span className='close-comment' onClick={onClose}>
                    X
                </span>
                {children}
            </StyledModalContent>
        </StyledModalWrapper>
    );
};

export default Modal;
