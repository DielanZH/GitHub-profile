import styles from './SearchBar.module.css'
import PropTypes from 'prop-types'

function SearchBar({ input, setInput, setResults }) {

    function handleInputChange(value) {
        setInput(value)
        getData(value)
    }

    function handleOnClick(e) {
        e.preventDefault()
        fetch(`https://api.github.com/users/${input}`)
            .then(res => res.json())
            .then(data => input(data))
    }

    const getData = async (value) => {
        try {
            await fetch(`https://api.github.com/users/${value}`)
                .then(res => res.json())
                .then(data => setResults(data))
            // if (value) results = response.data;
            // setResults(results);
        } catch (error) {
            console.log(error.message);
            setResults("");
        }
    };


    return (
        <div className={styles.searchBarContainer}>
            <form className={styles.SearchBar}>

                <button type='submit' onChange={e => handleOnClick(e)}> </button>

                <input
                    type="text"
                    placeholder='username'
                    value={input}
                    onChange={e => handleInputChange(e.target.value)}
                />

            </form>
        </div>
    )
}

SearchBar.propTypes = {
    results: PropTypes.object,
    setResults: PropTypes.func,
    setInput: PropTypes.func,
    input: PropTypes.string,
};

export default SearchBar