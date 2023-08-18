import { FC } from 'react'
import { item, items } from '../../types/models'
import Item from '../Item/Item'

const Items: FC<items> = ({ board, dragOverHandler, dropHandler, dragStartHandler }) => {
    return (
        <section>
            {board.items.map((item: item) => (
                <Item key={item.id} board={board} item={item} dragOverHandler={dragOverHandler} dropHandler={dropHandler} dragStartHandler={dragStartHandler} />
            ))}
        </section>
    )
}

export default Items