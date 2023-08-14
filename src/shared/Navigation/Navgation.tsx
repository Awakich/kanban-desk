import { FC } from 'react'
import { Link } from 'react-router-dom'
import { navigation_list } from '../../entities/navigation'
import styles from './navigation.module.scss'

const Navgation: FC = ({ }) => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {navigation_list.map(({ id, label }) => (
                    <Link key={id} to={`/${label}`}><li className={styles.list__item}>{label}</li></Link>
                ))}
            </ul>
        </nav>
    )
}

export default Navgation