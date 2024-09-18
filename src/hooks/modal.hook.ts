import { useEffect, useCallback } from 'react';

interface UseModalProps {
    isOpenModal: boolean;
    closeHandler: () => void;
    refModal: React.RefObject<HTMLElement>;
}

export const useModal = ({ isOpenModal, closeHandler, refModal }: UseModalProps) => {
    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler]
    );

    const clickOutModal = useCallback(
        (e: MouseEvent) => {
            if (isOpenModal && refModal?.current && !refModal.current.contains(e.target as Node)) {
                closeHandler();
            }
        },
        [closeHandler, isOpenModal, refModal]
    );

    useEffect(() => {
        if (isOpenModal) {
            window.addEventListener('keydown', onKeyDown);
            window.addEventListener('click', clickOutModal);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('click', clickOutModal);
        };
    }, [isOpenModal, onKeyDown, clickOutModal]);
};
