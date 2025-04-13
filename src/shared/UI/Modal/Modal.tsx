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
    padding: 20px 30px;
    background-color: var(--background-color1);
    border-radius: 8px;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
    box-sizing: border-box;
    & span {
        position: absolute;
        top: 8px;
        right: 8px;
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
}

const Modal: React.FC<IModal> = ({ onClose, children, position = 'center', ...props }) => {
    return (
        <StyledModalWrapper position={position} onClick={onClose}>
            <StyledModalContent
                onClick={(e: any) => e.stopPropagation()}
                {...props}
                key='box'
                initial={{ opacity: 0, transform: 'translateY(600px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                exit={{ opacity: 0, transform: 'translateY(600px)' }}
                transition={{ duration: 0.5, y: -50, ease: 'easeInOut' }}
            >
                <span onClick={onClose}>X</span>
                {children}
            </StyledModalContent>
        </StyledModalWrapper>
    );
};

export default Modal;
