import { FC } from 'react'
import { note } from '../../types/models'
import styles from './note.module.scss'

const Note: FC<note> = ({ label, date, hours, minutes }) => {
    return (
        <div>
            <p className={styles.notes__element__label}>{label}</p>
            <p className={styles.notes__element__date}>{date}</p>
            <p className={styles.notes__element__time}>{`${hours}:${minutes}`}</p>
        </div>
    )
}

export default Note