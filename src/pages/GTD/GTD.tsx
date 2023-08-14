import { FC, useState, DragEvent, FormEvent, ChangeEvent } from 'react'
import { board, item } from '../../types/models'
import styles from './gtd.module.scss'
import Button from '../../shared/UI/Button/Button'

const GTD: FC = () => {
    const [boards, setBoards] = useState<board[]>(
        [
            { id: "1", title: "Not Started", items: [] },
            { id: "2", title: "In Progress", items: [] },
            { id: "3", title: "Done", items: [] },
        ]
    )

    const [currentBoard, setCurrentBoard] = useState<any>()
    const [currentItem, setCurrentItem] = useState<any>()
    const [inputTitle, setInputTitle] = useState<string>("")
    const [inputAuthor, setInputAuthor] = useState<string>("")
    const [dirtyInput, setDirtyInput] = useState<boolean>(false)

    const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const dropHandler = (e: DragEvent<HTMLDivElement>, board: board, item: item) => {
        e.preventDefault()
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)

        const dropIndex = board.items.indexOf(item)
        board.items.splice(dropIndex + 1, 0, currentItem)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }

            if (b.id === currentBoard.id) {
                return currentBoard
            }

            return b
        }))
    }

    const dragStartHandler = (board: board, item: item) => {
        setCurrentBoard(board)
        setCurrentItem(item)
    }

    const dropCardHandler = (e: DragEvent<HTMLDivElement>, board: board) => {
        e.preventDefault()
        board.items.push(currentItem)
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }

            if (b.id === currentBoard.id) {
                return currentBoard
            }

            return b
        }))
    }

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

    const inputTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value)
    }

    const inputAuthorHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputAuthor(e.target.value)
    }

    return (
        <>
            <form className={styles.inputs} onSubmit={(e) => createItem(e)}>

                <div className={styles.inputs__title}>
                    <label>Title</label>
                    {dirtyInput ? <p className={styles.dirty}>Enter title</p> : ""}
                    <input
                        value={inputTitle}
                        className={styles.input}
                        type='text'
                        onChange={inputTitleHandler} />
                </div>

                <div className={styles.inputs__author}>
                    <label>Author</label>
                    {dirtyInput ? <p className={styles.dirty}> Enter author</p> : ""}
                    <input
                        value={inputAuthor}
                        className={styles.input}
                        type='text'
                        onChange={inputAuthorHandler} />
                </div>

                <Button>Add</Button>

            </form>

            <div className={styles.gtd}>
                {boards.map((board) => (
                    <div
                        onDrop={(e) => dropCardHandler(e, board)}
                        onDragOver={dragOverHandler}
                        className={styles.board} key={board.id}>
                        <h4>{board.title}</h4>
                        {board.items.map((item: item) => (
                            <div draggable={true} key={item.id} className={styles.item}
                                onDragOver={dragOverHandler}
                                onDrop={(e) => dropHandler(e, board, item)}
                                onDragStart={() => dragStartHandler(board, item)}
                            >
                                <p>
                                    {item.title}
                                </p>

                                <p className={styles.item__author}>{item.author}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>

    )
}

export default GTD