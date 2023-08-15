import { FC } from 'react'
import { note } from '../../types/models'
import styles from './notes.module.scss'
import Note from '../Note/Note'

type notes = {
    notes: note[]
    removeNote: (id: string) => void;
}

const Notes: FC<notes> = ({ notes, removeNote }) => {
    return (
        <ul className={styles.notes}>
            {notes.map(({ id, label, date, hours, minutes }) => (
                <li className={styles.notes__element} key={id}>
                    <Note id={id} label={label} date={date} hours={hours} minutes={minutes} removeNote={removeNote} />
                </li>
            ))}
        </ul>
    )
}

export default Notes