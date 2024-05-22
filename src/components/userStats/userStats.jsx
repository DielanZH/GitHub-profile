import styles from './userStats.module.css'
import propTypes from 'prop-types'

function UserStats({ followers, following, location }) {
    return (
        <div className={styles.statsContainer} >

            <div className={styles.statsFraction}>
                <p>Followers</p><hr /><p className={styles.statsResults}>{followers}</p>
            </div>

            <div className={styles.statsFraction}>
                <p>Following</p><hr /><p className={styles.statsResults}>{following}</p>

            </div>

            <div className={styles.statsFraction}>
                <p>Location</p><hr /><p className={styles.statsResults}>{location}</p>
            </div>

        </div>
    )
}

UserStats.propTypes = {
    followers: propTypes.number,
    following: propTypes.number,
    location: propTypes.string
};

export default UserStats