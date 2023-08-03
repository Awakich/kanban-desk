import { FC, } from 'react'
import { layout } from '../../types/models'
import styles from './layout.module.scss'

const Layout: FC<layout> = ({ children }) => {
    return (
        <div className={styles.layout}>{children}</div>
    )
}

export default Layout