import styles from './Cards.module.css'
import propTypes from 'prop-types'


function Cards({ name, description, stars, forks, license, updateDate }) {

    const fecha = new Date;

    const dateResult = updateDate - fecha.toISOString();

    return (
        <div className={styles.cardsContainer}>
            <p className={styles.name}>{name}</p>
            <p className={styles.description}>{description}</p>

            <div className={styles.cardInfo}>
                {license && license ?

                    <p>{license}</p>

                    : ''}

                <p>{forks}</p>
                <p>{stars}</p>

                <div>
                    {console.log(dateResult)}
                </div>
            </div>
        </div>
    )
}

Cards.propTypes = {
    name: propTypes.string,
    description: propTypes.string,
    id: propTypes.number,
    stars: propTypes.number,
    forks: propTypes.number,
    license: propTypes.string,
    updateDate: propTypes.string
};

export default Cards