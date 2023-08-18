import { FC } from 'react'
import { home_list } from '../../entities/home'
import { Link } from 'react-router-dom'
import styles from './home.module.scss'

const Home: FC = () => {
    return (
        <ul className={styles.list}>
            {home_list.map(({ id, label, description, color }) => (
                <div key={id} className={styles.list__item}>
                    <Link to={`/${label}`}>
                        <li key={id} className={styles.list__item} style={{ backgroundColor: `${color}` }}>
                            <p className={styles.label}>{label}</p>
                            <p className={styles.description}>{description}</p>
                        </li>
                    </Link>
                </div>
            ))}
        </ul>
    )
}

export default Home