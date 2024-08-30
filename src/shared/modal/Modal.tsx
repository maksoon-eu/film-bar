import React, { useEffect, useState } from 'react';

import Portal from '../Portal/Portal';

import styles from './modal.module.scss';

interface ModalProps {
    children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
    const [open, setOpen] = useState<boolean>(false);

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    };

    useEffect(() => {
        if (open) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [open, onKeyDown]);

    const clickOutModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            closeHandler();
        }
    };

    const openHandler = () => {
        setOpen(true);
    };

    const closeHandler = () => {
        setOpen(false);
    };

    return (
        <Portal>
            <div className={styles.modal} onClick={clickOutModal}>
                <div className={styles.modal__inner}>{children}</div>
            </div>
        </Portal>
    );
};

export default Modal;
