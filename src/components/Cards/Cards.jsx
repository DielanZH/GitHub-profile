import styles from './Cards.module.css'
import propTypes from 'prop-types'


function Cards({ id, name, description }) {

    return (
        <div className={styles.cardsContainer}>
            <p className={styles.name}>{name}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

Cards.propTypes = {
    name: propTypes.string,
    description: propTypes.string,
    id: propTypes.number
};

export default Cards