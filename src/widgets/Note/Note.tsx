import { FC } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { note } from '../../types/models'
import { useAppDispatch } from '../../entities/hooks'
import { removeNote } from '../../entities/slices/notesSlice'
import styles from './note.module.scss'

const Note: FC<note> = ({ label, date, hours, minutes, id }) => {
    const dispatch = useAppDispatch()

    return (
        <div className={styles.notes__element}>
            <div>
                <p className={styles.notes__element__label}>{label}</p>
                <p className={styles.notes__element__date}>{date}</p>
                <p className={styles.notes__element__time}>{`${hours}:${minutes}`}</p>
            </div>
            <XMarkIcon className={styles.icon} onClick={() => dispatch(removeNote(id))} />
        </div>
    )
}

export default Note