import { useEffect, useCallback } from 'react';

interface UseModalProps {
    open: boolean;
    closeHandler: () => void;
    refModal: React.RefObject<HTMLElement>;
}

export const useModal = ({ open, closeHandler, refModal }: UseModalProps) => {
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
            if (open && refModal?.current && !refModal.current.contains(e.target as Node)) {
                closeHandler();
            }
        },
        [closeHandler, open, refModal]
    );

    useEffect(() => {
        if (open) {
            window.addEventListener('keydown', onKeyDown);
            window.addEventListener('click', clickOutModal);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('click', clickOutModal);
        };
    }, [open, onKeyDown, clickOutModal]);
};
