import { CustomArrowProps } from 'react-slick';

import styles from './arrows.module.scss';

export function NextArrow({ className, onClick }: CustomArrowProps) {
    return (
        <div className={`${className} ${styles.arrows__next}`} onClick={onClick}>
            <svg viewBox="0 0 25 25">
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.6897 1.27586C17.2897 0.894978 16.6567 0.910416 16.2759 1.31035L6.27586 11.8103C5.90804 12.1966 5.90804 12.8035 6.27586 13.1897L16.2759 23.6897C16.6567 24.0896 17.2897 24.105 17.6897 23.7241C18.0896 23.3433 18.105 22.7103 17.7241 22.3103L8.38095 12.5L17.7241 2.68966C18.105 2.28973 18.0896 1.65675 17.6897 1.27586Z"></path>
            </svg>
        </div>
    );
}

export function PrevArrow({ className, onClick }: CustomArrowProps) {
    return (
        <div className={`${className} ${styles.arrows__prev}`} onClick={onClick}>
            <svg viewBox="0 0 25 25">
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.6897 1.27586C17.2897 0.894978 16.6567 0.910416 16.2759 1.31035L6.27586 11.8103C5.90804 12.1966 5.90804 12.8035 6.27586 13.1897L16.2759 23.6897C16.6567 24.0896 17.2897 24.105 17.6897 23.7241C18.0896 23.3433 18.105 22.7103 17.7241 22.3103L8.38095 12.5L17.7241 2.68966C18.105 2.28973 18.0896 1.65675 17.6897 1.27586Z"></path>
            </svg>
        </div>
    );
}
