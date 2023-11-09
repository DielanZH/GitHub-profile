import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import UserStats from "../userStats/userStats";
import Cards from "../Cards/Cards";
import styles from './Home.module.css'
import { Link } from "react-router-dom";
import SearchBarResults from "../SearchBar/SearchBarResults";

function Home() {

    const [input, setInput] = useState("");

    const [results, setResults] = useState({})

    const [profile, setProfile] = useState("")

    const [cards, setCards] = useState([])

    const [showAllCards, toggleShowAllCards] = useState(false)



    const fetchUserProfile = (username) => {
        return fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json());
    }

    const fetchUserRepos = (username) => {
        return fetch(`https://api.github.com/users/${username}/repos`)
            .then(res => res.json());
    }

    useEffect(() => {
        if (!profile) {
            fetchUserProfile('github')
                .then(data => {
                    setProfile(data);
                    return fetchUserRepos(data.login);
                })
                .then(data => setCards(data))
                .catch(error => console.error('Error fetching data: ', error));
        }
    }, []);

    useEffect(() => {
        if (profile) {
            fetchUserRepos(profile.login)
                .then(data => setCards(data))
                .catch(error => console.error('Error fetching user repos: ', error));
        }
    }, [profile]);

    return (
        <div className={styles.HomeContainer}>

            <div className={styles.searchBarContainer}>

                <SearchBar
                    input={input}
                    setInput={setInput}
                    results={results}
                    setResults={setResults}
                />
                <SearchBarResults
                    results={results}
                    input={input}
                    setProfile={setProfile}
                />

            </div>

            <div className={styles.TopBar}>

                <div className={styles.ImageStats}>
                    <img src={profile.avatar_url} alt="Image not found" />

                    <UserStats
                        followers={profile.followers}
                        following={profile.following}
                        location={profile.location}
                    />
                </div>

                <div>
                    <p className={styles.userName}>
                        {profile.name}
                    </p>

                    <p className={styles.userBio}>
                        {profile.bio}
                    </p>
                </div>

            </div>

            <div className={styles.CardsContainer}>
                {cards && cards?.slice(0, showAllCards ? cards.length : 4).map(el => {

                    return (
                        <div key={el.id}>
                            <Link to={el.html_url} target="_blank" style={{ textDecoration: 'none' }}>
                                <Cards
                                    key={el.id}
                                    id={el.id}
                                    name={el.name}
                                    description={el.description}
                                />
                            </Link>
                        </div>
                    )
                })
                }

            </div>
            <div className={styles.repositoriesBtnContainer}>
                {!showAllCards && cards.length > 4 && (
                    <button className={styles.repositoriesBtn} onClick={toggleShowAllCards}>View all repositories</button>
                )}
            </div>

        </div>
    )
}

export default Home;