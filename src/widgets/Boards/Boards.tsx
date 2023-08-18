import { FC, DragEvent, useState } from 'react'
import { board, item } from '../../types/models'
import Items from '../Items/Items'
import styles from './boards.module.scss'

const Boards: FC<any> = ({ setBoards, boards }) => {

    const [currentBoard, setCurrentBoard] = useState<any>()
    const [currentItem, setCurrentItem] = useState<any>()

    const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const dragStartHandler = (board: board, item: item) => {
        setCurrentBoard(board)
        setCurrentItem(item)
    }

    const dropHandler = (e: DragEvent<HTMLDivElement>, board: board, item: item) => {
        e.preventDefault()
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)

        const dropIndex = board.items.indexOf(item)
        board.items.splice(dropIndex + 1, 0, currentItem)
        setBoards(boards.map((b: board) => {
            if (b.id === board.id) {
                return board
            }

            if (b.id === currentBoard.id) {
                return currentBoard
            }

            return b
        }))
    }

    const dropCardHandler = (e: DragEvent<HTMLDivElement>, board: board) => {
        e.preventDefault()
        board.items.push(currentItem)
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        setBoards(boards.map((b: board) => {
            if (b.id === board.id) {
                return board
            }

            if (b.id === currentBoard.id) {
                return currentBoard
            }

            return b
        }))
    }

    return (
        <div className={styles.gtd}>
            {boards.map((board: board) => (
                <div
                    onDrop={(e) => dropCardHandler(e, board)}
                    onDragOver={dragOverHandler}
                    className={styles.board} key={board.id}>
                    <h4>{board.title}</h4>

                    <Items board={board} dragOverHandler={dragOverHandler} dropHandler={dropHandler} dragStartHandler={dragStartHandler} />
                </div>
            ))}
        </div>
    )
}

export default Boards