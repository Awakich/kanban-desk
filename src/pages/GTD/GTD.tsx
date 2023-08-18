import { FC, useState, FormEvent } from 'react'
import { board } from '../../types/models'
import styles from './gtd.module.scss'
import Button from '../../shared/UI/Button/Button'
import Boards from '../../widgets/Boards/Boards'
import Input from '../../shared/UI/Input/Input'

const GTD: FC = () => {

    const [boards, setBoards] = useState<board[]>(
        [
            { id: "1", title: "Not Started", items: [] },
            { id: "2", title: "In Progress", items: [] },
            { id: "3", title: "Done", items: [] },
        ]
    )

    const [inputTitle, setInputTitle] = useState<string>("")
    const [inputAuthor, setInputAuthor] = useState<string>("")
    const [dirtyInput, setDirtyInput] = useState<boolean>(false)

    const createItem = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const item = {
            id: Math.random().toFixed(1),
            title: inputTitle,
            author: inputAuthor
        }

        if (inputTitle.trim().length === 0 && inputAuthor.trim().length === 0) {
            setDirtyInput(!dirtyInput)
            return;
        } else {
            setDirtyInput(!dirtyInput)
        }

        setInputAuthor("")
        setInputTitle("")
        boards[0].items.push(item)
    }

    return (
        <>
            <form className={styles.inputs} onSubmit={(e) => createItem(e)}>
                <Input choose='title' dirty='title' dirtyInput={dirtyInput} inputTitle={inputTitle} inputTitleHandler={(e) => setInputTitle(e.target.value)} />
                <Input choose='author' dirty='author' dirtyInput={dirtyInput} inputAuthor={inputAuthor} inputAuthorHandler={(e) => setInputAuthor(e.target.value)} />

                <Button>Add</Button>
            </form>

            <Boards boards={boards} setBoards={setBoards} />
        </>

    )
}

export default GTD