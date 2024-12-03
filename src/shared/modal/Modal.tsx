import React, { useRef, useState } from 'react';
import { useModal } from '../../hooks/modal.hook';

import Portal from "../Portal/Portal";

import styles from './modal.module.scss';

interface ModalProps {
    children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const refModal = useRef<HTMLDivElement>(null);

    const openHandler = () => setIsOpenModal(true);
    const closeHandler = () => setIsOpenModal(false);

    useModal({ isOpenModal, closeHandler, refModal });

    return (
        <Portal>
            {isOpenModal && (
                <div className={styles.modal} ref={refModal}>
                    <div className={styles.modal__inner}>{children}</div>
                </div>
            )}
        </Portal>
    );
};

export default Modal;
