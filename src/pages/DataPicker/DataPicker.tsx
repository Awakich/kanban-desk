import { FC, useState, ChangeEvent } from 'react';
import { note } from '../../types/models';
import Button from '../../shared/UI/Button/Button';
import DatePicker from "react-datepicker";
import Notes from '../../widgets/Notes/Notes';
import styles from './datapicker.module.scss'
import "react-datepicker/dist/react-datepicker.css";

const DataPicker: FC = () => {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [userInput, setUserInput] = useState<string>("")

    const [notes, setNotes] = useState<note[]>([])

    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value)
    }

    const submitHandler = () => {
        const Note = {
            id: (Math.random() * 100).toFixed(12),
            label: userInput,
            date: startDate.toLocaleDateString("en-US"),
            hours: startDate.getHours(),
            minutes: startDate.getMinutes(),
        }
        setNotes(prev => [...prev, Note])
        setUserInput("")
    }

    return (
        <section className={styles.datepicker}>
            <div className={styles.input}>
                <DatePicker showIcon selected={startDate} onChange={(date: Date) => setStartDate(date)} dateFormat="Pp" showTimeSelect />
                <input value={userInput} type='search' className={styles.input__element} onChange={changeInput} />
                <Button onClick={submitHandler}>Отправить</Button>
            </div>
            <Notes notes={notes} />
        </section>
    )
}

export default DataPicker;