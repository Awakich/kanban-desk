import { FC, useState } from 'react'
import styles from './gtd.module.scss'

const GTD: FC = () => {
    const [tasks, setTasks] = useState<any[]>([])

    return (
        <div>GTD</div>
    )
}

export default GTD