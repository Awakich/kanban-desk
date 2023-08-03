import { FC, ReactNode } from 'react'
import styles from './button.module.scss'

type button = {
    children: ReactNode;
    onClick: () => void;
}

const Button: FC<button> = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className={styles.button}>{children}</button>
    )
}

export default Button