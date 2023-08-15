import { FC } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import styles from './note.module.scss'

type noteprops = {
    id?: string,
    label: string;
    date: string,
    hours: number,
    minutes: number;
    removeNote: (id: string) => void;
}

const Note: FC<noteprops> = ({ label, date, hours, minutes, id, removeNote }) => {
    return (
        <div className={styles.notes__element}>
            <div>
                <p className={styles.notes__element__label}>{label}</p>
                <p className={styles.notes__element__date}>{date}</p>
                <p className={styles.notes__element__time}>{`${hours}:${minutes}`}</p>
            </div>
            <XMarkIcon className={styles.icon} onClick={() => removeNote(id as string)} />
        </div>
    )
}

export default Note