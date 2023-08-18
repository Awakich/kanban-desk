import { FC } from 'react'
import { item, items } from '../../types/models'
import styles from './item.module.scss'

const Item: FC<items> = ({ item, board, dragOverHandler, dropHandler, dragStartHandler }) => {
    return (
        <div draggable={true} key={item?.id} className={styles.item}
            onDragOver={dragOverHandler}
            onDrop={(e) => dropHandler(e, board, item as item)}
            onDragStart={() => dragStartHandler(board, item as item)}
        >
            <p>
                {item?.title}
            </p>

            <p className={styles.item__author}>{item?.author}</p>
        </div>
    )
}

export default Item