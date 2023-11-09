import styles from './SearchBarResults.module.css'
import PropTypes from 'prop-types';

export default function SearchBarResults({ input, results, setProfile }) {

    if (input)

        return (
            <button className={styles.searchResults} onClick={() => setProfile(results)} >

                <img src={results.avatar_url} alt="Not found" />

                <div className={styles.textContainer}>

                    <p className={styles.nameResult}>
                        {results.name}
                    </p>

                    <p className={styles.bioResult}>
                        {input && results.bio && results.bio.length > 20 ? results.bio.slice(0, 20) + '...' : results.bio}
                    </p>

                </div>
            </button>

        )
    return ("")

}
SearchBarResults.propTypes = {
    results: PropTypes.object,
    setResults: PropTypes.func,
    setProfile: PropTypes.func,
    setInput: PropTypes.func,
    input: PropTypes.string,
};