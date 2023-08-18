import { FC } from 'react'
import { notes } from '../../types/models'
import styles from './notes.module.scss'
import Note from '../../shared/UI/Note/Note'

const Notes: FC<notes> = ({ notes }) => {
    return (
        <ul className={styles.notes}>
            {notes.map(({ id, label, date, hours, minutes }) => (
                <li className={styles.notes__element} key={id}>
                    <Note id={id} label={label} date={date} hours={hours} minutes={minutes} />
                </li>
            ))}
        </ul>
    )
}

export default Notes