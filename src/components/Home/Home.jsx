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

    const [cardPerPage] = useState(4)

    useEffect(() => {
        fetch(`https://api.github.com/users/github`)
            .then(res => res.json())
            .then(data => setProfile(data))

    }, [])

    useEffect(() => {
        fetch(`https://api.github.com/users/github/repos`)
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

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
                setResults={setResults}
                setInput={setInput}
                input={input}
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
                {cards && cards?.map(el => {

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

        </div>
    )
}

export default Home;