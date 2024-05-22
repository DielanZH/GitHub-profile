import styles from './Cards.module.css'
import propTypes from 'prop-types'
import licenseShield from '../../assets/Chield_alt.svg'
import forkSVG from '../../assets/Nesting.svg'
import starSVG from '../../assets/Star.svg'


function Cards({ name, description, stars, forks, license, updateDate }) {

    const fechaActual = new Date();

    const fechaUpdate = new Date(updateDate);

    const diferenciaMilisegundos = fechaActual - fechaUpdate;

    const diferenciaSegundos = Math.floor(diferenciaMilisegundos / 1000);
    const diferenciaMinutos = Math.floor(diferenciaSegundos / 60);
    const diferenciaHoras = Math.floor(diferenciaMinutos / 60);
    const diferenciaDias = Math.floor(diferenciaHoras / 24);

    return (
        <div className={styles.cardsContainer}>
            <p className={styles.name}>{name}</p>
            <p className={styles.description}>{description}</p>

            <div className={styles.cardInfo}>
                {license && license ?

                    <p><img src={licenseShield} className={styles.svgImage}></img>{license}</p>

                    : ''}

                <p><img src={forkSVG} className={styles.svgImage}></img>{forks}</p>
                <p><img src={starSVG} className={styles.svgImage}></img>{stars}</p>

                <p className={styles.updatedMessage}>updated at {diferenciaDias} days ago</p>

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