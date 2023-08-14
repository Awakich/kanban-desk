import { FC } from 'react'
import { note } from '../../types/models'
import { XMarkIcon } from '@heroicons/react/20/solid'
import styles from './note.module.scss'

const Note: FC<note> = ({ label, date, hours, minutes }) => {
    return (
        <div className={styles.notes__element}>
            <div>
                <p className={styles.notes__element__label}>{label}</p>
                <p className={styles.notes__element__date}>{date}</p>
                <p className={styles.notes__element__time}>{`${hours}:${minutes}`}</p>
            </div>
            <XMarkIcon className={styles.icon}/>
        </div>
    )
}

export default Note