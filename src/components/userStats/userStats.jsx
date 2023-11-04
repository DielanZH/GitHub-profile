import styles from './userStats.module.css'

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

export default UserStats