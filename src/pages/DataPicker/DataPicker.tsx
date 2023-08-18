import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../entities/hooks';
import { addNote } from '../../entities/slices/notesSlice';
import Button from '../../shared/UI/Button/Button';
import DatePicker from "react-datepicker";
import Notes from '../../widgets/Notes/Notes';
import styles from './datapicker.module.scss'
import "react-datepicker/dist/react-datepicker.css";

const DataPicker: FC = () => {
    const dispatch = useAppDispatch()
    const notes = useAppSelector(state => state.notesReducer.notes)

    const [startDate, setStartDate] = useState<Date>(new Date());
    const [userInput, setUserInput] = useState<string>("")

    const AddNote = () => {
        const Note = {
            id: (Math.random() * 100).toFixed(12),
            label: userInput,
            date: startDate.toLocaleDateString("en-US"),
            hours: startDate.getHours(),
            minutes: startDate.getMinutes(),
        }
        dispatch(addNote(Note))
        setUserInput("")
    }

    return (
        <section className={styles.datepicker}>
            <div className={styles.input}>
                <DatePicker showIcon selected={startDate} onChange={(date: Date) => setStartDate(date)} dateFormat="Pp" showTimeSelect />
                <input value={userInput} type='search' className={styles.input__element} onChange={(e) => setUserInput(e.target.value)} />
                <Button onClick={AddNote}>Add</Button>
            </div>

            <Notes notes={notes} />
        </section>
    )
}

export default DataPicker;