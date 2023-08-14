import { FC } from 'react'
import { note } from '../../types/models'
import styles from './notes.module.scss'
import Note from '../Note/Note'

type notes = {
    notes: note[]
}

const Notes: FC<notes> = ({ notes }) => {
    return (
        <ul className={styles.notes}>
            {notes.map(({ id, label, date, hours, minutes, }) => (
                <li className={styles.notes__element} key={id}>
                    <Note notes={notes} label={label} date={date} hours={hours} minutes={minutes} />
                </li>
            ))}
        </ul>
    )
}

export default Notes