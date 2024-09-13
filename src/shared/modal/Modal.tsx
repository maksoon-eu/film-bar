import React, { useRef, useState } from 'react';
import { useModal } from '../../hooks/modal.hook';

import Portal from '../Portal/Portal';

import styles from './modal.module.scss';

interface ModalProps {
    children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
    const [open, setOpen] = useState<boolean>(false);

    const refModal = useRef<HTMLDivElement>(null);

    const openHandler = () => setOpen(true);
    const closeHandler = () => setOpen(false);

    useModal({ open, closeHandler, refModal });

    return (
        <Portal>
            {open && (
                <div className={styles.modal} ref={refModal}>
                    <div className={styles.modal__inner}>{children}</div>
                </div>
            )}
        </Portal>
    );
};

export default Modal;
