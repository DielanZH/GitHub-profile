import styles from './Cards.module.css'


function Cards({ id, name, description }) {

    return (
        <div className={styles.cardsContainer}>
            <p className={styles.name}>{name}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default Cards